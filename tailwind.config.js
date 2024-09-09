/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        primary: '#00712D',
        secondary: '#FF9100',
        background: '#DFDEDE',
        surface: '#F5F7F8',
        text1: '#121412',
        text2: '#6F746F',
      },
      fontFamily:{
        condensed: ["Roboto Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        teko: ["Teko", "sans-serif"]
      },
      padding: {
        'large': '50px',
        'medium': '25px',
        'small': '10px',
      }
    },
  },
  plugins: [],
}
