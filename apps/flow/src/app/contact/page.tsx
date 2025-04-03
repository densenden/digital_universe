export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display text-senDeepBlue mb-6">Get in Touch</h2>
              <p className="text-senSlate mb-8">
                We're excited to hear about your project. Fill out the form below, and we'll get back to you 
                within 24 hours.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display text-senDeepBlue mb-4">Office Location</h3>
                  <p className="text-senSlate">
                    Paradiesgasse 53<br />
                    60594 Frankfurt am Main<br />
                    Germany
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display text-senDeepBlue mb-4">Contact Information</h3>
                  <p className="text-senSlate">
                    Email: sound@sen.studio<br />
                    Phone: +49 155 66179807
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-senSlate mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-senDeepBlue focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-senSlate mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-senDeepBlue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-senSlate mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-senDeepBlue focus:border-transparent"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-senSlate mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-senDeepBlue focus:border-transparent"
                    placeholder="Tell us about your project"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-senDeepBlue text-white py-3 px-6 rounded-lg hover:bg-senMidnight transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.8026387566403!2d8.686516776886817!3d50.10241791425285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea5c56f4eb9%3A0x8f4a1d1a1c8e6a0!2sParadiesgasse%2053%2C%2060594%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1709584391234!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
} 