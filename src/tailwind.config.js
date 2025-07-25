/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#2c7b34",
        lightBg: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
