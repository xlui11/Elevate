/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5B5B",
        secondary: "#F1BD69",
        links: "#272727"
      },
      boxShadow: {
        button: "4px 4px 0px 0px #313030"
      },
      backgroundImage: {
        "line": "url('/src/assets/HeroSection.png')"
      }
    },
  },
  plugins: [],
}

