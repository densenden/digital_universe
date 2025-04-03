'use client'

import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
}

interface MenuProps {
  items: MenuItem[]
}

export function Menu({ items }: MenuProps) {
  return (
    <div className="flex gap-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
} 