'use client'

import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  const interval = setInterval(callback, 30000)
  return () => clearInterval(interval)
}

function getSnapshot() {
  return new Date().toLocaleString('es-ES', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function getServerSnapshot() {
  return ''
}

export default function Footer() {
  const formatted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  return (
    <footer className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between w-full px-6 py-4 text-xs text-[var(--color-text)]">
      <p>Designed by Manu Alba</p>
      <p suppressHydrationWarning>{formatted}</p>
    </footer>
  )
}
