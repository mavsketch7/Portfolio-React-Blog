import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags?: string[]
}

export type BlogPost = BlogPostMeta & {
  contentHtml: string
}

function readSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getAllPosts(): BlogPostMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        cover: data.cover,
        tags: data.tags,
      }
    })
    .filter((post) => Boolean(post.title && post.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    cover: data.cover,
    tags: data.tags,
    contentHtml: marked.parse(content, { async: false }),
  }
}
