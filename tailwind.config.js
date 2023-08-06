/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
    },
    extend: {
      animation: {
        ping200: 'ping 1.1s cubic-bezier(0, 0, 0.2, 1)  infinite',
        ping400: 'ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite ',
      }
    },
  },
  plugins: [],
};
