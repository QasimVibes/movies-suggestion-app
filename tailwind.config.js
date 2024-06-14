/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'caros-bold': ['FONTSPRING DEMO - Caros Bold', 'sans-serif'],
      },
      fontSize: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}

