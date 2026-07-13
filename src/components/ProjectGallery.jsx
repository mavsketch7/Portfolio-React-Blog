'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

export default function ProjectGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <div
            key={img}
            className="group relative w-full h-32 rounded-lg overflow-hidden border border-[var(--foreground)] cursor-pointer"
            onClick={() => setSelectedImage(img)}
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

      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute top-6 right-6 text-white text-4xl leading-none cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={selectedImage}
                alt={title}
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
