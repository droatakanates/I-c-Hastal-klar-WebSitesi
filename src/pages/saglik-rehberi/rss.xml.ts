import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('saglik-rehberi', ({ data }) => !data.draft);

  return rss({
    title: 'omuratakanates.com — Sağlık Rehberi',
    description:
      'Hasta ve yakınları için anlaşılır dilde sağlık bilgilendirme yazıları — Ömür Atakan Ateş',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.publishDate,
        description: p.data.description,
        link: `/saglik-rehberi/${p.id}`,
        categories: [p.data.category, ...p.data.tags],
      })),
    customData: '<language>tr-TR</language>',
  });
}
