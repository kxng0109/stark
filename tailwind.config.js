/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ["./public/index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        'yellow-white': '#f6f6eb',
        'gold': '#f0d062',
        'blue': '#381fd1',
        'hover-blue': '#4b34d4',
        'dark-blue': '#10284b',
      }
    },
  },
  plugins: [],
}

