'use client'

import { Navigation as UINavigation } from '@sen/ui'

const menuItems = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  return <UINavigation title="sen.co" menuItems={menuItems} />
} 