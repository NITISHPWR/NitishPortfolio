import pkg from 'postcss-merge-rules';
const merge = pkg.merge;

export default {
 plugins: {
    'postcss-merge-rules': {
      merge: merge,
    },
    'tailwindcss': {},
    'autoprefixer': {},
 },
};