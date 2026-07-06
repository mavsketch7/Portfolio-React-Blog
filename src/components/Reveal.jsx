'use client'

import { useRef, useState, useEffect, useSyncExternalStore } from 'react'

const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'
const REDUCE_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeToMotionPreference(callback) {
  const mq = window.matchMedia(REDUCE_MOTION_QUERY)
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getMode() {
  if (window.matchMedia(REDUCE_MOTION_QUERY).matches) return 'static'
  const supportsScrollTimeline =
    typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')
  return supportsScrollTimeline ? 'scroll' : 'fallback'
}

function getServerMode() {
  return 'pending'
}

/**
 * Scroll-reveal wrapper, performance-first, no animation library.
 *
 * Primary path: native CSS scroll-driven animation
 * (`animation-timeline: view()`). Progress is tied directly to the
 * element's position in the viewport and runs entirely on the
 * compositor thread — no scroll listeners, no per-frame JS, and it's
 * naturally reversible (scrolling back up plays it backwards).
 *
 * Fallback path (browsers without scroll-timeline support): a
 * one-shot IntersectionObserver + CSS transition, same as before.
 *
 * Both paths only ever touch `opacity` + `transform`, respect
 * `prefers-reduced-motion`, and degrade to fully visible content if
 * JS never runs (see the `.reveal` noscript rule in layout.tsx).
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  duration = 900,
  x = 0,
  y = 48,
  trigger = 'scroll', // 'scroll' (default) | 'load' — plays once on mount, ignores scroll position
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const mode = useSyncExternalStore(
    subscribeToMotionPreference,
    getMode,
    getServerMode,
  )

  useEffect(() => {
    if (trigger !== 'load' || mode === 'pending' || mode === 'static') return
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [trigger, mode])

  useEffect(() => {
    if (trigger !== 'scroll' || mode !== 'fallback') return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -20% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [trigger, mode])

  if (trigger === 'scroll' && mode === 'scroll') {
    return (
      <Tag
        ref={ref}
        className={`reveal reveal-scroll ${className}`}
        style={{ '--reveal-x': `${x}px`, '--reveal-y': `${y}px` }}
        {...props}
      >
        {children}
      </Tag>
    )
  }

  const active = mode === 'static' || visible

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? 'translate3d(0,0,0)'
          : `translate3d(${x}px, ${y}px, 0)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: EASING,
        transitionDelay: `${delay}ms`,
        willChange: active ? 'auto' : 'opacity, transform',
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
