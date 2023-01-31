/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  mode: 'jit',
  content: ['./src/**/*.{css,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'navbar-height': 'var(--navbar-height)',
        h1: ['var(--fs-h1)', { lineHeight: 'var(-lh-h1)' }],
        h2: ['var(--fs-h2)', { lineHeight: 'var(-lh-h2)' }],
        h3: ['var(--fs-h3)', { lineHeight: 'var(-lh-h3)' }],
        h4: ['var(--fs-h4)', { lineHeight: 'var(-lh-h4)' }],
        h5: ['var(--fs-h5)', { lineHeight: 'var(-lh-h5)' }],
        xs: ['var(--fs-xs)', { lineHeight: 'var(--lh-xs)' }],
        sm: ['var(--fs-sm)', { lineHeight: 'var(--lh-sm)' }],
        base: ['var(--fs-base)', { lineHeight: 'var(--lh-base)' }],
        lg: ['var(--fs-lg)', { lineHeight: 'var(--lh-lg)' }],
        xl: ['var(--fs-xl)', { lineHeight: 'var(--lh-xl)' }],
        '2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
        '3xl': ['var(--fs-3xl)', { lineHeight: 'var(--lh-3xl)' }],
        '4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
        '5xl': ['var(--fs-5xl)', { lineHeight: 'var(--lh-5xl)' }],
        '6xl': ['var(--fs-6xl)', { lineHeight: 'var(--lh-5xl)' }],
        '7xl': ['var(--fs-7xl)', { lineHeight: 'var(--lh-5xl)' }],
        '8xl': ['var(--fs-8xl)', { lineHeight: 'var(--lh-5xl)' }],
        '9xl': ['var(--fs-9xl)', { lineHeight: 'var(--lh-5xl)' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-out infinite',
      },
      dropShadow: {
        dark: '0 3px 3px rgba(0, 0, 0, 0.75)',
        darkest: '0 2px 2px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
