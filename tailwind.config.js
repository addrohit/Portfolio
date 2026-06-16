/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core surface colors
        ink: {
          950: '#0A0F1C',
          900: '#0F172A',
          800: '#161E2E',
          700: '#1E293B',
          600: '#2A3749',
        },
        paper: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
        },
        // Signature accent: electric cyan (primary)
        accent: {
          DEFAULT: '#22D3EE',
          400: '#38E4FB',
          500: '#22D3EE',
          600: '#0EA5C4',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        // Secondary accent: warm amber (CTAs / highlights)
        flare: {
          DEFAULT: '#F59E0B',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.15), 0 8px 30px -10px rgba(34,211,238,0.25)',
        'glow-lg': '0 0 40px -5px rgba(34,211,238,0.35)',
      },
    },
  },
  plugins: [],
}
