/** @type {import('tailwindcss').Config} */
export default {
  content: [],
    purge: ['./src/**/*.{svelte,js,ts}'],
    darkMode: "class",
  theme: {
    extend: {
         colors: {
        white: '#ffffff',
        light: '#f0eff5',
        'gray-light': '#86848c',
        'gray-dark': '#56555e',
        dark: '#27282f',
        primary: 'rgb(71, 7, 234)',
        success: 'rgb(34, 202, 75)',
        danger: 'rgb(255, 67, 54)',
        warning: 'rgb(234, 181, 7)',
        purple: 'rgb(160, 99, 245)',
        'primary-light': 'rgba(71, 7, 234, 0.2)',
        'success-light': 'rgba(34, 202, 75, 0.2)',
        'danger-light': 'rgba(255, 67, 54, 0.2)',
        'warning-light': 'rgba(234, 181, 7, 0.2)',
        'purple-light': 'rgba(160, 99, 245, 0.2)',
      },
      borderRadius: {
        '1xl': '1rem',
        '2xl': '6px',
        '3xl': '1.6rem',
      },
      padding: {
        1: '1rem',
        2: '8px',
      },
    },
  },
  plugins: [],
}

