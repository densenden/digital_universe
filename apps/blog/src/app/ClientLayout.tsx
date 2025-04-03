'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@sen/ui'

interface Domain {
  name: string
  href: string
  isActive: boolean
}

interface ClientLayoutProps {
  children: React.ReactNode
  domains: Domain[]
}

export function ClientLayout({ children, domains }: ClientLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout 
        menuItems={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'Tags', href: '/tags' },
          { label: 'About', href: '/about' },
        ]}
        domains={domains}
      >
        {children}
      </Layout>
    </ThemeProvider>
  )
} 