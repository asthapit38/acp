/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        body: "Quicksand",
        title: "Playfair Display",
      },
      colors: {
        black: "#121212",
        background: "#EDEDE9",
        primary: "#A21E47",
      },
      boxShadow: {
        "fill-up": "inset 6.5em 0 0 0 #A21E47",
      },
      backgroundImage: {
        "story-bg": "url('/images/story-bg-color.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
