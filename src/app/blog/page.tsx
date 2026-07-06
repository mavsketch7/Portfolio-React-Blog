import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import { getAllPosts } from '@/lib/blog'
import Reveal from '@/components/Reveal'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Manu Alba',
  description:
    'Notas sobre desarrollo web, WordPress, SEO y freelance de Manu Alba.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="w-full min-h-screen flex flex-col px-6 lg:px-12 py-6 text-[var(--color-text)]">
      <div className="flex items-center justify-between">
        <Logo className="w-24 h-8 text-[var(--color-header)]" />
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-extrabold text-[var(--color-header)] hover:underline"
        >
          ← Go Back
        </Link>
      </div>

      <main className="mt-10 max-w-3xl mx-auto w-full flex-1">
        <h1 className="font-title text-2xl lg:text-4xl font-extrabold text-[var(--color-header)] mb-8 text-center">
          Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-sm">Todavía no hay entradas publicadas.</p>
        ) : (
          <ul className="flex flex-col gap-8">
            {posts.map((post, index) => (
              <Reveal key={post.slug} as="li" delay={Math.min(index * 60, 240)}>
                <article className="flex flex-col sm:flex-row gap-4 border-b border-[var(--foreground)] pb-8">
                  {post.cover && (
                    <div className="relative w-full sm:w-40 h-40 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 160px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
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
                    <h2 className="font-title text-lg font-bold text-[var(--color-header)]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm">{post.excerpt}</p>
                    {post.tags && post.tags.length > 0 && (
                      <ul className="flex gap-2 flex-wrap mt-1">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="text-xs bg-[var(--foreground)] text-white px-2 py-1 rounded-2xl"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  )
}
