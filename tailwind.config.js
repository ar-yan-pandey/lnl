/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Raleway',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        serif: [
          'Mozilla Text',
          'Lora',
          'ui-serif',
          'Georgia',
          'serif'
        ],
        mono: [
          'Space Mono',
          'ui-monospace',
          'SFMono-Regular',
          'monospace'
        ],
        display: [
          'Special Gothic Expanded One',
          'Raleway',
          'Roboto',
          'system-ui',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
};
