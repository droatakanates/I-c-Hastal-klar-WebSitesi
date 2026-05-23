---
title: "İnfografik başlığı"
description: "İnfografiğin neyi anlattığını 1-2 cümlede açıklayın (paylaşımlarda görünecek)."
publishDate: 2026-05-25
category: "Kronik Hastalıklar"
tags: ["infografik", "etiket2"]
okumaSuresi: "1 dk"
draft: false
---

![Burası ekran okuyucular ve görsel yüklenemediğinde görünecek alternatif metindir — kısa ve açıklayıcı yazın](/gorseller/dosya-adi.png)

---

## Önemli notlar — bu yazı türü hakkında

**Yalnızca infografik içeren yazılar için kurallar:**

1. **Görseli `public/gorseller/` klasörüne koyun.** Markdown'da yolu `/gorseller/dosya-adi.png` olarak yazın (başında `/` olduğuna dikkat).
2. **Görsel adı**: küçük harf, boşluksuz, Türkçe karakter yok. Örnek: `diyabet-belirtileri.png` ✓ — `Diyabet Belirtileri.png` ✗
3. **Alt metin** (`![...]` köşeli parantez içindeki kısım) zorunludur. Hem SEO hem görme engelli okuyucular için.
4. **Boyut**: minimum 1024px geniş, maksimum 2000px geniş, PNG veya JPG. Çok büyük dosyalar siteyi yavaşlatır.

### İnfografiği daha geniş göstermek isterseniz

Standart `![](...)` görüntüsü 720px genişlikle sınırlıdır. **Daha geniş** istiyorsanız HTML kullanın:

```html
<figure class="infographic">
  <img src="/gorseller/dosya-adi.png" alt="Alt metin buraya">
  <figcaption>Şekil 1: İnfografik altyazısı (opsiyonel).</figcaption>
</figure>
```

Bu, görselin 1024px'e kadar genişlemesini sağlar.

### Birden fazla infografik

Birden fazla görsel ekleyebilirsiniz; markdown'da alt alta yazın:

```markdown
![Tansiyon ölçme adımları](/gorseller/tansiyon-adimlar.png)

Aşağıdaki şema sınıflandırmayı özetler.

![Tansiyon sınıflandırması](/gorseller/tansiyon-siniflar.png)
```

### Sadece görsel, hiç metin istemiyorsanız

Yukarıdaki HTML `<figure>` bloğunu kullanın ve altına metin koymayın. Yazınız sayfada başlık + tarih + kategori + tek bir infografikten ibaret olur.

---

**Dosya yeri:** İçeriğin gideceği bölüme göre seçin:
- İç Hastalıkları infografiği → `src/content/ic-hastaliklari/dosya-adi.md`
- Sağlık Rehberi infografiği → `src/content/saglik-rehberi/dosya-adi.md`
- Siyaset infografiği → `src/content/siyaset/dosya-adi.md`

**Görsel yeri:** `public/gorseller/dosya-adi.png`
