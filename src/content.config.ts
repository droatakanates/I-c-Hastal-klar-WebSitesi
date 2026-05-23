import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// İç hastalıkları kategorileri (TUS/YDUS uyumlu)
export const TIP_KATEGORILERI = [
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

// Siyaset bilimi kategorileri
export const SIYASET_KATEGORILERI = [
  'Türk Siyaseti',
  'Karşılaştırmalı Siyaset',
  'Uluslararası İlişkiler',
  'Siyaset Teorisi',
  'Seçim ve Demokrasi',
  'Kitap İncelemesi',
] as const;

// Tıp yazıları — kanıt seviyesi ve referans alanları zorunlu
const tip = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tip' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(TIP_KATEGORILERI),
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

// Siyaset yazıları
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

export const collections = { tip, siyaset };
