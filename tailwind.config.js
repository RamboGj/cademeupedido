/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hubballi: ['Hubballi', 'sans-serif'],
      },
      colors: {
        yellow900: '#341401',
        yellow600: '#F87A2C',
        yellow500: '#FA9E3C',
        yellow300: '#FDDEBD',

        blue500: '#5190DB',
        blue300: '#9CB7D7',
      },
    },
  },
  plugins: [],
}
