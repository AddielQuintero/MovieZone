/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
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
    extend: {},
  },
  plugins: [],
})
