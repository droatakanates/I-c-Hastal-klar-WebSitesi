---
title: "İnfografik başlığı"
description: "İnfografiğin neyi anlattığını 1-2 cümlede açıklayın (paylaşımlarda görünecek)."
publishDate: 2026-05-25
category: "Sağlık Rehberi"   # İç Hastalıkları / Sağlık Rehberi / Siyaset Bilimi / Genel
tags: ["infografik", "etiket2"]
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

**Dosya yeri:** Tüm infografikler → `src/content/infografik/dosya-adi.md`
(Pages CMS üzerinden "İnfografikler" koleksiyonundan eklenenler de buraya yazılır.)

**Kategori alanı** infografiğin hangi konu alanından geldiğini belirtir:
İç Hastalıkları / Sağlık Rehberi / Siyaset Bilimi / Genel.

**Görsel yeri:** `public/gorseller/dosya-adi.png`
