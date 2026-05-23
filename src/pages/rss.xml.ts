import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const tip = await getCollection('tip', ({ data }) => !data.draft);
  const siyaset = await getCollection('siyaset', ({ data }) => !data.draft);

  const items = [
    ...tip.map((p) => ({
      title: `[Tıp] ${p.data.title}`,
      pubDate: p.data.publishDate,
      description: p.data.description,
      link: `/tip/${p.id}`,
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
    description: 'Kanıta dayalı tıp ve siyaset bilimi yazıları — Ömür Atakan Ateş',
    site: context.site!,
    items,
    customData: '<language>tr-TR</language>',
  });
}
