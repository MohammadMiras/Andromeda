/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'xxl':'1536px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
         Template: {
          color1:'#141414',         
          
        }
      }
    },
    fontFamily: {
      iransans: ["iransans"],
    },  
  },
  plugins: [],
  important: true
}