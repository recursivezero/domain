/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 MUST

  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        brandBlue: "#024C73",
      }
    },
  },

  plugins: [],
};