'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  className?: string
  hasDarkBackground?: boolean
  fullWidth?: boolean
}

export function Section({ 
  children, 
  className = '', 
  hasDarkBackground = false,
  fullWidth = false 
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-24 ${hasDarkBackground ? 'bg-senMidnight text-white' : 'bg-white dark:bg-senMidnight dark:text-white'} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'container mx-auto px-4'} grid grid-cols-1 md:grid-cols-12 gap-8`}>
        {children}
      </div>
    </motion.section>
  )
} 