import { useEffect, type RefObject } from 'react'
import { useLocation } from 'react-router-dom'
import type { LenisRef } from 'lenis/react'

/**
 * Resets scroll to the top on every route change so the Menu subpage (and
 * back-navigation) always starts at the top.
 *
 * Two things fight this:
 *  - the browser restores the previous offset on reload / direct links
 *    (hence scrollRestoration = 'manual');
 *  - Lenis re-clamps its own position once the new route's ResizeObserver
 *    fires. That lands *after* a naive reset, so navigating from a long page
 *    to the shorter Menu left the user mid-page. We therefore resize Lenis
 *    explicitly and re-apply the reset across the next few frames.
 */
export function ScrollToTopOnNav({ lenisRef }: { lenisRef: RefObject<LenisRef | null> }) {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    let frame = 0
    let attempts = 0

    const reset = () => {
      const lenis = lenisRef.current?.lenis
      if (lenis) {
        lenis.resize()
        lenis.scrollTo(0, { immediate: true, force: true })
      } else {
        window.scrollTo(0, 0)
      }
      if (++attempts < 4) frame = requestAnimationFrame(reset)
    }

    reset()
    return () => cancelAnimationFrame(frame)
  }, [pathname, lenisRef])

  return null
}
