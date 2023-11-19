/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          0: 'var(--white-0)',
          5: 'var(--white-5)',
        },
        gray: {
          10: 'var(--grey-10)',
          50: 'var(--grey-50)',
          70: 'var(--grey-70)',
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
