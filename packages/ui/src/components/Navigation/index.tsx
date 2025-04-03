'use client'

import Link from 'next/link'
import { Menu } from '../Menu'
import { Logo } from '../Logo'

interface NavigationProps {
  title: string
  menuItems: Array<{
    label: string
    href: string
  }>
}

export function Navigation({ title, menuItems }: NavigationProps) {
  return (
    <nav className="w-full bg-white dark:bg-senMidnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="font-display text-xl text-senClay dark:text-amber-500">
                {title}
              </span>
            </Link>
          </div>
          <Menu items={menuItems} />
        </div>
      </div>
    </nav>
  )
} 