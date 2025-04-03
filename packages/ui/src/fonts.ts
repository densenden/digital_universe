import { Bodoni_Moda, Rubik } from 'next/font/google'

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

// Typography utility classes
export const typography = {
  h1: 'font-bodoni text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight',
  h2: 'font-bodoni text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight',
  h3: 'font-bodoni text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-tight',
  body: 'font-rubik text-base md:text-lg leading-relaxed tracking-wide text-neutral-600',
  small: 'font-rubik text-sm leading-relaxed tracking-wide text-neutral-500',
  rhythm: 'space-y-8',
} 