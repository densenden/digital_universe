'use client'

import * as React from 'react'
import { coreValues } from '@sen/shared-content'
import { Headline } from '@sen/ui'
import Image from 'next/image'

export default function CoreValues() {
  return (
    <main className="container mx-auto px-4 py-24">
      <Headline>{coreValues.title}</Headline>
      <div className="mt-16 space-y-24">
        {coreValues.values.map((value, index) => (
          <section key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96">
              <Image
                src={value.image.src}
                alt={value.image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display mb-6">{value.title}</h2>
              <p className="text-lg leading-relaxed">{value.description}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
} 