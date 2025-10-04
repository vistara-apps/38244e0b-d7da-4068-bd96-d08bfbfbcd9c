import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        'text-muted': 'var(--color-text-muted)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        'streak-fire': 'var(--color-streak-fire)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(265, 85%, 58%, 0.15)',
        'card-hover': '0 8px 32px hsla(265, 85%, 58%, 0.25)',
        'glow': '0 0 24px var(--color-accent)',
      },
      animation: {
        'streak-pop': 'streakPop 400ms cubic-bezier(0.22, 1, 0.36, 1)',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        streakPop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px var(--color-accent)' },
          '50%': { boxShadow: '0 0 40px var(--color-accent)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
