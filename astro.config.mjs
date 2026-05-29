// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://omuratakanates.com',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'kibris', 'az', 'en', 'sv', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          kibris: 'tr-CY',
          az: 'az-AZ',
          en: 'en-US',
          sv: 'sv-SE',
          de: 'de-DE',
        },
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
});
