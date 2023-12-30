import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#f5f5f5',
      titles: '#333333',
      parragraph: '#5c5c5c',
      primary: '#0077C2',
      secondary: '#59a5f5',
      tertiary: '#c8ffff'
    }
  },
  plugins: []
}
export default config
