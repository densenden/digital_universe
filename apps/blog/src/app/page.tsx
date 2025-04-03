'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Headline, Section, Card, typography, cn } from '@sen/ui'
import { posts } from '../content/blog/posts'
import Link from 'next/link'

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

export default function Home() {
  return (
    <>
      <Section>
        <div className="col-span-12 text-center mb-12">
          <Headline level={1}>Studio SEN Blog</Headline>
          <p className={cn(typography.body, "max-w-2xl mx-auto")}>
            Insights, stories, and perspectives on digital innovation, design, and technology.
          </p>
        </div>
      </Section>

      <Section background="bg-gray-50" borderTop>
        <div className="col-span-12 mb-12">
          <Headline level={2}>Latest Articles</Headline>
        </div>
        
        <Card
          title="The Future of Digital Innovation"
          description="Exploring emerging trends and technologies that are shaping the future of digital innovation."
          image={{
            src: "/images/blog/future-innovation.jpg",
            alt: "Future of Digital Innovation"
          }}
          link={{
            href: "/articles/future-of-digital-innovation",
            label: "Read more"
          }}
        />
        
        <Card
          title="Design Systems in Practice"
          description="A practical guide to implementing and maintaining effective design systems in modern applications."
          image={{
            src: "/images/blog/design-systems.jpg",
            alt: "Design Systems"
          }}
          link={{
            href: "/articles/design-systems",
            label: "Read more"
          }}
        />
        
        <Card
          title="Sustainable Technology"
          description="How sustainable practices are becoming essential in technology development and deployment."
          image={{
            src: "/images/blog/sustainable-tech.jpg",
            alt: "Sustainable Technology"
          }}
          link={{
            href: "/articles/sustainable-technology",
            label: "Read more"
          }}
        />
      </Section>

      <Section>
        <div className="col-span-12 text-center mb-12">
          <Headline level={2}>Featured Topics</Headline>
          <p className={cn(typography.body, "max-w-2xl mx-auto")}>
            Explore our most popular topics and discover insights across different areas of digital innovation.
          </p>
        </div>
        
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            href="/tags/design" 
            className="group p-6 bg-white ring-1 ring-neutral-200/30 hover:ring-neutral-300/50 transition-all"
          >
            <h3 className={cn(typography.h3, "mb-4 group-hover:text-neutral-600")}>Design</h3>
            <p className={typography.small}>UI/UX, Design Systems, Visual Design</p>
          </Link>
          
          <Link 
            href="/tags/development" 
            className="group p-6 bg-white ring-1 ring-neutral-200/30 hover:ring-neutral-300/50 transition-all"
          >
            <h3 className={cn(typography.h3, "mb-4 group-hover:text-neutral-600")}>Development</h3>
            <p className={typography.small}>Web Development, Mobile Apps, Architecture</p>
          </Link>
          
          <Link 
            href="/tags/strategy" 
            className="group p-6 bg-white ring-1 ring-neutral-200/30 hover:ring-neutral-300/50 transition-all"
          >
            <h3 className={cn(typography.h3, "mb-4 group-hover:text-neutral-600")}>Strategy</h3>
            <p className={typography.small}>Digital Strategy, Innovation, Business Growth</p>
          </Link>
        </div>
      </Section>
    </>
  )
} 