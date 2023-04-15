/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Using modern `rgb`
      color_bg: "rgb(var(--color-bg))",
      color_button1: "rgb(var(--color-button_first))",
      color_button2: "rgb(var(--color-button_second))"
    },
    extend: {},
  },
  plugins: [],
};
