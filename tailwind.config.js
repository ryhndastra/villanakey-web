/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F0EC',
        accent: '#5A6F57',
        textMain: '#2F2F2F',
        gold: '#D4AF37',
      },
      backdropBlur: {
        navbar: '10px',
      }
    },
  },
};
