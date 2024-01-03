// Change this line
// const tailwindcss = require('tailwindcss').default;

// To this line
import tailwindcss from 'tailwindcss';

export default {
  plugins: {
    tailwindcss,
    autoprefixer: {},
  },
};
