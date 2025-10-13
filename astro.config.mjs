import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import astroI18next from "@veguidev/astro-i18next";
import i18nextConfig from "./astro-i18next.config.mjs";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), astroI18next(i18nextConfig)],
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
