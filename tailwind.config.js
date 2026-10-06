/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#080809',
          900: '#0D0D0E',
          850: '#131315',
          800: '#18181B',
          750: '#1E1E22',
          700: '#27272C',
          600: '#3C3C43',
          500: '#5A5A65',
          400: '#7E7E8B',
        },
        linen: {
          50: '#F9F7F4',
          100: '#EDE8DF',
          200: '#E2DBD0',
          300: '#D1C8BA',
          400: '#B0A594',
          500: '#8A7E6C',
          600: '#675C4C',
        },
        terracotta: {
          300: '#E4A485',
          400: '#D48962',
          500: '#C07048',
          600: '#A85A33',
          700: '#8A4522',
        },
        obsidian: {
          950: '#080809',
          900: '#0D0D0E',
          850: '#131315',
          800: '#18181B',
          750: '#1E1E22',
          700: '#27272C',
        },
        alabaster: {
          50: '#F9F7F4',
          100: '#EDE8DF',
          200: '#E2DBD0',
          300: '#D1C8BA',
          400: '#B0A594',
          500: '#8A7E6C',
        },
        gold: {
          300: '#E4A485',
          400: '#D48962',
          500: '#C07048',
          600: '#A85A33',
          700: '#8A4522',
        },
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
