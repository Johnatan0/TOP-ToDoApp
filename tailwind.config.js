module.exports = {
  content: ['./dist/*.html'],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        'inter' : ['inter']
      },
      colors: {
        primaryText: '#ebecef',
        SecondaryText: '#ffffff1a',

        bgPrimary: '#14161A',
        bgSecondary: '#1B1D21',

        PrimaryAccent: '#2f62f9',
        SecondaryAccent: '#92acfc',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

