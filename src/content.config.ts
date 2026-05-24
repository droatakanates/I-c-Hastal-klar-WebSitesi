import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// İç Hastalıkları kategorileri (TUS/YDUS uyumlu, akademik içerik)
export const IC_HASTALIKLARI_KATEGORILERI = [
  'Endokrinoloji ve Metabolizma',
  'Gastroenteroloji',
  'Hematoloji',
  'Kardiyoloji',
  'Nefroloji',
  'Romatoloji',
  'Göğüs Hastalıkları',
  'Onkoloji',
  'Enfeksiyon Hastalıkları',
  'Geriatri',
] as const;

// Siyaset Bilimi ve Uluslararası İlişkiler kategorileri
export const SIYASET_KATEGORILERI = [
  'Türk Siyaseti',
  'Karşılaştırmalı Siyaset',
  'Uluslararası İlişkiler',
  'Dış Politika',
  'Siyaset Teorisi',
  'Seçim ve Demokrasi',
  'Kitap İncelemesi',
] as const;

// Sağlık Rehberi kategorileri (hasta odaklı, anlaşılır dilde)
export const SAGLIK_REHBERI_KATEGORILERI = [
  'Kronik Hastalıklar',
  'Beslenme ve Yaşam Tarzı',
  'Aşılar ve Korunma',
  'Tarama Testleri',
  'İlaç Kullanımı',
  'Sık Sorulan Sorular',
  'Bel ve Eklem Ağrıları',
] as const;

// İnfografik kategorileri (hedef kitleye göre)
export const INFOGRAFIK_KATEGORILERI = [
  'Hastalar İçin',
  'Hekimler İçin',
] as const;

// İç Hastalıkları yazıları — akademik, kanıt seviyesi ve referans önemli
const icHastaliklari = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ic-hastaliklari' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(IC_HASTALIKLARI_KATEGORILERI),
    tags: z.array(z.string()).default([]),
    evidenceLevel: z.enum(['A', 'B', 'C', 'D', 'Uzman Görüşü']).optional(),
    icerikTipi: z
      .enum([
        'Olgu Sunumu',
        'Literatür Özeti',
        'Klinik Pratik',
        'Kılavuz Özeti',
        'TUS-YDUS',
        'Asistan Köşesi',
      ])
      .optional(),
    references: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Siyaset Bilimi ve Uluslararası İlişkiler yazıları
const siyaset = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/siyaset' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(SIYASET_KATEGORILERI),
    tags: z.array(z.string()).default([]),
    references: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Sağlık Rehberi — hasta bilgilendirme içerikleri (anlaşılır dil)
const saglikRehberi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/saglik-rehberi' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(SAGLIK_REHBERI_KATEGORILERI),
    tags: z.array(z.string()).default([]),
    okumaSuresi: z.string().optional(),
    references: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// İnfografikler — yalnızca görsel ağırlıklı içerikler (her bölümün infografikleri burada)
const infografik = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/infografik' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(INFOGRAFIK_KATEGORILERI),
    tags: z.array(z.string()).default([]),
    references: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'ic-hastaliklari': icHastaliklari,
  siyaset,
  'saglik-rehberi': saglikRehberi,
  infografik,
};
