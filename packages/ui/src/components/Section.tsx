import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
} 