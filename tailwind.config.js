/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_blue: '#375BD2',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('tailwindcss-logical')
  ],
}
