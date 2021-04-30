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
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
        //dark mode
        backgroundDark: '#212529',

        primaryDark: '#2A2E32',
        primaryLightDark: '#3E4246',

        textPrimaryDark: '#F7F7FE',
        textSecondaryDark: '#aeaebc',
        textTertiaryDark: '#818294',

        //light mode
        background: '#e8e8eb',

        primary: '#F7F7FE',
        primaryLight: '#f0f0f2',

        textPrimary: '#212529',
        textSecondary: '#2A2E32',
        textTertiary: '#3E4246',
        
        gray:'#616161',
        grayLight: '#d9d9d9',


        //common
        secondaryDark:'#20688a',
        secondary: '#1A759F', //base
        secondaryLight: '#168AAD',

        tertiaryDark:'#317053',
        tertiary: '#40916C', //base
        tertiaryLight: '#52B788',

      },
    },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
