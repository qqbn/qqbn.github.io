import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qqbn.github.io',
  base: '/',
  integrations: [sitemap()],
});
