import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'brand-font': ['Doto', 'sans-serif'],
      },
      animation: {
        'custom-bounce': 'customBounce 1.5s infinite',
      },
      keyframes: {
        customBounce: {
          '0%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateX(8px)',

            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            transform: 'translateX(0px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
