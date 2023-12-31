/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./domain/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    vazirmatn: "var(--font-vazirmatn)",
  },
  theme: {
    extend: {
      screens: {
        580: "580px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
