/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: '#25272c',
        light: '#e9e9e9'
      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      comfortaa: ['Comfortaa', 'sans-serif']
    }
  },
  plugins: []
}
