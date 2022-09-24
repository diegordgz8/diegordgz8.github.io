/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/app.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "theme-1" : "#17f9ff",
        "theme-2" : "#00b4fc",
        "theme-3" : "#005bc5",
        "theme-4" : "#012677",
        "theme-5" : "#001449",
      },
    },
  },
  plugins: [],
}
