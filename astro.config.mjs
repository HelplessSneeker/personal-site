import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bfnoessler.at',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-AT', en: 'en-US' },
      },
      // /firefly/* sind noindex-Pflichtseiten für ein externes
      // Registrierungsformular — sie gehören nicht in die Sitemap, sonst
      // reicht man Google genau die URLs an, die es nicht indexieren soll.
      // /bundle ist seit 27.10.2026 ebenfalls noindex: Websites sind kein
      // Angebot mehr, die Seite bleibt nur für bestehende Links erreichbar.
      filter: (page) =>
        !page.includes('/api/') && !page.includes('/firefly/') && !page.includes('/bundle'),
      serialize(item) {
        return { ...item, lastmod: new Date().toISOString() };
      },
    }),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
