import type { Metadata } from 'next'
import { Rubik, Bodoni_Moda } from 'next/font/google'
import './globals.css'
import { Layout } from '@sen/ui'

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
  title: 'SEN.CO Blog - Digital Innovation',
  description: 'Insights, Stories, and Perspectives on Digital Innovation',
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Tags', href: '/tags' },
  { label: 'About', href: '/about' },
]

const domains = [
  { name: 'SEN.STUDIO', href: 'https://sen.studio', isActive: false },
  { name: 'FLOW', href: 'https://flow.sen.studio', isActive: false },
  { name: 'BLOG', href: 'https://blog.sen.studio', isActive: true },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${bodoni.variable}`}>
      <body className="font-sans bg-gray-50">
        <Layout menuItems={menuItems} domains={domains}>
          {children}
        </Layout>
      </body>
    </html>
  )
} 