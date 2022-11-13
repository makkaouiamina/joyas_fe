/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors:{
      'light-green': '#D4E157'
    },
    fontFamily:{
      'dancing-script': 'Dancing Script, cursive',
      'genral-script': 'Old Standard TT, serif',
      'handle':'Handlee, cursive',
    },
  },
  plugins: [],
}
