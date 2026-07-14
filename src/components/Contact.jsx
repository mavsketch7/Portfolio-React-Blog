import Image from 'next/image'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import Reveal from '@/components/Reveal'

export default function Contact() {
  return (
    <div
      id="contacto"
      className="flex flex-col items-center justify-center gap-6 w-[90vw] min-h-[50vh] rounded-[16px] text-[var(--color-text)] relative mt-16 md:mt-28"
    >
      <Image
        src="/my-durves-image-3-1.webp"
        alt="Contact"
        fill
        loading="lazy"
        className="object-cover object-top opacity-90 -z-10"
      />
      <div className="absolute inset-0 -z-11 bg-linear-[260deg] from-[#02040B] to-[var(--foreground)] opacity-100 rounded-[16px]" />
      <Reveal
        as="h2"
        className="font-title text-2xl text-white font-extrabold md:text-5xl lg:text-6xl "
      >
        #Contáctame
      </Reveal>
      <Reveal delay={120}>
        <a
          href="mailto:mavsketch@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3a3a3a] text-white text-sm rounded-full px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-center"
        >
          Cuentame tu idea
        </a>
      </Reveal>
      <Reveal delay={220}>
        <Logo className="w-32 h-12 text-white" />
      </Reveal>
    </div>
  )
}
