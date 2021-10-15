module.exports = {
  purge: [`./index.html`, `./src/**/*.{vue,js,ts,jsx,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#CFDBE8',
          300: '#EAECF0',
          500: '#BFBFBF',
          700: '#062743',
          800: '#011627',
          900: '#01111D'
        },
        red: {
          400: '#F94119',
        },
        green: {
          400: '#ADDB67'
        },
        blue: {
          200: '#80CAC3'
        },
        purple: {
          200: '#C591E8'
        }
      }
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
}
