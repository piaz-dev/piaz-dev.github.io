import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  title_fa?: string
  date: string
  excerpt: string
  excerpt_fa?: string
  content: string
  author?: string
  tags?: string[]
  language: "en" | "fa"
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        title_fa: data.title_fa,
        date: data.date,
        excerpt: data.excerpt,
        excerpt_fa: data.excerpt_fa,
        content,
        author: data.author,
        tags: data.tags,
        language: data.language || "en",
      } as BlogPost
    })

  // Sort posts by date
  return allPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      title_fa: data.title_fa,
      date: data.date,
      excerpt: data.excerpt,
      excerpt_fa: data.excerpt_fa,
      content,
      author: data.author,
      tags: data.tags,
      language: data.language || "en",
    } as BlogPost
  } catch (error) {
    return undefined
  }
}
