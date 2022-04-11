const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-black": "#0B0D17",
        "space-blue": "#D0D6F9",
      },
      fontFamily: {
        sans : ["'Barlow'", ...defaultTheme.fontFamily.sans],
        serif : ["'Bellefair'", ...defaultTheme.fontFamily.serif],
        "bc": "'Barlow Condensed', sans",
      },
      backgroundImage: {
        "home-mob": "url(assets/home/background-home-mobile.jpg)",
        "home-tab": "url(assets/home/background-home-tablet.jpg)",
        "home-desk": "url(assets/home/background-home-desktop.jpg)",
        "destination-mob": "url(assets/destination/background-destination-mobile.jpg)",
        "destination-tab": "url(assets/destination/background-destination-tablet.jpg)",
        "destination-desk": "url(assets/destination/background-destination-desktop.jpg)",
      },
    },
  },
  plugins: [],
}
