/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0ea5e9',
          hover:   '#38bdf8',
          muted:   '#0369a1',
        },
        surface: {
          dark:  '#0f172a',
          card:  '#1e293b',
          border:'#334155',
          light: '#f8fafc',
          cardl: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.4), 0 1px 2px -1px rgba(0,0,0,0.4)',
        glow: '0 0 20px rgba(14,165,233,0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
