/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',     // Extra Small
        'sm': '.875rem',    // Small
        'base': '1rem',     // Base
        'lg': '1.125rem',   // Large
        'xl': '1.25rem',    // Extra Large
        '2xl': '1.5rem',    // 2 Extra Large
        '3xl': '1.875rem',  // 3 Extra Large
        '4xl': '2.25rem',   // 4 Extra Large
        '5xl': '3rem',      // 5 Extra Large
        '6xl': '4rem',      // 6 Extra Large
      },
      screens: {
        'sm': '640px',      // Small screens and up
        'md': '768px',      // Medium screens and up
        'lg': '1024px',     // Large screens and up
        'xl': '1280px',     // Extra large screens and up
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'transparent': 'transparent',
      },
      fontWeight: {
        'hairline': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
}


