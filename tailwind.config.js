/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "theme-100": "#00917C",
        "theme-200": "#101828",
        "theme-300": "#CAD5E2",
      },
      fontFamily: {
        'custom-100': ['Inter', 'sans-serif'],
        'custom-200': ['Staatliches', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}