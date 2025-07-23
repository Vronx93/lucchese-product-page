/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,liquid,js,ts}",
    "./public/**/*.{html,js,ts,liquid}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(12, 39, 82,1)'
      }
    },
  },
  plugins: [],
};
