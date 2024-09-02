/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pureWhite: '#FFFFFF',
        lightWhite: '#FAFAFA',
        lightGray: '#F1F1F1',
        lightDeep: '#D87D4A',
        light: '#FBAF85',
        deepBlack: '#000000',
        verylightBlack: '#101010',
        lightBlack: '#191919'
      }
    }
    
  },
  plugins: [],
}

