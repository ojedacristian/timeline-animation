/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
    theme: {
    extend: {
      colors: {
        brand: {
          beige: '#ebe5da',
          red: '#ae1b41',
          brown: '#9d8157'
        }
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

