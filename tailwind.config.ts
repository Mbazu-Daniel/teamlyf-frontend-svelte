import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // "./src/**/*.{svelte,js,ts}",
    "./public/index.html",
    "./src/components/**/*.{svelte,js,ts}",
  ],
  purge: ["./src/**/*.{svelte,js,ts}"],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        light: "#f0eff5",
        "gray-light": "#86848c",
        "gray-dark": "#56555e",
        dark: "#27282f",
        primary: "#9747FF",
        sidebar: "#f2f2f2",
        success: "rgb(34, 202, 75)",
        danger: "rgb(255, 67, 54)",
        warning: "rgb(234, 181, 7)",
      },
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
