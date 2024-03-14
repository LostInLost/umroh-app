import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'umroh-cream': '#cbb3bf',
        'umroh-blue': '#048ba8',
        'umroh-green': '#96e6b3',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
