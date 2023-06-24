/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "PT-Serif":"PT Serif, serif",
        "Montserrat":"Montserrat, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}