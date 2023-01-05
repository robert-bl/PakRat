/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      colors: {
        dark: "#4D220C",
        med: "#EBAE92",
        light: "#DFE0DF",
        highlight: "#00755D"
        // dark: "#580000",
        // med: "#C55624",
        // light: "#EDE9D0",
        // highlight: "#A9A3EC"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
