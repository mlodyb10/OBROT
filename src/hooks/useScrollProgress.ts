import { useEffect } from 'react'

/**
 * JS fallback for browsers without CSS scroll-driven animations.
 * Writes overall page scroll progress (0..1) to `--scroll-progress` on <html>,
 * which fallback.css maps onto the progress bar and rotating dividers.
 * No-op when scroll timelines are supported.
 */
export function useScrollProgress() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('no-scroll-timeline')) return

    let rafId = 0
    let ticking = false

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      document.documentElement.style.setProperty('--scroll-progress', p.toFixed(4))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
