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
        "Merriweather-SansSerif":"Merriweather, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}