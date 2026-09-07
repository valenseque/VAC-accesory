/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'joyeria-crema': '#FDF8F3',
        'joyeria-beige': '#F7F6F2',
        'joyeria-arena': '#E8E4DE',
        'joyeria-dorado': '#D4C4A8',
        'joyeria-oscuro': '#1A1A1A',
        'joyeria-texto': '#333333',
        'joyeria-textoClaro': '#666666',
        'joyeria-borde': '#E5E0D8',
        'joyeria-rosa': '#F5E6E0',
        'joyeria-champagne': '#F0E6D3',
        'lorvique-dark': '#1A1A1A',
        'lorvique-text': '#666666',
        'lorvique-beige': '#F7F6F2',
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"Crimson Text"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'elegante': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    }
  },
  plugins: [],
}
