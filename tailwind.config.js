/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text : '#293241',
        primary : '#F5F5F4',
        secondary :'#6D9886',
        disabled : "#a4c6e8",
        cancel : "#891337"
      },
      fontFamily : {
        sans : 'Preahvihear , sans-serif'
      }
    },
  },
  plugins: [],
};
