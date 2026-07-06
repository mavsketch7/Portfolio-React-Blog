import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import Reveal from '@/components/Reveal'

const PREVIEW_COUNT = 3

export default function Blog() {
  const posts = getAllPosts().slice(0, PREVIEW_COUNT)

  if (posts.length === 0) return null

  return (
    <div className="flex flex-col items-start justify-center gap-2 w-[90vw] relative">
      <Reveal as="h2" className="text-[var(--color-text)] text-xs">
        BLOG
      </Reveal>
      <Reveal
        as="h3"
        delay={80}
        className="font-title text-lg font-[700] lg:text-5xl mb-8"
      >
        # Últimas entradas
      </Reveal>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {posts.map((post, index) => (
          <Reveal key={post.slug} as="li" delay={Math.min(index * 80, 240)}>
            <article className="flex flex-col gap-3 rounded-lg overflow-hidden border border-[var(--foreground)] h-full">
              {post.cover && (
                <div className="relative w-full h-40">
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 p-4">
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
                <h4 className="font-title text-lg font-[700]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="text-sm text-[var(--color-text)]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Link
        href="/blog"
        className="text-sm border border-[var(--foreground)] px-4 py-2 rounded hover:bg-[var(--foreground)] hover:text-white transition-colors duration-300 mt-4"
      >
        Ver todas las entradas
      </Link>
    </div>
  )
}
