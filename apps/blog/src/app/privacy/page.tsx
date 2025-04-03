'use client'

import * as React from 'react'
import { privacy } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function Privacy() {
  return (
    <main className="container mx-auto px-4 py-24">
      <Headline>{privacy.title}</Headline>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-display mb-4">Responsible Party</h2>
          <div className="space-y-2">
            <p>{privacy.content.responsible.company}</p>
            <p>{privacy.content.responsible.address}</p>
            <p>CEO: {privacy.content.responsible.ceo}</p>
            <p>Email: {privacy.content.responsible.contact.email}</p>
            <p>Phone: {privacy.content.responsible.contact.phone}</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">Data Collection</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display mb-2">{privacy.content.dataCollection.website.title}</h3>
              <p className="mb-4">{privacy.content.dataCollection.website.description}</p>
              <ul className="list-disc pl-6 space-y-2">
                {privacy.content.dataCollection.website.data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-display mb-2">{privacy.content.dataCollection.contact.title}</h3>
              <p>{privacy.content.dataCollection.contact.description}</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{privacy.content.cookies.title}</h2>
          <p>{privacy.content.cookies.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{privacy.content.rights.title}</h2>
          <p className="mb-4">{privacy.content.rights.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {privacy.content.rights.rights.map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
} 