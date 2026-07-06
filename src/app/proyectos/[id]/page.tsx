import { projectsdata } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import Reveal from '@/components/Reveal'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projectsdata.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const {
    title,
    type,
    stack,
    featuredImage,
    gallery,
    description,
    funFact,
    liveUrl,
    githubUrl,
  } = project

  const hasLiveLink = liveUrl && liveUrl !== '#'
  const projectLink = hasLiveLink ? liveUrl : githubUrl

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col px-6 lg:px-12 py-6 text-[var(--color-text)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Logo className="w-24 h-8 text-[var(--color-header)]" />
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-extrabold text-[var(--color-header)] hover:underline"
        >
          ← Go Back
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0 mt-6">
        {/* COLUMNA IZQUIERDA */}
        <Reveal x={-56} y={0} className="flex flex-col items-start gap-4 min-h-0">
          <div className="flex items-center gap-4">
            <h1 className="font-title text-2xl lg:text-3xl font-extrabold text-[var(--color-header)] leading-tight">
              {title}
            </h1>
            <span className="bg-[var(--color-header)] text-white text-xs uppercase tracking-wide rounded-full px-4 py-2 whitespace-nowrap">
              ⚙ {type}
            </span>
          </div>

          <div className="relative w-full flex-1 min-h-0 rounded-lg overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-2 bg-[var(--color-header)] text-white text-sm rounded-full px-6 py-3 hover:opacity-90 transition-opacity duration-300"
            >
              👉 Ver proyecto
            </a>
          )}

          <p className="text-sm italic">{stack.join(', ')}</p>

          {funFact && (
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-title text-lg font-bold text-[var(--color-header)]">
                Dato curioso
              </h2>
              <div className="flex items-center gap-3 border border-[var(--color-header)] rounded-lg px-4 py-3 text-sm">
                💡 {funFact}
              </div>
            </div>
          )}
        </Reveal>

        {/* COLUMNA DERECHA */}
        <Reveal
          x={56}
          y={0}
          delay={120}
          className="flex flex-col items-start gap-4 min-h-0 overflow-y-auto"
        >
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-title text-xl font-bold text-[var(--color-header)]">
              Más detalles
            </h2>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>

          {gallery.length > 0 && (
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-title text-xl font-bold text-[var(--color-header)]">
                Galería
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {gallery.map((img, index) => (
                  <div
                    key={img}
                    className="relative w-full h-32 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${title} - imagen ${index + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return projectsdata.map((project) => ({
    id: project.id,
  }))
}
