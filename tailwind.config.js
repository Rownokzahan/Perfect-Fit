/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
        "primary-black": "#0d0609",
        "secondary-black": "#9b9799",
        "primary-white": "#f8f9fa",
        "secondary-white": "#f7dce5",
        primary: "#DF6C92",
        "primary-light": "#fcf3f7",
        "primary-dark": "#9d4c67",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
