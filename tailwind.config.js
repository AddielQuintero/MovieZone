/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  darkMode: 'class',
  // module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '640px',
      'max-sm': { max: '640px' },

      md: '768px',
      'max-md': { max: '768px' },

      lg: '1024px',
      'max-lg': { max: '1024px' },

      xl: '1280px',
      'max-xl': { max: '1280px' },

      '2xl': '1536px',
      'max-2xl': { max: '1536px' },

      '3xl': '1920px',
      'max-3xl': { max: '1920px' },

      '4xl': '2560px',
      'max-4xl': { max: '2560px' },

      '5xl': '3840px',
      'max-5xl': { max: '3840px' },
    },
    colors: {
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#1A1F26',
      },
    },
    extend: {},
  },
  plugins: [],
})
