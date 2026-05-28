import crypto from 'node:crypto';

// GitHub OAuth — adım 1: kullanıcıyı GitHub yetkilendirme ekranına yönlendir.
export default function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send('OAUTH_GITHUB_CLIENT_ID ortam değişkeni tanımlı değil.');
    return;
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const state = crypto.randomUUID();

  res.setHeader(
    'Set-Cookie',
    `oauth_state=${state}; HttpOnly; Secure; Path=/; SameSite=Lax; Max-Age=600`
  );

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state,
    allow_signup: 'false',
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
  });
  res.end();
}
