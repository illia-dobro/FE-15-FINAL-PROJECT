/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#f5ece3',
        'secondary': '#eee4da'
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
