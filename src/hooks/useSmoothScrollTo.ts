import { useCallback } from 'react'
import { useLenis } from 'lenis/react'

/** easeInOutExpo — slow start, long glide, soft landing. */
const easeInOutExpo = (t: number) =>
  t === 0
    ? 0
    : t === 1
      ? 1
      : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2

/** Height of the fixed navbar, so section headings don't hide underneath it. */
const NAV_OFFSET = -96

/**
 * Smoothly scrolls to an element id with a consistent, unhurried motion.
 * Falls back to native smooth scrolling when Lenis isn't ready, and to an
 * instant jump when the user prefers reduced motion.
 */
export function useSmoothScrollTo() {
  const lenis = useLenis()

  return useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (!el) return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET)
        return
      }

      if (lenis) {
        lenis.scrollTo(el, {
          offset: NAV_OFFSET,
          duration: 1.7,
          easing: easeInOutExpo,
        })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [lenis]
  )
}
