'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface PostPreviewProps {
  title: string
  excerpt: string
  date: string
  tag: string
  slug: string
  className?: string
}

export function PostPreview({ 
  title, 
  excerpt, 
  date, 
  tag, 
  slug, 
  className = '' 
}: PostPreviewProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`col-span-full md:col-span-6 lg:col-span-4 group ${className}`}
    >
      <Link href={`/posts/${slug}`} className="block">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-amber-500/10 text-amber-500">
            {tag}
          </span>
          <time className="ml-4 text-sm text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <h3 className="font-display text-2xl mb-3 text-senClay dark:text-amber-500 group-hover:underline">
          {title}
        </h3>
        <p className="font-sans text-base text-gray-600 dark:text-gray-300">
          {excerpt}
        </p>
      </Link>
    </motion.article>
  )
} 