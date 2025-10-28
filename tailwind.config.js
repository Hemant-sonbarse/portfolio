/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { mono: ["Space Mono", "monospace"], sans: ["Inter", "system-ui", "sans-serif"] },
      colors: {
        // exact from site
        bgDark: "#0D1117",
        bgCard: "#161B22",
        border: "#30363D",
        muted: "#8B949E",
        cyan: "#22D3EE",     // accent
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: { from: { textShadow: "0 0 8px #22D3EE" }, to: { textShadow: "0 0 16px #22D3EE, 0 0 24px #22D3EE" } },
      },
    },
  },
  plugins: [],
};