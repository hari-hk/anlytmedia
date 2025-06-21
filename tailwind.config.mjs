/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg|text|border|from|to|via)-(red|green|blue|yellow|purple|pink|indigo|gray|slate|neutral|zinc|stone|amber|orange|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern: /^(bg|text|border|from|to|via)-(black|white)$/,
    },
    {
      pattern: /^bg-gradient-to-(r|l|t|b|tr|tl|br|bl)$/,
    },
  ],
  plugins: [],
};
