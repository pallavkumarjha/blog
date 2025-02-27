// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://driftingmiles.vercel.app',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});