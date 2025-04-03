'use client'

import * as React from 'react'
import { imprint } from '@sen/shared-content'
import { Headline } from '@sen/ui'

export default function ImprintPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Legal Notice</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Information according to § 5 TMG
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Company Information</h2>
            <p>
              SEN.CO GmbH<br />
              Paradiesgasse 53<br />
              60594 Frankfurt am Main<br />
              Germany
            </p>

            <h2>Contact</h2>
            <p>
              Phone: +49 155 66179807<br />
              Email: sound@sen.studio<br />
              Website: www.sen.studio
            </p>

            <h2>Management</h2>
            <p>
              Denis Kreuzer<br />
              Managing Director
            </p>

            <h2>Registration</h2>
            <p>
              Commercial Register: Amtsgericht Frankfurt am Main<br />
              Registration Number: HRB 123456<br />
              VAT ID: DE123456789
            </p>

            <h2>Responsible for Content (§ 55 Abs. 2 RStV)</h2>
            <p>
              Denis Kreuzer<br />
              Paradiesgasse 53<br />
              60594 Frankfurt am Main<br />
              Germany
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS): 
              https://ec.europa.eu/consumers/odr<br />
              Our email address can be found above in this legal notice.
            </p>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a 
              consumer arbitration board.
            </p>

            <h2>Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages according to § 7 
              paragraph 1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated to monitor 
              transmitted or stored third-party information or to investigate circumstances that indicate 
              illegal activity.
            </p>

            <h2>Liability for Links</h2>
            <p>
              Our offer contains links to external websites of third parties, on whose contents we have no 
              influence. Therefore, we cannot assume any liability for these external contents. The respective 
              provider or operator of the pages is always responsible for the content of the linked pages.
            </p>

            <h2>Copyright</h2>
            <p>
              The contents and works created by the site operators on these pages are subject to German 
              copyright law. Duplication, processing, distribution, or any form of commercialization of such 
              material beyond the scope of the copyright law shall require the prior written consent of its 
              respective author or creator.
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