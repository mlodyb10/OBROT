import { useEffect } from 'react'

/**
 * Toggles a `no-scroll-timeline` class on <html> when the browser lacks
 * CSS scroll-driven animation support (currently Firefox without the flag).
 * fallback.css + useScrollProgress then drive the kinetic bits via JS.
 */
export function useScrollTimelineSupport() {
  useEffect(() => {
    const supported =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()')

    document.documentElement.classList.toggle('no-scroll-timeline', !supported)
  }, [])
}
