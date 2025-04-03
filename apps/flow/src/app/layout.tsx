import type { Metadata } from 'next'
import { Rubik, Bodoni_Moda } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation'
import { Footer } from '@sen/ui'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'SEN.CO Flow - Digital Innovation Studio',
  description: 'We help businesses transform through digital innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${bodoni.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 