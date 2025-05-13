/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#2A004A',
            darkTheme: '#11001f'

        },

        fontFamily: {
            outFit: ['Outfit', 'sans-serif'],
            Ovo: ['Ovo', 'serif'],
        }
    },
  },
  plugins: [],
};
