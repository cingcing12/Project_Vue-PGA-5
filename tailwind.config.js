/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a67b5b', // Primary Brand Color
          600: '#8c6b4a',
          700: '#765a3e',
          800: '#5f4932',
          900: '#43302b',
        }
      }
    },
  },
  plugins: [],
}