'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Headline } from '@sen/ui'
import { coreValues } from '../content/flow/core-values'
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
}

function MediaObject({ image, title, content, link, imageOnRight = false }: MediaObjectProps) {
  const contentSection = (
    <motion.div
      initial={{ opacity: 0, x: imageOnRight ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center"
    >
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
          <a
            href={link.href}
            className="inline-flex items-center text-senClay dark:text-amber-500 font-medium hover:underline"
          >
            {link.label}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  )

  const imageSection = (
    <motion.div
      initial={{ opacity: 0, x: imageOnRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-64 md:h-full min-h-[400px]"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
  )

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-senMidnight/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display mb-6">
            Creating Digital Experiences That Matter
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We combine technology, design, and strategy to build remarkable products
          </p>
          <Link
            href="/contact"
            className="inline-block bg-senClay hover:bg-senSkin text-white hover:text-senMidnight px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-senMidnight text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-display text-senDeepBlue mb-4">{service.title}</h3>
                <p className="text-senSlate">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-senMidnight text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-senMidnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block border-2 border-senDeepBlue text-senDeepBlue hover:bg-senDeepBlue hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's create something amazing together
          </p>
          <Link
            href="/contact"
            className="inline-block bg-senClay hover:bg-senSkin text-white hover:text-senMidnight px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: 'Digital Strategy',
    icon: '/images/strategy.jpg',
    description: 'We help you navigate the digital landscape and create a roadmap for success.',
  },
  {
    title: 'Design & UX',
    icon: '/images/design.jpg',
    description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
  },
  {
    title: 'Development',
    icon: '/images/development.jpg',
    description: 'Cutting-edge technology solutions that bring your vision to life.',
  },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    image: '/images/project1.jpg',
    description: 'A modern e-commerce solution with seamless user experience.',
  },
  {
    title: 'Mobile Banking App',
    image: '/images/project2.jpg',
    description: 'Secure and intuitive mobile banking application.',
  },
] 