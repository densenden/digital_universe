'use client'

import * as React from 'react'
import { posts } from '../../../content/blog/posts'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 mb-4">
            {post.tag}
          </span>
          <h1 className="text-5xl md:text-6xl font-display mb-6">{post.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4">{post.excerpt}</p>
          <div className="flex items-center space-x-4 text-gray-300">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          {post.content}
        </div>
      </section>
    </div>
  )
} 