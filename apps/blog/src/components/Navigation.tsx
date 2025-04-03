import { Menu } from '@sen/ui'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Tags', href: '/tags' },
  { label: 'About', href: '/about' },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-display text-white">SEN.CO Blog</span>
            </a>
          </div>
          <Menu items={menuItems} />
        </div>
      </div>
    </nav>
  )
} 