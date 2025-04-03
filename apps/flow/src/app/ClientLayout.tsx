'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@sen/ui'

interface Domain {
  name: string
  href: string
  isActive: boolean
}

interface ClientLayoutProps {
  children: React.ReactNode
  domains?: Domain[]
}

export function ClientLayout({ children, domains }: ClientLayoutProps) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout 
        menuItems={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'About', href: '/about' },
        ]}
        domains={domains}
      >
        {children}
      </Layout>
    </ThemeProvider>
  )
} 