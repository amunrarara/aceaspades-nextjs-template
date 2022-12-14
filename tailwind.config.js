/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  mode: "jit",
  content: [
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'navbar-height': 'var(--navbar-height)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-out infinite',
      },
      dropShadow: {
        'dark': '0 3px 3px rgba(0, 0, 0, 0.75)',
        'darkest': '0 2px 2px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
