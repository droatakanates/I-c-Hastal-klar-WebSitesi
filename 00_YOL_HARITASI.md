# omuratakanates.com — Yol Haritası

**Hedef:** Tek yazarlı kişisel blog. İki ana bölüm: (1) Kanıta dayalı iç hastalıkları içeriği, (2) Siyaset bilimi yazıları.
**Teknoloji:** Astro (statik site jeneratörü) + Markdown içerik + ücretsiz hosting (Netlify/Vercel)
**Domain:** omuratakanates.com
**Güncelleme:** 2026-05-23

---

## 🧭 Mimari Karar Özeti

| Karar | Seçim | Gerekçe |
|---|---|---|
| Site yapısı | Tek site, iki ana bölüm (`/tip` ve `/siyaset`) | Kişisel marka bütünlüğü |
| Yazar modeli | Tek yazarlı kişisel blog | Tutarlı ses, basit yönetim |
| Teknoloji | Astro + Markdown | Hızlı, ücretsiz, güvenli, akademik içeriğe uygun |
| Hosting | Netlify veya Vercel (ücretsiz tier) | Sıfır maliyet, otomatik SSL, CDN |
| İçerik | Markdown dosyaları (Git ile sürüm kontrolü) | Vendor lock yok, taşınabilir |

---

## 📋 Aşamalar

### AŞAMA 1 — Hazırlık ✅
- [x] Site adı: **omuratakanates.com**
- [x] Mimari karar: Astro, tek site iki bölüm, tek yazar
- [x] Kategori taslağı (aşağıda)

### AŞAMA 2 — Lokal Kurulum (devam ediyor)
- [ ] Homebrew kurulumu (kullanıcı)
- [ ] Node.js + npm kurulumu (`brew install node`)
- [ ] Astro projesi başlatma
- [ ] Git deposu başlatma

### AŞAMA 3 — Site İskeleti
- [ ] Content collections: `tip/` ve `siyaset/`
- [ ] Schema (frontmatter doğrulama)
- [ ] Layoutlar: BaseLayout, PostLayout, SectionLayout
- [ ] Sayfalar: ana sayfa, /tip, /siyaset, hakkımda, iletişim, KVKK, sorumluluk reddi

### AŞAMA 4 — Tasarım
- [ ] Tipografi (Inter + Source Serif veya benzeri akademik kombinasyon)
- [ ] Renk paleti (tıbbi mavi-yeşil + nötr akademik gri)
- [ ] Responsive (mobil öncelikli)
- [ ] Dark mode (opsiyonel)

### AŞAMA 5 — İçerik Standartları
- [ ] Frontmatter şablonu (her iki bölüm için)
- [ ] Atıf sistemi (Vancouver tıp / APA siyaset bilimi)
- [ ] Kanıt seviyesi rozet sistemi (tıp yazıları için: GRADE, USPSTF)
- [ ] Örnek yazı: 1 tıp + 1 siyaset

### AŞAMA 6 — SEO & Analitik
- [ ] sitemap.xml (Astro yerleşik)
- [ ] RSS feed (bölüm bazlı + birleşik)
- [ ] Meta etiketler, Open Graph
- [ ] Plausible/Umami (gizlilik dostu analitik) — opsiyonel

### AŞAMA 7 — Yayına Alma
- [ ] Domain alımı (omuratakanates.com)
- [ ] GitHub deposu
- [ ] Netlify/Vercel'e deploy
- [ ] Domain DNS yönlendirmesi
- [ ] SSL otomatik (Netlify/Vercel sağlar)
- [ ] Google Search Console

---

## 📚 Kategori Yapısı

### Tıp Bölümü (`/tip/[kategori]/[slug]`)
Ana kategoriler (TUS/YDUS uyumlu):
1. Endokrinoloji ve Metabolizma
2. Gastroenteroloji
3. Hematoloji
4. Kardiyoloji (dahili bakış)
5. Nefroloji
6. Romatoloji
7. Göğüs Hastalıkları (dahili)
8. Onkoloji (dahili)
9. Enfeksiyon Hastalıkları (dahili)
10. Geriatri

İçerik tipi etiketleri:
- Olgu Sunumu · Literatür Özeti · Klinik Pratik · Kılavuz Özeti · TUS-YDUS · Asistan Köşesi

### Siyaset Bilimi Bölümü (`/siyaset/[kategori]/[slug]`)
Ana kategoriler:
1. Türk Siyaseti
2. Karşılaştırmalı Siyaset
3. Uluslararası İlişkiler
4. Siyaset Teorisi
5. Seçim & Demokrasi Çalışmaları
6. Kitap / Makale İncelemesi

---

## 📝 Yazı Frontmatter Şablonu

```yaml
---
title: "Yazı Başlığı"
slug: "yazi-baslik"
description: "Kısa SEO özeti (155 karakter)"
publishDate: 2026-05-23
updatedDate: 2026-05-23
section: "tip"          # "tip" veya "siyaset"
category: "Endokrinoloji ve Metabolizma"
tags: ["diyabet", "tip-2", "metformin"]
evidenceLevel: "A"      # sadece tıp yazılarında (GRADE: A/B/C/D)
draft: false
references:
  - "Smith J et al. NEJM. 2024;390:123-130."
  - "ADA Standards of Care 2025."
---
```

---

## ⚖️ Yasal Notlar

- **KVKK:** 6698 sayılı kanun gereği aydınlatma metni zorunlu (`/kvkk` sayfası)
- **Tıbbi Sorumluluk Reddi:** Site içeriğinin hekim danışmanlığının yerine geçmediği vurgusu (`/sorumluluk-reddi`)
- **Hasta Mahremiyeti:** Olgu sunumlarında kimlik bilgilerinin tamamen anonimize edilmesi
- **Telif:** Görsellerde kaynak; CC lisanslı veya kendi çekimleriniz
- **Siyaset yazılarında:** Kişisel görüş beyanı / kaynak gösterme zorunluluğu

---

## 🎨 Tasarım Prensipleri

- Beyaz/açık zemin, okunabilir tipografi (en az 17px gövde)
- Akademik karakter: serif başlık + sans gövde
- Ana renk: koyu lacivert / petrol mavisi (her iki bölüm için nötr)
- Bölüm ayırt edici aksan: tıp = teal, siyaset = amber
- Ana sayfada: kısa biyografi + her iki bölümden son 3 yazı + öne çıkan
- Mobil öncelikli (%70+ trafik mobilden gelir)
- Reklamsız, izleme tagsız temiz okuma deneyimi
