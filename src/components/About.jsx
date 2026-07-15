import Image from 'next/image'
import { stacks } from '@/data/stacks'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <div className="flex flex-col min-[715px]:flex-row items-center justify-center gap-6 w-[90vw] min-h-[90vh] text-[var(--color-text)] relative py-10 min-[715px]:py-0">
      <Reveal x={-56} y={0} duration={900}>
        <Image
          src="/manu-alba-webdesigner-freelance.webp"
          alt="Manu Alba"
          width={400}
          height={400}
          loading="lazy"
          className="rounded-[10px] h-auto sm:w-[300px]  "
        />
      </Reveal>
      <Reveal delay={150} className="flex flex-col gap-6 max-w-[600px]">
        <h2 className="text-[var(--color-text)] text-lg">SOBRE MI</h2>
        <h3 className="font-title text-lg font-[700] lg:text-5xl mb-8 text-[var(--color-header)]">
          Hola, Soy<br></br>Manu Alba
        </h3>
        <p className="text-md text-[var(--color-text)]">
          Soy web designer y developer freelance especializado en crear sitios
          web que no solo se ven bien, sino que trabajan para tu negocio. Con
          más de 3 años de experiencia, he trabajado con comercios locales,
          estudios creativos y empresas técnicas. Tengo formación en
          Administración de Empresas, lo que me permite entender tus proyectos
          desde el lado del negocio, no solo desde el diseño. Certificación
          Cambridge B2 de inglés.
        </p>
        <div>
          {stacks.map(({ name }) => (
            <span
              key={name}
              className="text-xs border border-[var(--foreground)] text-[var(--foreground)] px-2 py-1  mr-2 mb-2 inline-block uppercase hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 text-center"
            >
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
