/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        text: '#293241',
        primary: '#F5F5F4',
        secondary: '#6D9886',
        disabled: '#a4c6e8',
        cancel: '#891337',
        modalBg: '#00000080',
      },
      fontFamily: {
        sans: 'Preahvihear , sans-serif',
      },
    },
  },
  plugins: [],
};
