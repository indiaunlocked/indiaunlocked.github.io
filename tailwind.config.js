/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home/**/*.{html,js}",
    "./maharashtra/**/*.{html,js}",
    "./index.html",
    "./script.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
