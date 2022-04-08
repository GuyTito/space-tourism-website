const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-dark": "#0B0D17",
        "space-blue": "#D0D6F9",
      },
      fontFamily: {
        sans : ["'Barlow'", ...defaultTheme.fontFamily.sans],
        serif : ["'Bellefair'", ...defaultTheme.fontFamily.serif],
        "bc": "'Barlow Condensed', sans",
      },
    },
  },
  plugins: [],
}
