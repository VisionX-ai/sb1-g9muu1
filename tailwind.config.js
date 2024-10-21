/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00ffff',
        'electric-blue-dark': '#00cccc',
      },
      fontFamily: {
        sans: ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}