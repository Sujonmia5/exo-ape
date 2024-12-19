/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-up": "slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "rotate(90deg) translateY(100%)", opacity: "0" },
          "100%": { transform: "rotate(0deg) translateY(0)", opacity: "1" },
        },
      },
    },

    fontFamily: {
      Lausanne: ["Lausanne , sans-serif"],
    },
  },
  plugins: [],
};
