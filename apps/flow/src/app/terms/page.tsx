'use client'

import * as React from 'react'
import { terms } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Terms and Conditions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. General Terms</h2>
            <p>
              By accessing and using the services provided by SEN.CO ("we," "our," or "us"), you agree to comply 
              with and be bound by these Terms and Conditions. If you do not agree with these terms, please do 
              not use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              We provide digital design, development, and consulting services. The specific scope, deliverables, 
              and terms of each project will be defined in a separate agreement or statement of work.
            </p>

            <h2>3. Project Process</h2>
            <p>
              3.1. All projects begin with a discovery phase to understand requirements and objectives.<br />
              3.2. We will provide regular updates and maintain clear communication throughout the project.<br />
              3.3. Changes to project scope must be agreed upon in writing and may affect timeline and costs.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              4.1. Upon full payment, clients receive ownership rights to the final deliverables.<br />
              4.2. We retain ownership of pre-existing materials and generic components.<br />
              4.3. We reserve the right to include the project in our portfolio unless otherwise agreed.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              5.1. Payment schedules will be outlined in the project agreement.<br />
              5.2. Standard payment terms require a 50% deposit before work begins.<br />
              5.3. Final deliverables will be released upon receipt of full payment.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information and project details. 
              Non-disclosure agreements can be provided upon request.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Our liability is limited to the amount paid for services. We are not responsible for any 
              consequential damages or lost profits.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate the agreement with 30 days written notice. Payment for work completed 
              will be due upon termination.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Germany. Any disputes will be resolved in the courts of 
              Frankfurt am Main.
            </p>

            <h2>10. Contact</h2>
            <p>
              For any questions regarding these terms, please contact us at:<br />
              Email: sound@sen.studio<br />
              Phone: +49 155 66179807
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