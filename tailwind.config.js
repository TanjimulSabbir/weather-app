/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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