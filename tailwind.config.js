/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue, jsx}", 
    "./src/**/*"
  ],
  theme: {
    fontFamily:{
        "bodoni": ["Bodoni Moda","serif"],
        "parisienne": ["Parisienne","cursive"]
    }
  },
  plugins: [require("daisyui")],
}

