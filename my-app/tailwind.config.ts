import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoalBlue: "#14171b",
        coalBlue: "#21252b",
        silverGray: "#a1a2a7",
        lightSeaGreen: "#5ce1e6",
        aquaCyan: "#20b2aa",
        vibrantOrange: "#ffa500",
      },
    },
  },
  plugins: [],
} satisfies Config;
