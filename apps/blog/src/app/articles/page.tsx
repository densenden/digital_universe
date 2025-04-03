import { posts } from '../../content/blog/posts'

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-senMidnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display mb-6">All Articles</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our complete collection of articles
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-senDeepBlue/10 text-senDeepBlue mb-4">
                    {post.tag}
                  </span>
                  <h2 className="text-2xl font-display text-senDeepBlue mb-4">
                    <a href={`/posts/${post.slug}`} className="hover:text-senMidnight">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-senSlate mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href={`/posts/${post.slug}`}
                      className="text-senDeepBlue hover:text-senMidnight font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 