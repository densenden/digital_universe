'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface MediaObjectProps {
  image: {
    src: string
    alt: string
  }
  title: string
  content: string
  link?: {
    href: string
    label: string
  }
  imageOnRight?: boolean
  className?: string
}

export function MediaObject({ 
  image, 
  title, 
  content, 
  link, 
  imageOnRight = false,
  className = '' 
}: MediaObjectProps) {
  const contentSection = (
    <div className="flex flex-col justify-center">
      <h3 className="font-display text-2xl md:text-3xl mb-6 text-senClay dark:text-amber-500">
        {title}
      </h3>
      <div className="font-sans text-lg space-y-6">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {link && (
        <div className="mt-8">
          <Link 
            href={link.href}
            className="inline-flex items-center text-senClay dark:text-amber-500 font-medium hover:underline"
          >
            {link.label}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )

  const imageSection = (
    <div className="relative h-64 md:h-full min-h-[400px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`col-span-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${className}`}
    >
      {imageOnRight ? (
        <>
          <div className="md:pr-8">{contentSection}</div>
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          <div className="md:pl-8">{contentSection}</div>
        </>
      )}
    </motion.div>
  )
} 