const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aquire: ["var(--font-aquire)", ...fontFamily.sans],
        rajdhani: ["var(--font-rajdhani)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
