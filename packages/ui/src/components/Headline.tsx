import React from 'react'
import { motion } from 'framer-motion'

interface HeadlineProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}

export const Headline = ({ level = 1, className = '', children }: HeadlineProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const baseStyles = 'font-display tracking-tight'
  const levelStyles = {
    1: 'text-6xl md:text-7xl lg:text-8xl',
    2: 'text-5xl md:text-6xl lg:text-7xl',
    3: 'text-4xl md:text-5xl lg:text-6xl',
    4: 'text-3xl md:text-4xl lg:text-5xl',
    5: 'text-2xl md:text-3xl lg:text-4xl',
    6: 'text-xl md:text-2xl lg:text-3xl',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Tag className={`${baseStyles} ${levelStyles[level]} ${className}`}>
        {children}
      </Tag>
    </motion.div>
  )
} 