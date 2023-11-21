/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          0: 'var(--white-0)',
          5: 'var(--white-5)',
          10: 'var(--white-10)',
        },
        gray: {
          10: 'var(--gray-10)',
          50: 'var(--gray-50)',
          70: 'var(--gray-70)',
        },
        navy: {
          10: 'var(--navy-10)',
          20: 'var(--navy-20)',
          40: 'var(--navy-40)',
          60: 'var(--navy-60)',
          90: 'var(--navy-90)',
        },
      },
    },
  },
  plugins: [],
}
