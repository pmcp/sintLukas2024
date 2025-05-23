import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    safelist: [
        'col-span-1',
        'col-span-2',
        'col-span-3',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    // Custom CSS here ↓
                    css: {
                        fontSize: '1rem',
                        lineHeight: '1.5rem',
                        color: '#000000',
                        // More custom CSS…
                    },
                },
            },
            fontFamily: {
                sans: [
                    '"Helvetica Neue", sans-serif'],
            },
            colors: {
                'black': {
                    '50': '#000000',
                    '100': '#000000',
                    '200': '#000000',
                    '300': '#000000',
                    '400': '#000000',
                    '500': '#000000',
                    '600': '#000000',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000',
                    '950': '#000000',
                },
                'main': {
                    '50': '#f1f8f5',
                    '100': '#dcefe4',
                    '200': '#c1e1d1',
                    '300': '#8fc6ae',
                    '400': '#5fa88a',
                    '500': '#3e8b6f',
                    '600': '#2c6f57',
                    '700': '#235947',
                    '800': '#1e4739',
                    '900': '#1a3a31',
                    '950': '#0d211b',
                },
                'second': {
                    '50': '#fef4ee',
                    '100': '#fce6d8',
                    '200': '#f8c9b0',
                    '300': '#f3a37e',
                    '400': '#ee7349',
                    '500': '#e94e24',
                    '600': '#db371b',
                    '700': '#b52719',
                    '800': '#91221b',
                    '900': '#751f19',
                    '950': '#3f0c0b',
                },
                'third': {
                    '50': '#eeeeee',
                }
            },

        }
    }
}
