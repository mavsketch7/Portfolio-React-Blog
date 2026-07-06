'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [now, setNow] = useState(null)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = now
    ? now.toLocaleString('es-ES', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })
    : ''

  return (
    <footer className="flex items-center justify-between w-full px-6 py-4 text-xs text-[var(--color-text)]">
      <p>Designed by Manu Alba</p>
      <p suppressHydrationWarning>{formatted}</p>
    </footer>
  )
}
