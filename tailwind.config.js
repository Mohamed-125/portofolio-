/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--primary)",
      text: "var(--text)",
      "background-very-light": "var(--background-very-light)",
      "background-light": "var(--background-light)",
      "background-dark": "var(--background-dark)",
      "background-dark-opacity": "var(--background-dark-opacity)",
      white: "#FFFFFF",
    },

    container: {
      center: true,
      padding: "2rem", // Adds default padding to the container
    },
  },
};
