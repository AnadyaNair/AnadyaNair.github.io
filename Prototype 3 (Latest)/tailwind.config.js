module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      'short10':'10px'
     },
    spacing:{
      'defleft':'200px',
      'defh1top':'100px',
      'defptop': '50px',
      'deflitop': '10px',
      'heightofbody':'2000px'
    },
    extend: {
      colors: {
        'body': '#181818',
        'secondary': '#232323',
        'lightgrey': '#828282',
        'darkgrey':'#525252',
        'white': '#FFFFFF',
        'grassy': '#27AE60',
        'secondarywhite': '#F2F2F2',
        'custompurple':'#6366F1',
        'custompink':'#EB5795',
        'customyellow':'#F2C94C',
        'customviolet':'#9B51E0',
        'customred':'#EB5757'
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
