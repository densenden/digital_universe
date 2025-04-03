import type { Config } from 'tailwindcss'
import sharedConfig from '@sen/ui/tailwind.config'

const config: Config = {
  ...sharedConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 