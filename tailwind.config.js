/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        peach: {
          400: '#edae99'
        },
        graphite: {
          400: '#484545'
        },
        beige: {
          400: '#f6dcB9'
        },
        seaBlue: {
          400: '#4191A0'
        }
      }
    },
  },
  plugins: [],
}


/* 
Peach
#EDAE99

Graphite
#484545

Beige
#F6DCB9

Teal
#4191A0
*/