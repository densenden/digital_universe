'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Headline } from '@sen/ui'
import { posts } from '../content/blog/posts'

interface PostPreviewProps {
  title: string
  excerpt: string
  date: string
  tag: string
  slug: string
}

function PostPreview({ title, excerpt, date, tag, slug }: PostPreviewProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-full md:col-span-4"
    >
      <a href={`/posts/${slug}`} className="block group">
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
      </a>
    </motion.article>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">SEN.CO Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Insights, Stories, and Perspectives on Digital Innovation
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-senDeepBlue mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-senDeepBlue/10 text-senDeepBlue mb-4">
                    {post.tag}
                  </span>
                  <h3 className="text-2xl font-display text-senDeepBlue mb-4">
                    <a href={`/posts/${post.slug}`} className="hover:text-senMidnight">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-senSlate mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href={`/posts/${post.slug}`}
                      className="text-senDeepBlue hover:text-senMidnight font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 