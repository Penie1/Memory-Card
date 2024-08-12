/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "creepster": ["Creepster", "system-ui"],
      },
    },
  },
  plugins: [],
};
