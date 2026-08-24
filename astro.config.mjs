import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import astroI18next from "@veguidev/astro-i18next";
import i18nextConfig from "./astro-i18next.config.mjs";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), astroI18next(i18nextConfig)],
  vite: {
    plugins: [tailwindcss()],
  },
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
