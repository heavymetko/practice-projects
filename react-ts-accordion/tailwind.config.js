/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'darker-custom-blue': 'hsl(237, 12%, 33%)',
        'dark-custom-blue': 'hsl(240, 6%, 50%)',
        'light-custom-blue': 'hsl(240, 5%, 91%)',
        'custom-red': 'hsl(14, 88%, 65%)',
      },
      height: {
        customHeight: '32rem',
      },
    },
  },
  plugins: [],
};
