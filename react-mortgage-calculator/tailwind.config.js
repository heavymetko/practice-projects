/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: ' hsl(61, 70%, 52%)',
        'lime-2': ' hsl(61, 70%, 72%)',
        'lime-light': ' hsl(61, 70%, 90%)',
        'custom-red': 'hsl(4, 69%, 50%)',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans, sans-serif'],
      },
      borderRadius: {
        extra: '3rem',
      },
    },
  },
  plugins: [],
};
