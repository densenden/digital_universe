import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We are a creative technology studio dedicated to building remarkable digital experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display text-senDeepBlue mb-6">Our Story</h2>
              <p className="text-senSlate mb-6">
                Founded in 2019, SEN.CO emerged from a vision to bridge the gap between technology and human experience. 
                We believe that great digital products should not only function flawlessly but also resonate with users 
                on a deeper level.
              </p>
              <p className="text-senSlate">
                Today, we're a team of passionate creators, developers, and strategists working together to bring 
                innovative digital solutions to life. Our approach combines cutting-edge technology with thoughtful 
                design to create experiences that matter.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about-team.jpg"
                alt="Our team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-senDeepBlue text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <div className="w-full h-full bg-senClay rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-display text-senDeepBlue mb-4">{value.title}</h3>
                <p className="text-senSlate">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-senDeepBlue text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-display text-senDeepBlue mb-2">{member.name}</h3>
                <p className="text-senClay mb-4">{member.role}</p>
                <p className="text-senSlate">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities in technology and design.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering exceptional quality in everything we create.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of working together to achieve extraordinary results.',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Denis Kreuzer',
    role: 'Founder & Creative Director',
    image: '/images/team-1.jpg',
    bio: 'With over 10 years of experience in digital design and development, Denis leads our creative vision.',
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Lead',
    image: '/images/team-2.jpg',
    bio: 'Sarah brings expertise in full-stack development and a passion for clean, efficient code.',
  },
  {
    name: 'Marcus Weber',
    role: 'Design Lead',
    image: '/images/team-3.jpg',
    bio: 'Marcus combines strategic thinking with creative excellence to deliver outstanding designs.',
  },
] 