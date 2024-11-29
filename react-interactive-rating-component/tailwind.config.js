/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        orange: 'hsl(25, 97%, 53%)',
      },
      fontFamily: {
        workSans: ['Work Sans, serif'],
      },
    },
  },
  plugins: [],
};
