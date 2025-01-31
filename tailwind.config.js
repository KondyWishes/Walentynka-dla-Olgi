/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        accent: "#E63946",
        green: "#4CAF50",
        header: "#F1A7C7",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(135deg, #FFB6C1, #FF69B4, #E63946)",
      },
      dropShadow: {
        green: "0 0 1rem #4CAF50",
      },
    },
  },
  plugins: [],
};
