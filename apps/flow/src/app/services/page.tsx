import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We offer comprehensive digital solutions that help businesses thrive in the modern world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display text-senDeepBlue mb-4">{service.title}</h3>
                  <p className="text-senSlate mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-6 h-6 text-senClay mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-senMidnight text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-senDeepBlue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-display">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display text-senDeepBlue mb-4">{step.title}</h3>
                <p className="text-senSlate">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: 'Digital Strategy',
    image: '/images/strategy.jpg',
    description: 'We help businesses develop comprehensive digital strategies that drive growth and innovation.',
    features: [
      'Market Analysis & Research',
      'Digital Transformation Planning',
      'Technology Stack Consulting',
      'Growth Strategy Development',
    ],
  },
  {
    title: 'Design & UX',
    image: '/images/design.jpg',
    description: 'Create beautiful, intuitive interfaces that provide exceptional user experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Brand Identity Design',
      'Prototyping & Testing',
    ],
  },
  {
    title: 'Development',
    image: '/images/development.jpg',
    description: 'Build robust, scalable applications using cutting-edge technologies.',
    features: [
      'Full-Stack Development',
      'Mobile App Development',
      'E-Commerce Solutions',
      'API Development & Integration',
    ],
  },
  {
    title: 'Digital Marketing',
    image: '/images/marketing.jpg',
    description: 'Drive growth through targeted digital marketing strategies.',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Strategy',
      'Analytics & Reporting',
    ],
  },
]

const process = [
  {
    title: 'Discovery',
    description: 'We learn about your business, goals, and challenges to create a tailored solution.',
  },
  {
    title: 'Strategy',
    description: 'Develop a comprehensive plan to achieve your objectives effectively.',
  },
  {
    title: 'Creation',
    description: 'Build and implement solutions using the latest technologies and best practices.',
  },
  {
    title: 'Optimization',
    description: 'Continuously monitor and improve performance to ensure long-term success.',
  },
] 