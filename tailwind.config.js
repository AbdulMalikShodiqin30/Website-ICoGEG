/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      jost: "Jost, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        "orange-lemon": "hsl(14, 97%, 60%)",
        "blue-docker": "hsl(217, 89%, 61%)",
        "navy-blue": "hsl(218, 39%, 35%)",
        "youth-blue": "hsl(199, 74%, 59%)",
        "cream-vanilla": "hsl(52, 60%, 95%)",
        "yellow-sunrise": "hsl(56, 98%, 59%)",
      },
    },
  },
  plugins: [],
};
