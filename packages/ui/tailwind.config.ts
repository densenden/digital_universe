import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        senMidnight: '#1A2E40',
        senDeepBlue: '#023859',
        senSlate: '#364C59',
        senClay: '#BF947A',
        senSkin: '#F2CCB6',
        senOxide: '#732727',
        senRust: '#BF391B',
        senBark: '#4C2929',
        senBurnt: '#BF3617',
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
        display: ['var(--font-bodoni)'],
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

export default config 