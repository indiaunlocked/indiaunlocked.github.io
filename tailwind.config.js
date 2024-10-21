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
    colors:{
      grey:'#e6e9eb',
      blue:'#214656',
      black:'#000000'
    }
  },
  plugins: [],
}
