import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Berry Optics Design System v2.0 — Color Tokens
        // Updated: Optical Silver replaces Optical Gray, Photon Blue/Crystal Cyan adjusted
        brand: {
          photon: '#0B6CFF',      // Primary brand color (adjusted)
          crystal: '#00D9FF',     // Secondary accent (adjusted)
          navy: '#0A1628',        // Dark emphasis only
        },
        surface: {
          white: '#FFFFFF',       // Main background (70%)
          silver: '#E8EDF2',      // Light section background (replaces optical gray)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      breakpoints: {
        '3xl': '1920px',
      },
      animation: {
        'light-scan': 'lightScan 2s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        lightScan: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
