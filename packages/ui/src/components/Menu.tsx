'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '../utils'

interface MenuProps {
  items: Array<{
    label: string
    href: string
  }>
  className?: string
}

export const Menu = ({ items, className }: MenuProps) => {
  return (
    <nav>
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
              className={cn(
                "text-white hover:text-gray-300 transition-colors duration-200 uppercase text-sm font-medium tracking-wider",
                className
              )}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
} 