'use client'

import * as React from 'react'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  menuItems: Array<{
    label: string
    href: string
  }>
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-senMidnight text-senSkin">
      <main className="py-16">
        {children}
      </main>
      <Footer />
    </div>
  )
} 