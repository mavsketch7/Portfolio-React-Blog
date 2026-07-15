import Image from 'next/image'
import Logo from '@/assets/manualbawebdesigner-logo.svg'
import { stacks } from '@/data/stacks'
import { ICON_SIZE } from '@/data/stacks'
import Reveal from '@/components/Reveal'

export default function Hero() {
  const stackItems = stacks.filter((item) => item.category === 'stack')
  const cmsItems = stacks.filter((item) => item.category === 'cms')

  return (
    <div className="flex flex-col items-start justify-center gap-14 w-[90vw] min-h-[90vh] text-[var(--color-text)] relative ">
      <Image
        src="/hero-bg-sized.webp"
        alt="Hero background"
        fill
        priority
        fetchPriority="high"
        quality={60}
        sizes="100vw"
        className="-z-10 object-fit opacity-70"
      />
      <Reveal trigger="load" duration={800}>
        <Logo className="w-32 h-32 text-[var(--color-header)]" />
        <h1 className="font-title text-4xl font-extrabold md:text-5xl lg:text-6xl">
          <span className="block font-sans font-light uppercase text-lg text-[var(--color-header)]">
            Web Designer - Freelance
          </span>
          Manu Alba
        </h1>
      </Reveal>
      <Reveal
        trigger="load"
        delay={150}
        duration={800}
        className="flex flex-col gap-6  md:flex-row md:gap-20 font-sans font-light text-[var(--color-text)]  origin-left"
      >
        <div className="flex items-center gap-4 md:gap-7">
          <span className="[writing-mode:vertical-rl] rotate-180">stacks</span>
          <div className="flex gap-4 md:gap-7">
            {stackItems.map(({ name, icon: Icon, color }) => (
              <Icon
                key={name}
                className={ICON_SIZE}
                style={{ color }}
                aria-label={name}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-7">
          <span className="[writing-mode:vertical-rl] rotate-180">CMS</span>
          <div className="flex gap-4 md:gap-7">
            {cmsItems.map(({ name, icon: Icon, color }) => (
              <Icon
                key={name}
                className={ICON_SIZE}
                style={{ color }}
                aria-label={name}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
