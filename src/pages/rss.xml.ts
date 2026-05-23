import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const icHastaliklari = await getCollection(
    'ic-hastaliklari',
    ({ data }) => !data.draft,
  );
  const siyaset = await getCollection('siyaset', ({ data }) => !data.draft);
  const saglikRehberi = await getCollection(
    'saglik-rehberi',
    ({ data }) => !data.draft,
  );

  const items = [
    ...icHastaliklari.map((p) => ({
      title: `[İç Hastalıkları] ${p.data.title}`,
      pubDate: p.data.publishDate,
      description: p.data.description,
      link: `/ic-hastaliklari/${p.id}`,
      categories: [p.data.category, ...p.data.tags],
    })),
    ...saglikRehberi.map((p) => ({
      title: `[Sağlık Rehberi] ${p.data.title}`,
      pubDate: p.data.publishDate,
      description: p.data.description,
      link: `/saglik-rehberi/${p.id}`,
      categories: [p.data.category, ...p.data.tags],
    })),
    ...siyaset.map((p) => ({
      title: `[Siyaset] ${p.data.title}`,
      pubDate: p.data.publishDate,
      description: p.data.description,
      link: `/siyaset/${p.id}`,
      categories: [p.data.category, ...p.data.tags],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'omuratakanates.com',
    description:
      'Kanıta dayalı iç hastalıkları, hasta odaklı sağlık rehberi ve siyaset bilimi yazıları — Ömür Atakan Ateş',
    site: context.site!,
    items,
    customData: '<language>tr-TR</language>',
  });
}
