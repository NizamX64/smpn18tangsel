/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
        "primary": "#0591DC"
      }
    },
    screens: {
      "laptop": {
        "max": "1268px"
      },
      "tablet": {
        "max": "768px"
      },
      "mobile": {
        "max": "450px"
      },
    },
  },
  plugins: [],
}

