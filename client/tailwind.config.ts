import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'highlight': '#D4B254',
        'title-text': '#222222',
        'menu-icons': '#000000',
        'light': '#eeeeee',
        'body-text': '#777777',
        'success': '#86CB19',
        'success-text': '#75B118',
        'danger': '#FF0000',
        'danger-bg': '#FFF5F5',
        'danger-text': '#CC0000',
        'warning': '#FFC928',
        'warning-bg': '#FFC9281A',
        'warning-text': '#9F7F1E',
      },
      fontFamily: {
        helvetica: ['var(--font-helvetica)'],
        roboto: ['var(--font-roboto)'],
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.heading-1': {
          fontWeight: '600',
          fontSize: '52px',
          lineHeight: 'calc(58 / 52 * 1em)',
        }
      })
    })
  ],
};
export default config;
