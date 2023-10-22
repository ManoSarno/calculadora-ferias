import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-blue': 'rgba(238, 242, 248, 1)',
        'blue': 'rgba(49, 51, 255, 1)',
        'blue2': 'rgba(32, 22, 213, 1)',
        'dark-blue': 'rgba(50, 50, 62, 1)',
        'light-yellow': 'rgba(254, 255, 207, 1)',
        'gray': 'rgba(206, 206, 216, 1)',
      }
    },
  },
  plugins: [],
}
export default config
