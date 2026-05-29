// Site genelinde kullanılan dil verileri ve UI etiketleri.
// Yazı içeriği kendi diliyle (içerik markdown'undan) gelir; bu modül
// yalnızca arabirim metinlerini (menü, butonlar vb.) çevirir.

export const LOCALES = ['tr', 'kibris', 'az', 'en', 'sv', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'tr';

// KKTC bayrağı için inline SVG — Unicode'da ayrı emoji yok (ISO 3166-1'de tanınmıyor).
// Beyaz zemin (2:3 oran), iki ince kırmızı şerit kenara yakın, kırmızı hilal ve
// 5 köşeli yıldız bayrağın dikey ortasında (y=20) eşit hizada.
const KKTC_FLAG_SVG = `<svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KKTC bayrağı"><rect width="60" height="40" fill="#fff"/><rect y="6" width="60" height="2" fill="#E30A17"/><rect y="32" width="60" height="2" fill="#E30A17"/><circle cx="24" cy="20" r="7" fill="#E30A17"/><circle cx="25.6" cy="20" r="5.7" fill="#fff"/><polygon points="34,16.8 34.8,19 37,19 35.2,20.4 35.9,22.6 34,21.3 32.1,22.6 32.8,20.4 31,19 33.2,19" fill="#E30A17"/></svg>`;

export const LOCALE_META: Record<
  Locale,
  { name: string; flag: string; flagSvg?: string; htmlLang: string; dir: 'ltr' | 'rtl' }
> = {
  tr: { name: 'Türkçe', flag: '🇹🇷', htmlLang: 'tr', dir: 'ltr' },
  kibris: {
    name: 'Kıbrıs Türkçesi',
    flag: '',
    flagSvg: KKTC_FLAG_SVG,
    htmlLang: 'tr-CY',
    dir: 'ltr',
  },
  az: { name: 'Azərbaycanca', flag: '🇦🇿', htmlLang: 'az', dir: 'ltr' },
  en: { name: 'English', flag: '🇬🇧', htmlLang: 'en', dir: 'ltr' },
  sv: { name: 'Svenska', flag: '🇸🇪', htmlLang: 'sv', dir: 'ltr' },
  de: { name: 'Deutsch', flag: '🇩🇪', htmlLang: 'de', dir: 'ltr' },
};

type Strings = {
  nav: {
    home: string;
    about: string;
    icHastaliklari: string;
    siyaset: string;
    saglikRehberi: string;
    infografik: string;
    iletisim: string;
    search: string;
    themeToggle: string;
    languageToggle: string;
    openMenu: string;
    closeMenu: string;
  };
  post: {
    publishedOn: string;
    updatedOn: string;
    readingTime: string;
    references: string;
    relatedPosts: string;
    sharePost: string;
    medicalDisclaimerTitle: string;
    medicalDisclaimerBody: string;
    moreDetails: string;
    pdfDownload: string;
    enlargeImage: string;
  };
  list: {
    allPosts: string;
    latestPosts: string;
    noPostsYet: string;
    readMore: string;
    category: string;
  };
  newsletter: {
    title: string;
    lead: string;
    placeholder: string;
    submit: string;
    privacy: string;
    compactTitle: string;
  };
  language: {
    contentNotice: string; // "Bu yazı şu an Türkçe görüntüleniyor — diğer dillerdeki versiyonları çıktıkça otomatik eklenecek."
  };
};

export const STRINGS: Record<Locale, Strings> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      icHastaliklari: 'İç Hastalıkları',
      siyaset: 'Siyaset Bilimi',
      saglikRehberi: 'Sağlık Rehberi',
      infografik: 'İnfografikler',
      iletisim: 'İletişim',
      search: 'Ara',
      themeToggle: 'Tema değiştir',
      languageToggle: 'Dil seç',
      openMenu: 'Menüyü aç',
      closeMenu: 'Menüyü kapat',
    },
    post: {
      publishedOn: 'Yayın',
      updatedOn: 'Güncelleme',
      readingTime: 'Okuma',
      references: 'Kaynaklar',
      relatedPosts: 'İlgili yazılar',
      sharePost: 'Paylaş',
      medicalDisclaimerTitle: 'Tıbbi sorumluluk reddi:',
      medicalDisclaimerBody:
        'Bu yazı genel bilgilendirme amaçlıdır ve hekim danışmanlığının yerine geçmez. Klinik kararlar için yetkili sağlık profesyoneline başvurunuz.',
      moreDetails: 'Detaylı bilgi',
      pdfDownload: 'PDF olarak indir',
      enlargeImage: 'Görseli büyüt',
    },
    list: {
      allPosts: 'Tüm yazılar',
      latestPosts: 'Son yazılar',
      noPostsYet: 'Henüz yazı eklenmedi.',
      readMore: 'Devamını oku',
      category: 'Kategori',
    },
    newsletter: {
      title: 'Yeni yazılardan haberdar olun',
      lead: 'Ayda 1-2 e-posta, en yeni yazıların özetleri. İstediğiniz zaman ayrılabilirsiniz.',
      placeholder: 'e-posta adresiniz',
      submit: 'Abone ol',
      privacy: 'Spam yok. Reklam yok. Üçüncü taraf paylaşımı yok.',
      compactTitle: '📬 Newsletter',
    },
    language: {
      contentNotice:
        'Bu yazı şu an Türkçe görüntüleniyor — diğer dillerdeki versiyonları çıktıkça otomatik eklenecek.',
    },
  },
  kibris: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      icHastaliklari: 'İç Hastalıkları',
      siyaset: 'Siyaset Bilimi',
      saglikRehberi: 'Hasta Rehberi',
      infografik: 'İnfografikler',
      iletisim: 'İletişim',
      search: 'Ara',
      themeToggle: 'Tema değiştir',
      languageToggle: 'Dil seç',
      openMenu: 'Menüyü aç',
      closeMenu: 'Menüyü kapat',
    },
    post: {
      publishedOn: 'Yayın',
      updatedOn: 'Güncelleme',
      readingTime: 'Okuma',
      references: 'Kaynaklar',
      relatedPosts: 'İlgili yazılar',
      sharePost: 'Paylaş',
      medicalDisclaimerTitle: 'Tıbbi sorumluluk reddi:',
      medicalDisclaimerBody:
        'Bu yazı genel bilgilendirme içindir, hekim danışmanlığının yerini tutmaz. Klinik kararlar için yetkili sağlık profesyoneline başvurun.',
      moreDetails: 'Detaylı bilgi',
      pdfDownload: 'PDF indir',
      enlargeImage: 'Görseli büyüt',
    },
    list: {
      allPosts: 'Tüm yazılar',
      latestPosts: 'Son yazılar',
      noPostsYet: 'Henüz yazı yok.',
      readMore: 'Devamını oku',
      category: 'Kategori',
    },
    newsletter: {
      title: 'Yeni yazılardan haberdar olun',
      lead: 'Ayda 1-2 e-posta, son yazıların özetleri. İstediğiniz zaman ayrılabilirsiniz.',
      placeholder: 'e-posta adresiniz',
      submit: 'Abone ol',
      privacy: 'Reklam veya üçüncü taraf paylaşımı yok.',
      compactTitle: '📬 Bülten',
    },
    language: {
      contentNotice:
        'Bu yazının Kıbrıs Türkçesi versiyonu henüz yok — Türkçe orijinaliyle görüntüleniyor.',
    },
  },
  az: {
    nav: {
      home: 'Ana səhifə',
      about: 'Haqqımda',
      icHastaliklari: 'Daxili xəstəliklər',
      siyaset: 'Siyasət elmi',
      saglikRehberi: 'Xəstə bələdçisi',
      infografik: 'İnfoqrafikalar',
      iletisim: 'Əlaqə',
      search: 'Axtar',
      themeToggle: 'Mövzunu dəyiş',
      languageToggle: 'Dil seç',
      openMenu: 'Menyu',
      closeMenu: 'Bağla',
    },
    post: {
      publishedOn: 'Yayım',
      updatedOn: 'Yeniləmə',
      readingTime: 'Oxu',
      references: 'Mənbələr',
      relatedPosts: 'Əlaqəli yazılar',
      sharePost: 'Paylaş',
      medicalDisclaimerTitle: 'Tibbi məsuliyyət rəddi:',
      medicalDisclaimerBody:
        'Bu yazı ümumi məlumat xarakteri daşıyır və həkim məsləhətini əvəz etmir. Klinik qərarlar üçün səlahiyyətli səhiyyə mütəxəssisinə müraciət edin.',
      moreDetails: 'Ətraflı',
      pdfDownload: 'PDF olaraq endir',
      enlargeImage: 'Şəkli böyüt',
    },
    list: {
      allPosts: 'Bütün yazılar',
      latestPosts: 'Son yazılar',
      noPostsYet: 'Hələ yazı yoxdur.',
      readMore: 'Davamı',
      category: 'Kateqoriya',
    },
    newsletter: {
      title: 'Yeni yazılardan xəbərdar olun',
      lead: 'Ayda 1-2 e-poçt, son yazıların xülasələri. İstədiyiniz vaxt çıxa bilərsiniz.',
      placeholder: 'e-poçt ünvanınız',
      submit: 'Abunə ol',
      privacy: 'Spam yoxdur. Reklam yoxdur.',
      compactTitle: '📬 Bülleten',
    },
    language: {
      contentNotice:
        'Bu yazının Azərbaycanca versiyası hələ yoxdur — orijinal dildə (Türkcə) göstərilir.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      icHastaliklari: 'Internal Medicine',
      siyaset: 'Political Science',
      saglikRehberi: 'Patient Guide',
      infografik: 'Infographics',
      iletisim: 'Contact',
      search: 'Search',
      themeToggle: 'Toggle theme',
      languageToggle: 'Choose language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    post: {
      publishedOn: 'Published',
      updatedOn: 'Updated',
      readingTime: 'Reading',
      references: 'References',
      relatedPosts: 'Related posts',
      sharePost: 'Share',
      medicalDisclaimerTitle: 'Medical disclaimer:',
      medicalDisclaimerBody:
        'This article is for general information only and does not substitute for medical advice. For clinical decisions, consult a licensed healthcare professional.',
      moreDetails: 'More details',
      pdfDownload: 'Download PDF',
      enlargeImage: 'Enlarge image',
    },
    list: {
      allPosts: 'All posts',
      latestPosts: 'Latest posts',
      noPostsYet: 'No posts yet.',
      readMore: 'Read more',
      category: 'Category',
    },
    newsletter: {
      title: 'Get notified of new posts',
      lead: '1-2 emails per month, summaries of the latest posts. Unsubscribe anytime.',
      placeholder: 'your email address',
      submit: 'Subscribe',
      privacy: 'No spam. No ads. No third-party sharing.',
      compactTitle: '📬 Newsletter',
    },
    language: {
      contentNotice:
        'An English version of this article is not yet available — showing the original (Turkish).',
    },
  },
  sv: {
    nav: {
      home: 'Startsida',
      about: 'Om mig',
      icHastaliklari: 'Internmedicin',
      siyaset: 'Statsvetenskap',
      saglikRehberi: 'Patientguide',
      infografik: 'Infografik',
      iletisim: 'Kontakt',
      search: 'Sök',
      themeToggle: 'Växla tema',
      languageToggle: 'Välj språk',
      openMenu: 'Öppna meny',
      closeMenu: 'Stäng meny',
    },
    post: {
      publishedOn: 'Publicerad',
      updatedOn: 'Uppdaterad',
      readingTime: 'Lästid',
      references: 'Referenser',
      relatedPosts: 'Relaterade inlägg',
      sharePost: 'Dela',
      medicalDisclaimerTitle: 'Medicinsk friskrivning:',
      medicalDisclaimerBody:
        'Denna artikel är endast för allmän information och ersätter inte medicinsk rådgivning. Kontakta legitimerad vårdpersonal för kliniska beslut.',
      moreDetails: 'Mer info',
      pdfDownload: 'Ladda ner PDF',
      enlargeImage: 'Förstora bild',
    },
    list: {
      allPosts: 'Alla inlägg',
      latestPosts: 'Senaste inläggen',
      noPostsYet: 'Inga inlägg ännu.',
      readMore: 'Läs mer',
      category: 'Kategori',
    },
    newsletter: {
      title: 'Få besked om nya inlägg',
      lead: '1-2 mejl per månad med sammanfattningar av nya inlägg. Avregistrera när som helst.',
      placeholder: 'din e-postadress',
      submit: 'Prenumerera',
      privacy: 'Inga annonser eller delning med tredje part.',
      compactTitle: '📬 Nyhetsbrev',
    },
    language: {
      contentNotice:
        'En svensk version av denna artikel finns inte ännu — visar originalet (turkiska).',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      icHastaliklari: 'Innere Medizin',
      siyaset: 'Politikwissenschaft',
      saglikRehberi: 'Patientenleitfaden',
      infografik: 'Infografiken',
      iletisim: 'Kontakt',
      search: 'Suche',
      themeToggle: 'Theme wechseln',
      languageToggle: 'Sprache wählen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    post: {
      publishedOn: 'Veröffentlicht',
      updatedOn: 'Aktualisiert',
      readingTime: 'Lesezeit',
      references: 'Quellen',
      relatedPosts: 'Verwandte Beiträge',
      sharePost: 'Teilen',
      medicalDisclaimerTitle: 'Medizinischer Haftungsausschluss:',
      medicalDisclaimerBody:
        'Dieser Beitrag dient nur der allgemeinen Information und ersetzt keine ärztliche Beratung. Für klinische Entscheidungen wenden Sie sich an eine zugelassene Fachkraft.',
      moreDetails: 'Mehr Details',
      pdfDownload: 'PDF herunterladen',
      enlargeImage: 'Bild vergrößern',
    },
    list: {
      allPosts: 'Alle Beiträge',
      latestPosts: 'Neueste Beiträge',
      noPostsYet: 'Noch keine Beiträge.',
      readMore: 'Weiterlesen',
      category: 'Kategorie',
    },
    newsletter: {
      title: 'Über neue Beiträge informiert werden',
      lead: '1-2 E-Mails pro Monat mit Zusammenfassungen neuer Beiträge. Jederzeit abbestellbar.',
      placeholder: 'Ihre E-Mail-Adresse',
      submit: 'Abonnieren',
      privacy: 'Kein Spam. Keine Werbung. Keine Weitergabe an Dritte.',
      compactTitle: '📬 Newsletter',
    },
    language: {
      contentNotice:
        'Eine deutsche Version dieses Beitrags ist noch nicht verfügbar — Originalsprache (Türkisch) wird angezeigt.',
    },
  },
};

export function t(locale: Locale): Strings {
  return STRINGS[locale] ?? STRINGS[DEFAULT_LOCALE];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

// URL'den locale çıkar. Varsayılan TR için prefix yoktur.
export function getLocaleFromUrl(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && isLocale(seg) && seg !== DEFAULT_LOCALE) return seg;
  return DEFAULT_LOCALE;
}

// Aynı yolu farklı locale'e çevir. Varsayılan TR → prefix kaldır.
export function localizedPath(pathname: string, target: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first) && first !== DEFAULT_LOCALE) segments.shift();
  if (target !== DEFAULT_LOCALE) segments.unshift(target);
  return '/' + segments.join('/');
}
