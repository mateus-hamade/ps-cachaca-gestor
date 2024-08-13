/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4B905A",
        "primary-light": "#6ABE7C",
        "primary-dark": "#2E6F3D",
        "secondary": "#594B30",
        "secondary-light": "#7B6B4A",
      }
    },
  },
  plugins: [],
}