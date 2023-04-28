/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      color_bg: "rgb(var(--color-bg))",
      color_button1: "rgb(var(--color-button_first))",
      color_button2: "rgb(var(--color-button_second))",
      white: "rgb(255, 255, 255)",
      dark_blue: "rgb(52, 48, 69)",
      soft_black: "rgb(0, 0, 0, 15%)",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
