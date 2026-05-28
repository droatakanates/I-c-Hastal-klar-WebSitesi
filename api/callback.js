// GitHub OAuth — adım 2: GitHub'dan dönen kodu token ile değiştir ve
// Sveltia/Decap CMS'in beklediği postMessage el sıkışmasıyla pencereye gönder.

function renderPage(status, content) {
  const payload = `authorization:github:${status}:${JSON.stringify(content)}`;
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8" /></head><body>
<p>Giriş tamamlanıyor, bu pencere otomatik kapanacak…</p>
<script>
  (function () {
    function receiveMessage(e) {
      window.opener && window.opener.postMessage(${JSON.stringify(payload)}, e.origin);
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener && window.opener.postMessage('authorizing:github', '*');
  })();
</script>
</body></html>`;
}

function parseCookies(header) {
  const out = {};
  (header || '').split(';').forEach((part) => {
    const idx = part.indexOf('=');
    if (idx === -1) return;
    out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim());
  });
  return out;
}

export default async function handler(req, res) {
  const { code, state } = req.query;
  const cookies = parseCookies(req.headers.cookie);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Set-Cookie', 'oauth_state=; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=0');

  if (!code) {
    console.error('[oauth/callback] kod yok (no_code)');
    res.status(400).send(renderPage('error', { error: 'Kod alınamadı (no_code).' }));
    return;
  }

  // CSRF state kontrolü: çerez varsa doğrula. Safari/ITP popup akışında
  // state çerezi düşebildiği için, çerez yoksa kontrolü atla (login kilitlenmesin).
  if (cookies.oauth_state && state && state !== cookies.oauth_state) {
    console.error('[oauth/callback] state uyuşmadı', { got: state, expected: cookies.oauth_state });
    res.status(403).send(renderPage('error', { error: 'Güvenlik doğrulaması başarısız (invalid_state).' }));
    return;
  }
  if (!cookies.oauth_state) {
    console.warn('[oauth/callback] state çerezi yok — büyük ihtimalle Safari/ITP çerezi düşürdü, kontrol atlandı');
  }

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    console.error('[oauth/callback] env eksik', { hasId: !!clientId, hasSecret: !!clientSecret });
    res.status(500).send(renderPage('error', { error: 'OAuth ortam değişkenleri eksik.' }));
    return;
  }
  console.log('[oauth/callback] env mevcut', {
    clientIdUzunluk: clientId.length,
    secretUzunluk: clientSecret.length,
  });

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      console.error('[oauth/callback] GitHub token hatası', data);
      res.status(401).send(renderPage('error', { error: data.error_description || data.error || 'Token alınamadı.' }));
      return;
    }

    console.log('[oauth/callback] token alındı, giriş başarılı');
    res.status(200).send(renderPage('success', { token: data.access_token, provider: 'github' }));
  } catch (err) {
    console.error('[oauth/callback] istisna', err);
    res.status(500).send(renderPage('error', { error: String(err) }));
  }
}
