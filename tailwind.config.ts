import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgba(var(--background))",
        backgroundSecondary: "rgba(var(--background-secondary))",
        textPrimary: "rgba(var(--text-primary))",
        textSecondary: "rgba(var(--text-secondary))",
        accent: "rgba(var(--accent))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
