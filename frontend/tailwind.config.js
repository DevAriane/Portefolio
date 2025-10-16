/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        calligraphy: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],

};
