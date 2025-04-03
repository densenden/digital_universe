'use client'

import * as React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'

const landingPages = [
  { name: 'sen.studio', href: 'https://sen.studio' },
  { name: 'about.sen.studio', href: 'https://about.sen.studio' },
  { name: 'art.sen.studio', href: 'https://art.sen.studio' },
  { name: 'blog.sen.studio', href: 'https://blog.sen.studio' },
  { name: 'booking.deniskreuzer.dk', href: 'https://booking.deniskreuzer.dk' },
  { name: 'about.deniskreuzer.dk', href: 'https://about.deniskreuzer.dk' },
  { name: 'collab.sen.studio', href: 'https://collab.sen.studio' },
  { name: 'content.sen.studio', href: 'https://content.sen.studio' },
  { name: 'design.sen.studio', href: 'https://design.sen.studio' },
  { name: 'flow.sen.studio', href: 'https://flow.sen.studio' },
  { name: 'meditation.sen.studio', href: 'https://meditation.sen.studio' },
  { name: 'mentor.deniskreuzer.dk', href: 'https://mentor.deniskreuzer.dk' },
  { name: 'model.deniskreuzer.dk', href: 'https://model.deniskreuzer.dk' },
  { name: 'shop.sen.studio', href: 'https://shop.sen.studio' },
  { name: 'startup.sen.studio', href: 'https://startup.sen.studio' },
  { name: 'web.sen.studio', href: 'https://web.sen.studio' },
  { name: 'intern.deniskreuzer.dk', href: 'https://intern.deniskreuzer.dk' }
]

export const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="col-span-1">
            <Link href="https://sen.studio" className="block mb-4">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SEN.CO UG (haftungsbeschränkt)
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Frankfurt am Main, Germany
            </p>
          </div>

          {/* Landing Pages Dropdown */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Landing Pages</h3>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? 'Close' : 'Show Landing Pages'}
              </button>
              {isOpen && (
                <div className="absolute bottom-full mb-2 left-0 z-10 w-64 bg-gray-900 rounded-md shadow-lg">
                  <div className="py-1">
                    {landingPages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-sm text-gray-400 hover:text-white">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Address */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-4">Business Address</h3>
            <address className="text-sm text-gray-400 not-italic">
              SEN.CO UG (haftungsbeschränkt)<br />
              Musterstraße 123<br />
              60311 Frankfurt am Main<br />
              Germany
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
} 