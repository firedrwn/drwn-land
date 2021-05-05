module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '130': '30rem',
        '140': '40rem',
        '150': '50rem',
        '160': '60rem',
      },
      colors: {
        'deep-purple': '#190624',
        'base-purple': '#2A1437',
        'light-purple': '#ad92b7',
        'base-green': '#00ff4a',
        'base-red': '#ff005c',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
        'ttnorms': ['ttnorms'],
        'benzin-semibold': ['benzin-semibold'],
        'benzin-bold': ['benzin-bold']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
