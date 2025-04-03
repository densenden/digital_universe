import type { Metadata } from 'next'
import { Rubik, Bodoni_Moda } from 'next/font/google'
import './globals.css'
import { Layout } from '@sen/ui'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
})

export const metadata: Metadata = {
  title: 'SEN.CO - Digital Innovation Studio',
  description: 'We help businesses transform through digital innovation',
}

const menuItems = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const domains = [
  { name: 'SEN.STUDIO', href: 'https://sen.studio', isActive: false },
  { name: 'FLOW', href: 'https://flow.sen.studio', isActive: true },
  { name: 'BLOG', href: 'https://blog.sen.studio', isActive: false },
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