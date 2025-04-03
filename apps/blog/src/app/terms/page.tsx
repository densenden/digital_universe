'use client'

import * as React from 'react'
import { terms } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function Terms() {
  return (
    <main className="container mx-auto px-4 py-24">
      <Headline>{terms.title}</Headline>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.scope.title}</h2>
          <p>{terms.content.scope.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.subject.title}</h2>
          <p>{terms.content.subject.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.conclusion.title}</h2>
          <p>{terms.content.conclusion.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.payment.title}</h2>
          <p className="mb-4">{terms.content.payment.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {terms.content.payment.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <p className="mt-4">{terms.content.payment.note}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.delivery.title}</h2>
          <p>{terms.content.delivery.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.cancellation.title}</h2>
          <p>{terms.content.cancellation.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.liability.title}</h2>
          <p>{terms.content.liability.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.rights.title}</h2>
          <p>{terms.content.rights.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-display mb-4">{terms.content.jurisdiction.title}</h2>
          <p>{terms.content.jurisdiction.description}</p>
        </section>
      </div>
    </main>
  )
} 