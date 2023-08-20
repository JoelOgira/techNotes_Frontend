/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'repair-shop': "url('./public/img/background.jpg')"
      }
    },
  },
  plugins: [],
}