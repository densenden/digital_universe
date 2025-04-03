'use client'

import { motion } from 'framer-motion'
import { cn } from '../utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center'
  background?: string
  borderTop?: boolean
  showLine?: boolean
}

export const Section = ({
  children,
  className,
  align = 'left',
  background = 'bg-white',
  borderTop = false,
  showLine = false,
}: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'w-full py-16 md:py-24',
        background,
        borderTop && 'border-t border-neutral-200',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div
          className={cn(
            'grid grid-cols-12 gap-x-8 gap-y-16',
            align === 'center' && 'text-center'
          )}
        >
          {children}
        </div>
        {showLine && (
          <div className="mt-16 border-t border-neutral-200" />
        )}
      </div>
    </motion.section>
  )
} 