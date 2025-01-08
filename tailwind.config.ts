import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-100': '#E8F3EB',
        'green-200': '#C2E8D6',
        'green-300': '#A4C8B1',
        'green-400': '#8EB8A6',
        'green-500': '#6DAA8F',
        'green-600': '#5A8F7A',
        'green-700': '#4F7D6C',
        'green-800': '#3F6D59',
        'green-900': '#2F5B45',
        beige: '#D9D9D9',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0' },
          '70%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-long': 'fade-in-delay 2.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
