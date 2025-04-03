import Link from 'next/link'
import { Menu } from '@sen/ui'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bodoni text-white">SEN.CO</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Menu items={menuItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 