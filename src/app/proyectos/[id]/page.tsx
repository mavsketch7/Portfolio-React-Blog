import ReactMarkdown from 'react-markdown'
import { projectsdata } from '@/data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import Reveal from '@/components/Reveal'
import ProjectGallery from '@/components/ProjectGallery'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

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
        <Link href="/" aria-label="Ir al inicio">
          <Logo className="w-24 h-8 text-[var(--color-header)]" />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-[var(--color-header)] hover:underline"
          >
            🢀 Go Back
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:min-h-0">
        {/* COLUMNA IZQUIERDA */}
        <Reveal
          x={-56}
          y={0}
          className="flex flex-col items-start justify-center gap-6 lg:min-h-0"
        >
          <div className="flex items-center gap-4">
            <h1 className="font-title text-2xl lg:text-[3rem] font-extrabold text-[var(--color-header)] leading-tight">
              {title}
            </h1>
            <span className="bg-[var(--color-accent)] text-white text-xs uppercase tracking-wide rounded-full px-4 py-2 whitespace-nowrap">
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
              className="w-fit flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm rounded-full px-6 py-3 hover:opacity-90 transition-opacity duration-300"
            >
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-white shrink-0"
              >
                <path d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z" />
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
          className="flex flex-col justify-center gap-8 w-full lg:min-h-0 lg:overflow-y-auto"
        >
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-title text-xl font-bold text-[var(--color-header)]">
              Más detalles
            </h2>
            <div className="prose-blog text-lg space-y-8 leading-relaxed">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
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
