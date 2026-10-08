// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo at https://<owner>.github.io/<repo>/.
// SITE_URL / BASE_PATH are set by the deploy workflow; change them here
// (or in the workflow) when you move to a custom domain.
const site = process.env.SITE_URL ?? 'https://abogdan-source.github.io';
const base = process.env.BASE_PATH === undefined ? '/avabogdan' : process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
