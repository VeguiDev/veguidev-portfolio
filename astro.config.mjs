import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), astroI18next()],
  build: {
    assetsPrefix: "/",
  },
  output: "server",
  adapter: vercel(),
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
});
