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
          "primary": "#1e3a8a",
          "secondary": "#1d4ed8",
          "accent": "#f3f4f6",
          "neutral": "#1e201b",
          "base-100": "#f7fcff",
          "info": "#008cf2",
          "success": "#009c49",
          "warning": "#facc15",
          "error": "#991b1b",
        },
      },
    ],
  },
};