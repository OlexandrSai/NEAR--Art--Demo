module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
          900: '#01111D',
        },
        red: {
          400: '#F94119',
        },
        green: {
          400: '#ADDB67',
        },
        blue: {
          200: '#80CAC3',
        },
        purple: {
          200: '#C591E8',
        },
        gradient: {
          100: '#8728E5',
          200: '#5AE1FF', //blue
        },
      },
      width: {
        59: '59px',
        73: '73px',
        374: '374px',
      },
      height: {
        59: '30px',
        73: '36px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
