'use client'

import * as React from 'react'
import { privacy } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We take the protection of your personal data seriously.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Data Protection Overview</h2>
            <p>
              This privacy policy explains what information we collect when you use our website and services, 
              and how we use it. We take your privacy very seriously and treat your personal data 
              confidentially in accordance with statutory data protection regulations and this privacy policy.
            </p>

            <h2>2. Data Collection</h2>
            <h3>2.1 Automatically Collected Data</h3>
            <p>
              When you visit our website, some data is automatically collected for technical reasons:
            </p>
            <ul>
              <li>IP address</li>
              <li>Date and time of request</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Referring website</li>
            </ul>

            <h3>2.2 Data You Provide</h3>
            <p>
              We collect personal data that you voluntarily provide to us, such as:
            </p>
            <ul>
              <li>Name and contact information when using our contact form</li>
              <li>Email address when subscribing to our newsletter</li>
              <li>Project details when requesting our services</li>
            </ul>

            <h2>3. Purpose of Data Processing</h2>
            <p>
              We process your personal data for the following purposes:
            </p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To communicate with you about our services</li>
              <li>To send you requested information or newsletters</li>
              <li>To analyze and optimize our website</li>
              <li>To prevent abuse and ensure website security</li>
            </ul>

            <h2>4. Legal Basis</h2>
            <p>
              We process your data based on the following legal grounds:
            </p>
            <ul>
              <li>Your consent (Art. 6(1)(a) GDPR)</li>
              <li>Performance of a contract (Art. 6(1)(b) GDPR)</li>
              <li>Compliance with legal obligations (Art. 6(1)(c) GDPR)</li>
              <li>Legitimate interests (Art. 6(1)(f) GDPR)</li>
            </ul>

            <h2>5. Data Recipients</h2>
            <p>
              Your personal data may be shared with:
            </p>
            <ul>
              <li>Our employees and contractors who need access to provide our services</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>6. Data Storage Duration</h2>
            <p>
              We store personal data only as long as necessary for the purposes for which it was collected 
              or as required by law. When the purpose ceases to exist or upon expiry of statutory storage 
              periods, the data is routinely deleted.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Under the GDPR, you have the following rights:
            </p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2>8. Contact for Privacy Matters</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your personal data, 
              please contact our data protection officer:
            </p>
            <p>
              Denis Kreuzer<br />
              SEN.CO GmbH<br />
              Paradiesgasse 53<br />
              60594 Frankfurt am Main<br />
              Email: privacy@sen.studio
            </p>

            <h2>9. Updates to this Policy</h2>
            <p>
              We may update this privacy policy from time to time. The current version will always be 
              available on our website.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: March 5, 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 