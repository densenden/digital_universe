'use client'

import { Navigation as UINavigation } from '@sen/ui'

const menuItems = [
  { label: 'Articles', href: '/articles' },
  { label: 'Tags', href: '/tags' },
  { label: 'About', href: '/about' },
]

export function Navigation() {
  return <UINavigation title="studio sen blog" menuItems={menuItems} />
} 