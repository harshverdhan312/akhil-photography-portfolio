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
        bone: {
          50: '#FCFCF9',
          100: '#F8F8F5',
          200: '#EFEFEA',
          300: '#E2E2D8',
          400: '#C8C8BA',
          500: '#9C9C89',
        },
        graphite: {
          950: '#070708',
          900: '#0F0F10',
          850: '#151517',
          800: '#1C1C1F',
          700: '#2A2A2E',
          600: '#3E3E44',
          500: '#64646E',
        },
        saffron: {
          400: '#FFB347',
          500: '#FF9933',
          600: '#E67E22',
          700: '#D35400',
        },
        vermilion: {
          400: '#FF6B6B',
          500: '#E63946',
          600: '#D9381E',
          700: '#B82610',
        },
        peacock: {
          400: '#2EC4B6',
          500: '#0E8388',
          600: '#0D5C46',
          700: '#073B2C',
        },
        lapis: {
          400: '#4361EE',
          500: '#2B4C7E',
          600: '#1A365D',
          700: '#0F2341',
        },
        champagne: {
          300: '#EED9B7',
          400: '#DFC08F',
          500: '#C5A059',
          600: '#A48037',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        display: ['"Syne"', '"Playfair Display"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
