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
        "theme-100": "#1B9C85",
        "theme-200": "#101828",
        "theme-300": "#dcdde1",
      },
      fontFamily: {
        'custom-100': ['Inter', 'sans-serif'],
        'custom-200': ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}