/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // necessário para projetos React
  ],
  theme: {
    extend: {
      colors: {
        fundo: "#121212",
        destaque: "#991B1B",
        textoPrimario: "#FFFFFF",
        textoSecundario: "#B3B3B3",
        cartao: "#1F1F1F",
        fundoCard: "#0A0A0A" },

        fontFamily: {
          title: ['"Bebas Neue"', 'sans-serif'],
        }
    },
  },
  plugins: [],
}