/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ["./public/index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        'yellow-white': '#f6f6eb',
        'not-too-far-from-white' : '#fafafa',
        'light-purple' : '#f3f2fc',
        'gold': '#f0d062',
        'blue': '#381fd1',
        'lighter-hover-blue': '#5740e2',
        'hover-blue': '#7e6de9',
        'dark-blue': '#10284b',
        'grey': '#4b4b4e'
      },
      screens: {
        'xs' : '460px',
        'md' : '841px'
      }
    },
  },
  plugins: [],
}

