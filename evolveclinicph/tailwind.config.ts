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
        turq: {
          DEFAULT: '#67f2e3',
          shaded1: '#31a99e',
          shaded2: '#1c7878',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
