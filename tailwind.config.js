/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./domain/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    vazirmatn: "var(--font-vazirmatn)",
  },
  theme: {
    extend: {
      colors: {
        coustomGray: {
          200: "#444",
          400: "#333",
        },
      },
      boxShadow: {
        normalGlow:
          "inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff",
      },
    },
  },
  plugins: [],
};
