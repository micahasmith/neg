import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f0ff",
          100: "#ead9ff",
          200: "#d6b6ff",
          300: "#b987ff",
          400: "#9a5cff",
          500: "#7a33ff",
          600: "#6222e6",
          700: "#4a19b3",
          800: "#331180",
          900: "#1f0b4d"
        }
      }
    }
  },
  plugins: []
};

export default config;
