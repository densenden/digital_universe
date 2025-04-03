import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface MenuProps {
  items: Array<{
    label: string
    href: string
  }>
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <nav className="py-8">
      <ul className="flex space-x-8">
        {items.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="text-senSkin hover:text-senClay transition-colors duration-200"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
} 