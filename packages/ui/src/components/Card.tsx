'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../utils'

interface CardProps {
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
  link?: {
    href: string
    label: string
  }
  className?: string
}

export function Card({ 
  title, 
  description, 
  image, 
  link, 
  className = '' 
}: CardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'group flex flex-col h-full overflow-hidden rounded-lg bg-white dark:bg-senMidnight shadow-lg hover:shadow-xl transition-shadow',
        className
      )}
    >
      {image && (
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-display text-xl md:text-2xl mb-4 text-senClay dark:text-amber-500">
          {title}
        </h3>
        <p className="font-sans text-base flex-grow">
          {description}
        </p>
        {link && (
          <div className="mt-6">
            <span className="inline-flex items-center text-senClay dark:text-amber-500 font-medium group-hover:underline">
              {link.label}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )

  if (link) {
    return (
      <Link href={link.href} className="col-span-full md:col-span-6 lg:col-span-4">
        {content}
      </Link>
    )
  }

  return (
    <div className="col-span-full md:col-span-6 lg:col-span-4">
      {content}
    </div>
  )
} 