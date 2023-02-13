/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      background: 'rgb(43,43,43)',
      'gray': colors.gray,
      'black': colors.black,
      'white': colors.white,
      'red': colors.red,
      'green': colors.green,
      'blue': colors.blue,
      'cyan': colors.cyan,
      'amber': colors.amber,
      'pink': colors.pink,
      'purple': colors.purple,
      'yellow': colors.yellow,
      'slate': colors.slate,
      'zinc': colors.zinc,
    },
  },
  plugins: [],
}
