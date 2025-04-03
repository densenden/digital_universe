'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Headline, Section, Card, typography, cn } from '@sen/ui'
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
    <>
      <Section background="bg-gray-900" className="text-white">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Headline level={1} className="text-white mb-6">
            Digital Innovation Studio
          </Headline>
          <p className={cn(typography.body, "text-white/80 mb-8")}>
            We help businesses transform through digital innovation, combining strategy, design, and technology.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-gray-900 bg-white hover:bg-gray-100 transition-all"
          >
            Get in touch
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 relative h-[400px] md:h-[500px]">
          <Image
            src="/images/hero-bg.jpg"
            alt="Digital Innovation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Section>

      <Section>
        <div className="col-span-12 text-center mb-12">
          <Headline level={2}>Our Services</Headline>
          <p className={cn(typography.body, "max-w-2xl mx-auto")}>
            We offer a comprehensive range of digital services to help your business grow.
          </p>
        </div>
        
        <Card
          title="Strategy"
          description="We develop comprehensive digital strategies that align with your business goals."
          image={{
            src: "/images/strategy.jpg",
            alt: "Strategy"
          }}
          link={{
            href: "/services/strategy",
            label: "Learn more"
          }}
        />
        
        <Card
          title="Design"
          description="We create beautiful, functional designs that enhance user experience."
          image={{
            src: "/images/design.jpg",
            alt: "Design"
          }}
          link={{
            href: "/services/design",
            label: "Learn more"
          }}
        />
        
        <Card
          title="Development"
          description="We build robust, scalable applications using cutting-edge technologies."
          image={{
            src: "/images/development.jpg",
            alt: "Development"
          }}
          link={{
            href: "/services/development",
            label: "Learn more"
          }}
        />
      </Section>

      <Section background="bg-gray-50" borderTop>
        <div className="col-span-12 text-center mb-12">
          <Headline level={2}>Featured Projects</Headline>
          <p className={cn(typography.body, "max-w-2xl mx-auto")}>
            Explore some of our recent work and see how we've helped businesses transform.
          </p>
        </div>
        
        <Card
          title="E-commerce Platform"
          description="A modern e-commerce platform with advanced features and seamless user experience."
          image={{
            src: "/images/project1.jpg",
            alt: "E-commerce Platform"
          }}
          link={{
            href: "/projects/ecommerce",
            label: "View case study"
          }}
        />
        
        <Card
          title="Mobile App"
          description="A cross-platform mobile application with real-time features and offline capabilities."
          image={{
            src: "/images/project2.jpg",
            alt: "Mobile App"
          }}
          link={{
            href: "/projects/mobile-app",
            label: "View case study"
          }}
        />
      </Section>
    </>
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