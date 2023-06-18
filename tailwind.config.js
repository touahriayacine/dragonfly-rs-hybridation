/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "bg": "#00b4d8",
        "bg-alpha": "#00b4d830",
      }
    },
  },
  plugins: [],
}