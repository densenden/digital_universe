export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Welcome to the SEN.CO Blog - Your Portal for Digital Innovation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              At SEN.CO, we believe in the transformative power of digital technology.
              Our blog serves as a platform to share knowledge, discuss trends,
              and shape the future of the digital world.
            </p>

            <h2>Our Topics</h2>
            <p>
              We cover a wide range of topics:
            </p>
            <ul>
              <li>Digital Transformation</li>
              <li>Sustainable Technology</li>
              <li>Artificial Intelligence</li>
              <li>Future of Work</li>
              <li>Innovation and Trends</li>
            </ul>

            <h2>Our Team</h2>
            <p>
              Behind SEN.CO is a team of experts from various areas
              of the digital world. We combine technical know-how with creative
              thinking and a passion for innovation.
            </p>

            <h2>Contact</h2>
            <p>
              Have questions or suggestions? We look forward to hearing from you:
              <br />
              Email: sound@sen.studio
              <br />
              Phone: +49 155 66179807
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 