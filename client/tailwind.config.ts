import type { Config } from 'tailwindcss';
import {CSSRuleObject} from "tailwindcss/types/config";

const plugin = require('tailwindcss/plugin');

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                '2xl': '1330px',
            },
        },
        fontSize: {
            sm: '13px',
        },
        extend: {
            screens: {
                '2col': '670px',
                '3col': '1000px',
                '4col': '1330px',
            },
            backgroundImage: {},
            colors: {
                'highlight': '#D4B254',
                'highlight-hover': '#C8A74B',
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
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }: {addComponents: (component: CSSRuleObject | CSSRuleObject[]) => void}) {
            addComponents({
                '.heading-1': {
                    'fontWeight': '600',
                    'fontSize': '36px',
                    'lineHeight': 'calc(58/52*1em)',
                    'fontFamily': 'var(--font-helvetica)',
                    '@media screen(md)': {
                        fontSize: '52px',
                    },
                },
                '.heading-2': {
                    'fontWeight': '600',
                    'fontSize': '28px',
                    'lineHeight': 'calc(52/42*1em)',
                    'fontFamily': 'var(--font-helvetica)',
                    '@media screen(md)': {
                        fontSize: '42px',
                    },
                },
                '.heading-3': {
                    'fontWeight': '600',
                    'fontSize': '22px',
                    'lineHeight': 'calc(42/32*1em)',
                    'fontFamily': 'var(--font-helvetica)',
                    '@media screen(md)': {
                        fontSize: '32px',
                    },
                },
                '.heading-4': {
                    'fontWeight': '600',
                    'fontSize': '20px',
                    'lineHeight': 'calc(32/24*1em)',
                    'fontFamily': 'var(--font-helvetica)',
                    '@media screen(md)': {
                        fontSize: '24px',
                    },
                },
                '.heading-5': {
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: 'calc(26/18*1em)',
                    fontFamily: 'var(--font-helvetica)',
                },
                '.prose-base': {
                    fontWeight: '400',
                    fontSize: '15px',
                    lineHeight: '1.87em',
                    fontFamily: 'var(--font-roboto)',
                },
            });
        }),
    ],
};
export default config;
