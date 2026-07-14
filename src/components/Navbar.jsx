import Reveal from '@/components/Reveal'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <Reveal
      as="nav"
      y={-16}
      duration={500}
      className="fixed top-0 right-0 p-6 flex items-center z-50"
    >
      <ThemeToggle />
    </Reveal>
  )
}
