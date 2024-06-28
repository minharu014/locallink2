/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-main-gradient": {
          backgroundImage: "linear-gradient(to right, #5ec916, #47a333)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
