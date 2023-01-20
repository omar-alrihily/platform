/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  fontFamily: {
    'tajawal': ['tajawal', 'sans-serif'],
    'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
  },
    extend: {},
  },
  plugins: [],
}