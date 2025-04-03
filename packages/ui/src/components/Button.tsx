'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'rounded-lg font-medium transition-colors duration-200'
    
    const variants = {
      primary: 'bg-senRust text-white hover:bg-senBurnt',
      secondary: 'bg-senSlate text-white hover:bg-senDeepBlue',
      outline: 'border-2 border-senClay text-senClay hover:bg-senClay hover:text-senMidnight',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button' 