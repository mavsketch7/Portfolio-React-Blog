import Image from 'next/image'
import Link from 'next/link'

const DESCRIPTION_LIMIT = 140

function truncateDescription(text, limit = DESCRIPTION_LIMIT) {
  const plainText = text.replace(/\*\*/g, '')
  if (plainText.length <= limit) return plainText
  return `${plainText.slice(0, limit).trimEnd()}…`
}

export default function ProjectCard({ project }) {
  const { id, title, description, featuredImage, liveUrl, stack } = project
  const hasLiveUrl = Boolean(liveUrl) && liveUrl !== '#'

  return (
    <div className="card-surface flex h-full flex-col gap-3 rounded-lg overflow-hidden border border-[var(--foreground)]">
      <div className="relative w-full h-64 shrink-0">
        <Image
          src={featuredImage}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-1 flex-col gap-4">
        <h3 className="font-title text-lg font-[700]"> {title} </h3>
        <p className="text-sm text-[var(--color-text)]">
          {truncateDescription(description)}
        </p>
        <div className="flex gap-2 flex-wrap">
          {stack.map((stackItem) => (
            <span
              key={stackItem}
              className="text-xs bg-[var(--color-accent)] text-white px-2 py-1 rounded-2xl"
            >
              {stackItem}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {hasLiveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm w-1/2 border border-[var(--foreground)] px-3 py-1 rounded hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 text-center"
            >
              Ver livepreview
            </a>
          )}
          <Link
            href={`/proyectos/${id}`}
            className={`text-sm border border-[var(--foreground)] px-3 py-1 rounded hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 text-center ${
              hasLiveUrl ? 'w-1/2' : 'w-full'
            }`}
          >
            Más info
          </Link>
        </div>
      </div>
    </div>
  )
}