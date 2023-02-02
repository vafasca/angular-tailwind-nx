const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: {
        light: '#a5b4fc',
        DEFAULT: '#6366f1',
        dark: '#4338ca',
      },
      secondary: {
        light: '#e9d5ff',
        DEFAULT: '#a855f7',
        dark: '#7e22ce',
      },
      white: '#ffffff',
      black: '#000000',
    },

    spacing: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },

    extend: {},
  },
  plugins: [],
};
