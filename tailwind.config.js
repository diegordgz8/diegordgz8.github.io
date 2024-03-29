/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js", "./components/**/*.{html,js}"],
  plugins: ["prettier-plugin-tailwindcss"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "theme-1": "#17f9ff",
        "theme-2": "#00b4fc",
        "theme-3": "#005bc5",
        "theme-4": "#012677",
        "theme-5": "#001449",
        primary: "#1c355b",
        info: "#191318",
        success: "#3e8a53",
        warning: "#bb7a1b",
        danger: "#f44336",
        "shade-light": {
          50: "#fdfcfc",
          100: "#fbf9fa",
          200: "#f7f3f5",
          300: "#f4edef",
          400: "#f0e7ea",
          500: "#ece1e5",
          600: "#bdb4b7",
          700: "#8e8789",
          800: "#5e5a5c",
          900: "#2f2d2e",
        },
        "accent-light": {
          50: "#eff7f9",
          100: "#e0eff4",
          200: "#c0dfe9",
          300: "#a1cedd",
          400: "#81bed2",
          500: "#62aec7",
          600: "#4e8b9f",
          700: "#3b6877",
          800: "#274650",
          900: "#142328",
        },
        primary: {
          50: "#e8ebef",
          100: "#d2d7de",
          200: "#a4afbd",
          300: "#77869d",
          400: "#495e7c",
          500: "#1c365b",
          600: "#162b49",
          700: "#112037",
          800: "#0b1624",
          900: "#060b12",
        },
        "accent-dark": {
          50: "#eff0f2",
          100: "#dfe1e5",
          200: "#bfc3cc",
          300: "#9fa6b2",
          400: "#7f8899",
          500: "#5f6a7f",
          600: "#4c5566",
          700: "#39404c",
          800: "#262a33",
          900: "#131519",
        },
        "shade-dark": {
          50: "#e8e7e8",
          100: "#d1d0d1",
          200: "#a3a1a3",
          300: "#757174",
          400: "#474246",
          500: "#191318",
          600: "#140f13",
          700: "#0f0b0e",
          800: "#0a080a",
          900: "#050405",
        },
      },
    },
  },
  plugins: [],
};
