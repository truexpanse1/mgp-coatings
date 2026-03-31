import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#1a1a1a",
        surface: "#242424",
        cream: "#f5f0eb",
        muted: "#9a9a8a",
        gold: "#c8a96e",
        footer: "#0a0a0a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
