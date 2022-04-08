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
      backgroundImage: {
        "space-mb": "url(assets/home/background-home-mobile.jpg)",
        "space-tab": "url(assets/home/background-home-tablet.jpg)",
        "space-dt": "url(assets/home/background-home-desktop.jpg)",
      },
    },
  },
  plugins: [],
}
