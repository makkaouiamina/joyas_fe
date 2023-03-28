/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors:{
        'primary': '#D4E157'
      },
    },
    fontFamily:{
      'dancing-script': 'Dancing Script, cursive',
      'kalam': 'Kalam, cursive'
    },
  },
  plugins: [],
}
