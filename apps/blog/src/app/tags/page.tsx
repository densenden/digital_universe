import { posts } from '../../content/blog/posts'

export default function TagsPage() {
  const tags = Array.from(new Set(posts.map((post) => post.tag)))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">Tags</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our articles by topic
          </p>
        </div>
      </section>

      {/* Tags Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tags.map((tag) => (
              <div key={tag} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-display text-senDeepBlue mb-4">
                  <a href={`/tags/${tag.toLowerCase()}`} className="hover:text-senMidnight">
                    {tag}
                  </a>
                </h2>
                <p className="text-senSlate">
                  {posts.filter((post) => post.tag === tag).length} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 