import { projectsdata } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Reveal from '@/components/Reveal'

const MAX_STAGGER_DELAY = 400

export default function Projects() {
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-[90vw]   relative ">
      <Reveal as="h2" className="text-[var(--color-text)] text-xs">
        PROYECTOS
      </Reveal>
      <Reveal
        as="h3"
        delay={80}
        className="font-title text-lg font-[700] lg:text-5xl mb-8"
      >
        # Trabajo reciente
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsdata.map((project, index) => (
          <Reveal
            key={project.id}
            delay={Math.min(index * 80, MAX_STAGGER_DELAY)}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
