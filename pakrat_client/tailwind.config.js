/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      colors: {
        dark: "#4E3D69",
        med: "#A47DE5",
        light: "#FEF6FF",
        highlight: "#E8D5B5"
      },
      fontFamily: {
        merri: ['Merriweather Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
