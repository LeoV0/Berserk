import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berserk: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
