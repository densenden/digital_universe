'use client'

import * as React from 'react'

interface HeadlineProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl lg:text-7xl'
}

export function Headline({ children, className = '', size = 'lg' }: HeadlineProps) {
  return (
    <h1
      className={`font-display leading-tight text-senClay dark:text-amber-500 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h1>
  )
} 