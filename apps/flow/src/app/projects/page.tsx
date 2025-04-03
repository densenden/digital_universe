import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our portfolio of successful digital projects and innovative solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display text-senDeepBlue">{project.title}</h3>
                    <span className="px-4 py-1 bg-senClay/10 text-senClay rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-senSlate mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-senSlate rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-display text-senDeepBlue mb-2">{stat.value}</div>
                <div className="text-senSlate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: 'E-Commerce Platform',
    image: '/images/project1.jpg',
    category: 'E-Commerce',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    title: 'Mobile Banking App',
    image: '/images/project2.jpg',
    category: 'FinTech',
    description: 'Secure and intuitive mobile banking application with real-time transactions.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Healthcare Portal',
    image: '/images/project3.jpg',
    category: 'Healthcare',
    description: 'Digital healthcare platform connecting patients with healthcare providers.',
    technologies: ['Vue.js', 'Python', 'Django', 'Docker'],
  },
  {
    title: 'AI-Powered Analytics',
    image: '/images/project4.jpg',
    category: 'Analytics',
    description: 'Business intelligence platform with advanced AI-powered analytics and reporting.',
    technologies: ['Python', 'TensorFlow', 'React', 'GraphQL'],
  },
]

const stats = [
  {
    value: '50+',
    label: 'Projects Completed',
  },
  {
    value: '30+',
    label: 'Happy Clients',
  },
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
  },
] 