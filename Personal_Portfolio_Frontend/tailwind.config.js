/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        textColor: "#C7C7C7",
        custom:{
          'C7C7C7': '#C7C7C7',
          'D3E97A': '#D3E97A',
          '0A0A0A': '#0A0A0A',
          '222222': '#222222',
          '484848':'#484848',
          '1A1A1A': '#1A1A1A'
        }
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        inter: ["inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
