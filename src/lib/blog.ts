import { apiFetch } from '@/lib/api/client'

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags?: string[]
}

export type BlogPost = BlogPostMeta & {
  body: string
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  return apiFetch<BlogPostMeta[]>('/posts', { tag: 'posts' })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await apiFetch<BlogPost>(`/posts/${slug}`, { tag: 'posts' })
  } catch {
    return null
  }
}
