/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'medium-green': 'hsl(169, 82%, 27%)',
        'light-green': 'hsl(148, 38%, 91%)',
        'medium-gray': 'hsl(186, 15%, 59%)',
        'dark-gray': 'hsl(187, 24%, 22%)',
        'custom-red': 'hsl(0, 66%, 54%)',
      },
      fontFamily: {
        karla: ['Karla, sans-serif'],
      },
    },
  },
  plugins: [],
};
