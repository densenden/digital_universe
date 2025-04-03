'use client'

import * as React from 'react'
import { Logo } from './Logo'

interface Domain {
  name: string
  href: string
  isActive: boolean
}

interface FooterProps {
  domains: Domain[]
}

export function Footer({ domains }: FooterProps) {
  return (
    <footer className="w-full py-8 border-t border-amber-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <Logo className="w-10 h-10" />
          <div className="flex flex-wrap justify-center gap-4">
            {domains.map((domain) => (
              <a
                key={domain.name}
                href={domain.href}
                className={`text-sm hover:text-amber-500 transition-colors ${
                  domain.isActive ? 'text-amber-500' : 'text-amber-500/50'
                }`}
              >
                {domain.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 