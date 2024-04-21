/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Enable backdrop filter utilities
      backdropFilter: {
        'none': 'none',
        'md': 'blur(12px)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require("daisyui") // DaisyUI plugin // Tailwind CSS Filters plugin (if you're using Tailwind CSS v2)
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        name: 'mytheme', // Specify the custom theme name here
        theme: {
          // Define your custom theme colors and settings
          "primary": "#bd00ff",
          "secondary": "#0000ff",
          "accent": "#ea0000",
          "neutral": "#0c0913",
          "base-100": "#000000", // Make sure this value is valid, "#0000" seems incorrect
          "info": "#00eeff",
          "success": "#00e93c",
          "warning": "#f04900",
          "error": "#ff1e51",
        }
      },
    ],
  },
};