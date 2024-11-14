/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import autoprefixer from "autoprefixer";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "retro", "cyberpunk", "valentine", "aqua"],
  },
};
