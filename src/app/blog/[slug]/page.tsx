import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="w-full min-h-screen flex flex-col px-6 lg:px-12 py-6 text-[var(--color-text)]">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Ir al inicio">
          <Logo className="w-24 h-8 text-[var(--color-header)]" />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/blog"
            className="flex items-center gap-2 text-base font-extrabold text-[var(--color-header)] hover:underline"
          >
            ← Go Back
          </Link>
        </div>
      </div>

      <Reveal
        as="main"
        trigger="load"
        className="mt-10 max-w-2xl mx-auto w-full flex-1"
      >
        <article>
          <time
            dateTime={post.date}
            className="text-xs uppercase text-[var(--color-text)]"
          >
            {new Date(post.date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <h1 className="font-title text-2xl lg:text-3xl font-extrabold text-[var(--color-header)] mt-2 mb-6">
            {post.title}
          </h1>

          {post.cover && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={post.cover}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <ul className="flex gap-2 flex-wrap mb-6">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs bg-[var(--color-accent)] text-white px-2 py-1 rounded-2xl"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div
            className="prose-blog text-sm leading-relaxed flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </Reveal>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | Manu Alba`,
    description: post.excerpt,
  }
}
