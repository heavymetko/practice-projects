/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(223, 87%, 63%)',
        'custom-blue-light': 'hsl(223, 87%, 70%)',
        'pale-blue': 'hsl(223, 100%, 88%)',
        'dark-blue': 'hsl(209, 33%, 12%)',
        'custom-gray': 'hsl(0, 0%, 59%)',
        'light-red': 'hsl(354, 100%, 66%)',
      },
      stroke: {
        'custom-blue': 'hsl(223, 87%, 63%)',
      },
      fontFamily: {
        'libre-franklin': ['Libre Franklin, sans-serif'],
      },
    },
  },
  plugins: [],
};
