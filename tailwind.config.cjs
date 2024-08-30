/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-brand": "#2980b9",
        "blue-light": "#3498db",
      },
    },
  },
  plugins: [],
};
