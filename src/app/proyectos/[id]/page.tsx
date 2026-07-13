import { projectsdata } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import Reveal from '@/components/Reveal'
import ProjectGallery from '@/components/ProjectGallery'
import Footer from '@/components/Footer'

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
    <div className="w-full flex flex-col px-6 lg:px-12 py-6 text-[var(--color-text)] lg:h-screen lg:overflow-hidden">
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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:min-h-0">
        {/* COLUMNA IZQUIERDA */}
        <Reveal
          x={-56}
          y={0}
          className="flex flex-col items-start gap-6 lg:min-h-0"
        >
          <div className="flex items-center gap-4">
            <h1 className="font-title text-2xl lg:text-3xl font-extrabold text-[var(--color-header)] leading-tight">
              {title}
            </h1>
            <span className="bg-[var(--color-header)] text-white text-xs uppercase tracking-wide rounded-full px-4 py-2 whitespace-nowrap">
              ⚙ {type}
            </span>
          </div>

          <div className="relative w-full aspect-80/41 rounded-lg overflow-hidden">
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
              <svg
                viewBox="0 0 352 512"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z" />
              </svg>
              Ver proyecto
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
          className="flex flex-col items-start gap-4 lg:min-h-0 lg:overflow-y-auto"
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
              <ProjectGallery images={gallery} title={title} />
            </div>
          )}
        </Reveal>
      </div>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return projectsdata.map((project) => ({
    id: project.id,
  }))
}
