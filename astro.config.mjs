import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://multithreadedincome.com",
  redirects: {
    // "discord": "https://discord.gg/sJhrJcVAzk",
    "podcast": "https://podcast.multithreadedincome.com"
  },
  integrations: [tailwind(), sitemap()]
});