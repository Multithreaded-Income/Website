import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "discord": "https://discord.gg/sJhrJcVAzk",
    "podcast": "https://podcast.multithreadedincome.com"
  },
  integrations: [tailwind()]
});