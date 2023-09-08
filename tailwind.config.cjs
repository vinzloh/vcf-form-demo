/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: [
  //   './components/**/*.{js,ts,jsx,tsx}',
  //   './pages/**/*.{js,ts,jsx,tsx}',
  // ],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
};
