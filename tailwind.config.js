/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html', './src/styles/main.css'],
  theme: {
    extend: {
      colors: {
        primary: '#ffcb05',
        second: '#3d7dca',
        third: '#003a70',
        normal: '#a8a77a',
        fire: '#ee8130',
        water: '#6390f0',
        electric: '#dfbc30',
        grass: '#7ac74c',
        ice: '#97d4d2',
        fighting: '#b83e8a',
        poison: '#a33ea1',
        ground: '#e2bf65',
        flying: '#a98ff3',
        psychic: '#f95587',
        bug: '#a6b91a',
        rock: '#b6a136',
        ghost: '#735797',
        dragon: '#6f35fc',
        dark: '#705746',
        steel: '#b787ce',
        fairy: '#d685ad',
        none: '#bfbfbf',
      },
    },
  },
  plugins: [],
};
