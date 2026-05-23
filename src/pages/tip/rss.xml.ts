import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('tip', ({ data }) => !data.draft);

  return rss({
    title: 'omuratakanates.com — Tıp',
    description: 'Kanıta dayalı iç hastalıkları içeriği — Ömür Atakan Ateş',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.publishDate,
        description: p.data.description,
        link: `/tip/${p.id}`,
        categories: [p.data.category, ...p.data.tags],
      })),
    customData: '<language>tr-TR</language>',
  });
}
