/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: '#25272c',
      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      comfortaa: ['Comfortaa', 'sans-serif']
    }
  },
  plugins: []
}
