/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
        cardo: ["Cardo", "sans-serif"],
        KolkerBrush: ["Kolker Brush", "sans-serif"],
      },
      colors: {
        primary: "#2F1409",
        secondary: "#C4A887",
      },
    },
  },
  plugins: [],
};
