'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface TextBlockProps {
  title?: string
  content: string
  className?: string
  columns?: 1 | 2
}

export function TextBlock({ 
  title, 
  content, 
  className = '',
  columns = 1 
}: TextBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`col-span-full md:col-span-6 ${columns === 2 ? 'lg:col-span-6' : 'lg:col-span-8 lg:col-start-3'} ${className}`}
    >
      {title && (
        <h3 className="font-display text-2xl md:text-3xl mb-6 text-senClay dark:text-amber-500">
          {title}
        </h3>
      )}
      <div 
        className={`font-sans text-lg leading-relaxed space-y-6 ${
          columns === 2 ? 'columns-1 md:columns-2 gap-8' : ''
        }`}
      >
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  )
} 