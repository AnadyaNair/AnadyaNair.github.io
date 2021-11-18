module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing:{
      'defleft':'200px',
      'defh1top':'100px',
      'defptop': '50px'
    },
    extend: {
      colors: {
        'body': '#181818',
        'grassy': '#27AE60',
        'secondary': '#232323',
        'greyish': '#929292',
        'white': '#FFFFFF',
        'secondarywhite': '#F2F2F2'
      },
      fontFamily:{
        'Inter': ["'Inter'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
}
