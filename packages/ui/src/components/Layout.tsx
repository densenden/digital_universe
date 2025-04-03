'use client'

import * as React from 'react'
import { Menu } from './Menu'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  menuItems: Array<{
    label: string
    href: string
  }>
  domains?: Array<{
    name: string
    href: string
    isActive: boolean
  }>
}

export const Layout = ({ children, menuItems, domains = [] }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-senMidnight text-senSkin">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Menu items={menuItems} />
        
        <main className="grid grid-cols-12 gap-8 py-16">
          <div className="col-span-12">
            {children}
          </div>
        </main>

        <Footer domains={domains} logoColor="currentColor" />
      </div>
    </div>
  )
} 