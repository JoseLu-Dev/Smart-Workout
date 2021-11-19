const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // dark mode
        dark: {
          darkest: '#202225',
          dark: '#2F3136',
          DEFAULT: '#36393F',
          light: '#72767D',
          lightest: '#919191',
        },
        // light mode
        light: {
          darkest: '#919191',
          dark: '#CCCCCC',
          DEFAULT: '#EDEDED',
          light: '#F5F5F5',
          lightest: '#FBFBFB',
        },
        blue: {
          dark: '#20688a',
          DEFAULT: '#1A759F',
          light: '#168AAD'
        },
        green: {
          dark: '#317053',
          DEFAULT: '#40916C',
          light: '#52B788'
        }
      },
      opacity: {
        '15': '0.15'
      },
      width: {
        '30%': '30%'
      },
      minWidth: {
        '64': '256px',
        '80': '320px',
        '100': '400px',
        '110': '440px',
      },
      maxHeight: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
