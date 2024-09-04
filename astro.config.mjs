import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react(), tailwind()],
  build: {
    assetsPrefix: "./",
  },
  output: "hybrid",
  adapter: vercel(),
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
});
