import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fandi-blue': '#1e40af',
        'fandi-red': '#dc2626',
        'aged-paper': '#fefcf8',
      },
    },
  },
  plugins: [],
};

export default config;