import React from 'react'

interface NavigationItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-serif">Digital Universe</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 