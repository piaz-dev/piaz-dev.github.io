import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/config/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles and insights from the piaz.dev team",
  openGraph: {
    title: "Blog | piaz.dev",
    description: "Latest articles and insights from the piaz.dev team",
    url: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Blog</h1>
            <p className="text-lg text-muted-foreground">Insights, tutorials, and updates from the piaz.dev team</p>
          </div>

          {/* Blog Posts */}
          {posts.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors text-balance">
                        {post.title}
                      </h2>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1 rtl:rotate-180" />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      {post.author && <span>by {post.author}</span>}
                    </div>

                    <p className="text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-accent text-xs rounded-md text-accent-foreground font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
