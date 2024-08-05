/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mischka: "#D8D5DF",
        wedgewood: "#4A7897",
        baliHai: "#8AA2B8",
        bermudaGray: "#6C8CA9",
      },
    },
  },
  plugins: [],
};
