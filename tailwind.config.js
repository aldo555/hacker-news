const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: colors.pink,
      gray: colors.warmGray,
      black: colors.black,
      white: colors.white
    },
    fontFamily: {
      sans: ['proxima-nova', ...defaultTheme.fontFamily.sans],
      mono: ['ibm-plex-mono', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
