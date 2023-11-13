module.exports = {
  content: ['./dist/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['inter']
      },
      colors: {
        DarkPrimaryText: '#ebecef',
        DarkSecondaryText: '#ffffff1a',

        DarkbgPrimary: '#14161A',
        DarkbgSecondary: '#1B1D21',

        DarkAccent: '#92acfc',
        LightAccent: '#2f62f9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

