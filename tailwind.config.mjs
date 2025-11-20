/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        spbg: "#f7f3ec",
        sptext: "#111111",
        spmuted: "#6b6b6b",
        spborder: "#e1d9ce",
        espaccent: "#e35f4f"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      }
    }
  },
  plugins: []
};
