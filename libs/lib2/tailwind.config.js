// const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
// const { join } = require('path');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
//     ...createGlobPatternsForDependencies(__dirname),
//   ],
//   theme: {
//     colors: {
//       primary: {
//         light: '#5eead4',
//         DEFAULT: '#14b8a6',
//         dark: '#0f766e',
//       },

//       secondary: {
//         light: '#bae6fd',
//         DEFAULT: '#0ea5e9',
//         dark: '#0369a1',
//       },

//       white: '#ffffff',
//       black: '#000000',
//     },

//     spacing: {
//       sm: '0.5rem',
//       md: '1rem',
//       lg: '1.5rem',
//       xl: '2rem',
//     },
//     extend: {},
//   },
//   plugins: [],
// };
const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
//const sharedTailwindConfig = require('../../tailwind.config');
  const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};