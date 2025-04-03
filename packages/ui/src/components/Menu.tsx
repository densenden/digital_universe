'use client'

import Link from 'next/link'
import { cn } from '../utils'

interface MenuProps {
  items: Array<{
    label: string
    href: string
  }>
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white/80 hover:text-white font-rubik text-sm tracking-wide transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
} 