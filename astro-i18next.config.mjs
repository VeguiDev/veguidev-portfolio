/** @type {import('@veguidev/astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["en", "es"],
  routes: {
    en: {
      "sobre-mi": "about-me",
      contacto: "contact",
      proyectos: "projects",
    },
  },
  load: ["server", "client"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};
