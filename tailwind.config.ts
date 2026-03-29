import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        secondary: '#7c3aed',
        success: '#4ade80',
        warning: '#fbbf24',
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a2e',
          border: '#333',
          text: '#ffffff',
          muted: '#888888',
        }
      }
    },
  },
  plugins: [],
}
export default config
