/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const lightPrefix = 'ty-light';
const darkPrefix = 'ty-dark';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Flex', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Light colors
        'primary-light': `var(--${lightPrefix}-primary)`,
        'on-primary-light': `var(--${lightPrefix}-on-primary)`,
        'primary-container-light': `var(--${lightPrefix}-primary-container)`,
        'on-primary-container-light': `var(--${lightPrefix}-on-primary-container)`,
        'secondary-light': `var(--${lightPrefix}-secondary)`,
        'on-secondary-light': `var(--${lightPrefix}-on-secondary)`,
        'secondary-container-light': `var(--${lightPrefix}-secondary-container)`,
        'on-secondary-container-light': `var(--${lightPrefix}-on-secondary-container)`,
        'tertiary-light': `var(--${lightPrefix}-tertiary)`,
        'on-tertiary-light': `var(--${lightPrefix}-on-tertiary)`,
        'tertiary-container-light': `var(--${lightPrefix}-tertiary-container)`,
        'on-tertiary-container-light': `var(--${lightPrefix}-on-tertiary-container)`,
        'error-light': `var(--${lightPrefix}-error)`,
        'on-error-light': `var(--${lightPrefix}-on-error)`,
        'error-container-light': `var(--${lightPrefix}-error-container)`,
        'on-error-container-light': `var(--${lightPrefix}-on-error-container)`,
        'background-light': `var(--${lightPrefix}-background)`,
        'on-background-light': `var(--${lightPrefix}-on-background)`,
        'surface-light': `var(--${lightPrefix}-surface)`,
        'on-surface-light': `var(--${lightPrefix}-on-surface)`,
        'surface-variant-light': `var(--${lightPrefix}-surface-variant)`,
        'on-surface-variant-light': `var(--${lightPrefix}-on-surface-variant)`,
        'outline-light': `var(--${lightPrefix}-outline)`,
        'outline-variant-light': `var(--${lightPrefix}-outline-variant)`,
        'shadow-light': `var(--${lightPrefix}-shadow)`,
        'scrim-light': `var(--${lightPrefix}-scrim)`,
        'inverse-surface-light': `var(--${lightPrefix}-inverse-surface)`,
        'inverse-on-surface-light': `var(--${lightPrefix}-inverse-on-surface)`,
        'inverse-primary-light': `var(--${lightPrefix}-inverse-primary)`,

        // Dark colors
        'primary-dark': `var(--${darkPrefix}-primary)`,
        'on-primary-dark': `var(--${darkPrefix}-on-primary)`,
        'primary-container-dark': `var(--${darkPrefix}-primary-container)`,
        'on-primary-container-dark': `var(--${darkPrefix}-on-primary-container)`,
        'secondary-dark': `var(--${darkPrefix}-secondary)`,
        'on-secondary-dark': `var(--${darkPrefix}-on-secondary)`,
        'secondary-container-dark': `var(--${darkPrefix}-secondary-container)`,
        'on-secondary-container-dark': `var(--${darkPrefix}-on-secondary-container)`,
        'tertiary-dark': `var(--${darkPrefix}-tertiary)`,
        'on-tertiary-dark': `var(--${darkPrefix}-on-tertiary)`,
        'tertiary-container-dark': `var(--${darkPrefix}-tertiary-container)`,
        'on-tertiary-container-dark': `var(--${darkPrefix}-on-tertiary-container)`,
        'error-dark': `var(--${darkPrefix}-error)`,
        'on-error-dark': `var(--${darkPrefix}-on-error)`,
        'error-container-dark': `var(--${darkPrefix}-error-container)`,
        'on-error-container-dark': `var(--${darkPrefix}-on-error-container)`,
        'background-dark': `var(--${darkPrefix}-background)`,
        'on-background-dark': `var(--${darkPrefix}-on-background)`,
        'surface-dark': `var(--${darkPrefix}-surface)`,
        'on-surface-dark': `var(--${darkPrefix}-on-surface)`,
        'surface-variant-dark': `var(--${darkPrefix}-surface-variant)`,
        'on-surface-variant-dark': `var(--${darkPrefix}-on-surface-variant)`,
        'outline-dark': `var(--${darkPrefix}-outline)`,
        'outline-variant-dark': `var(--${darkPrefix}-outline-variant)`,
        'shadow-dark': `var(--${darkPrefix}-shadow)`,
        'scrim-dark': `var(--${darkPrefix}-scrim)`,
        'inverse-surface-dark': `var(--${darkPrefix}-inverse-surface)`,
        'inverse-on-surface-dark': `var(--${darkPrefix}-inverse-on-surface)`,
        'inverse-primary-dark': `var(--${darkPrefix}-inverse-primary)`,
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
