/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: [require('tailwindcss/nesting')],
};

module.exports = config;
