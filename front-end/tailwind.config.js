/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': 'url("/src/assets/sugarcane-3.png")',
        'background1': 'url("/src/assets/sugarcane-blur.png")',
      },
      colors: {
        "primary": "#4B905A",
        "primary-light": "#6ABE7C",
        "primary-dark": "#2E6F3D",
        "secondary": "#CEB16B",
        "secondary-light": "#efd097",
      }
    },
  },
  plugins: [],
}