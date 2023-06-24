/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Lora-Serif":"Lora, serif",
        "Montserrat":"Montserrat, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}