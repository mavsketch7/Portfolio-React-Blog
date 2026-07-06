import Link from 'next/link'

export default function NavbarProjects() {
  return (
    <nav className="fixed top-0 right-0 p-6 flex gap-4 z-50">
      <Link href="/">
        <Image
          src="/public/manualbawebdesigner-logo.svg"
          alt="logo"
          width={20}
          height={20}
          className="logo"
        />
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 text-red hover:opacity-75"
      >
        <span>←</span>
        <span>Go Back</span>
      </Link>
    </nav>
  )
}
