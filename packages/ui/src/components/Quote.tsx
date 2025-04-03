'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface QuoteProps {
  text: string
  author?: string
  role?: string
  className?: string
}

export function Quote({ text, author, role, className = '' }: QuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`col-span-full text-center ${className}`}
    >
      <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
        "{text}"
      </p>
      {author && (
        <footer className="text-senClay dark:text-amber-500">
          <cite className="font-sans text-lg not-italic">
            {author}
            {role && <span className="block text-base opacity-75">{role}</span>}
          </cite>
        </footer>
      )}
    </motion.blockquote>
  )
} 