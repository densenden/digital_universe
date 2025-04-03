import React from 'react'
import { Menu } from './Menu'

interface LayoutProps {
  children: React.ReactNode
  menuItems: Array<{
    label: string
    href: string
  }>
}

export const Layout = ({ children, menuItems }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-senMidnight text-senSkin">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Menu items={menuItems} />
        
        <main className="grid grid-cols-12 gap-8 py-16">
          <div className="col-span-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 