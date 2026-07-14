'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

export default function ProjectGallery({ images, title }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const showPrev = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length,
    )
  }, [images.length])

  const showNext = useCallback(() => {
    setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (selectedIndex === null) return

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') showPrev()
      else if (event.key === 'ArrowRight') showNext()
      else if (event.key === 'Escape') setSelectedIndex(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, showPrev, showNext])

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <div
            key={img}
            className="group relative w-full h-32 rounded-lg overflow-hidden border border-[var(--foreground)] cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={img}
              alt={`${title} - imagen ${index + 1}`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 45vw, 22vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {selectedIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute top-6 right-6 text-white text-4xl leading-none cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Imagen anterior"
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white text-5xl leading-none cursor-pointer p-2 hover:opacity-70 transition-opacity"
                  onClick={(event) => {
                    event.stopPropagation()
                    showPrev()
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Imagen siguiente"
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white text-5xl leading-none cursor-pointer p-2 hover:opacity-70 transition-opacity"
                  onClick={(event) => {
                    event.stopPropagation()
                    showNext()
                  }}
                >
                  ›
                </button>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
                  {selectedIndex + 1} / {images.length}
                </p>
              </>
            )}

            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={images[selectedIndex]}
                alt={`${title} - imagen ${selectedIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
