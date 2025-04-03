'use client'

import { motion } from 'framer-motion'
import { cn } from '../utils'
import { typography } from '../fonts'

interface HeadlineProps {
  children: React.ReactNode
  level?: 1 | 2 | 3
  className?: string
  align?: 'left' | 'center'
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const Headline = ({
  children,
  level = 1,
  className,
  align = 'left',
}: HeadlineProps) => {
  const Component = motion.h1
  const baseClasses = typography[`h${level}` as keyof typeof typography]

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.6 }}
      className={cn(
        baseClasses,
        align === 'center' && 'text-center',
        className
      )}
    >
      {children}
    </Component>
  )
} 