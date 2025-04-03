'use client'

import Link from 'next/link'
import { Menu } from '../Menu'
import { Logo } from '../Logo'
import { cn } from '../../utils'

interface NavigationProps {
  title: string
  menuItems: Array<{
    label: string
    href: string
  }>
}

export const Navigation = ({ title, menuItems }: NavigationProps) => {
  return (
    <nav className="fixed w-full bg-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-8 w-auto" />
            </Link>
            <Link href="/" className="text-white font-bodoni text-2xl tracking-wide">
              {title}
            </Link>
          </div>
          <div className="flex items-center">
            <Menu items={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  )
} 