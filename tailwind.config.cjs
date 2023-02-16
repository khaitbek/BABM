/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat",
        "poppins": "Poppins"
      },
      backgroundImage: {
        "homboi": "url(/images/homboi.png)",
        "time": "url(/images/time.svg)",
        "footer": "url(/images/footer/footer-bg.png)",
        "dropdown": "url(/images/dropdown.svg)"
      },
      colors: {
        "my-primary": {
          100: "#01384D"
        },
        "my-coral": {
          100: "#EABF9F"
        }
      },
    },
  },
  plugins: [],
}
