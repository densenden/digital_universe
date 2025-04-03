'use client'

import * as React from 'react'
import { imprint } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function Imprint() {
  return (
    <main className="container mx-auto px-4 py-24">
      <Headline>{imprint.title}</Headline>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-display mb-4">Company Information</h2>
          <div className="space-y-2">
            <p>{imprint.content.company.name}</p>
            <p>{imprint.content.company.address}</p>
            <p>CEO: {imprint.content.company.ceo}</p>
            <p>Email: {imprint.content.company.contact.email}</p>
            <p>Phone: {imprint.content.company.contact.phone}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">Register Information</h2>
          <div className="space-y-2">
            <p>Register Court: {imprint.content.register.court}</p>
            <p>Register Number: {imprint.content.register.number}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">VAT Information</h2>
          <p>VAT ID: {imprint.content.vat.id}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">Disclaimer</h2>
          <div className="space-y-4">
            <p>{imprint.content.disclaimer.content}</p>
            <p>{imprint.content.disclaimer.links}</p>
          </div>
        </section>
      </div>
    </main>
  )
} 