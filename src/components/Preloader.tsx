import { useEffect, useRef, useState } from 'react'

/** Minimum time the loader stays up, so it reads as intentional, not a flash. */
const MIN_DURATION = 1500
/** Must match the .preloader transform transition in global.css. */
const EXIT_DURATION = 900

/**
 * First-load screen: a spinning cobalt mark, the OBRÓT wordmark and a counter
 * winding up to 100, then the panel lifts away to reveal the hero.
 * Shown once per page load (not on route changes).
 *
 * Timers — not rAF or transitionend — drive the lifecycle: browsers pause both
 * in background tabs, which would otherwise trap a visitor who opened the site
 * in a new tab behind a loading screen forever. rAF only smooths the counter.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const doneRef = useRef(false)

  // Counter animation (cosmetic only).
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setProgress(100)
      return
    }

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / MIN_DURATION)
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Lifecycle: always resolves, even with no frames painted.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hold = reduced ? 0 : MIN_DURATION
    const exit = reduced ? 0 : EXIT_DURATION

    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      onDone()
    }

    const holdTimer = window.setTimeout(() => {
      setProgress(100)
      setLeaving(true)
      window.setTimeout(finish, exit)
    }, hold)

    return () => window.clearTimeout(holdTimer)
  }, [onDone])

  return (
    <div
      className={`preloader${leaving ? ' preloader--leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Ładowanie strony"
    >
      <div className="preloader__inner">
        <svg className="preloader__mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="20" stroke="var(--cobalt)" strokeWidth="4" />
          <circle cx="32" cy="32" r="6" fill="var(--cobalt)" />
          <path
            d="M32 6 A26 26 0 0 1 58 32"
            stroke="var(--cobalt)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <span className="preloader__word">OBRÓT</span>
        <span className="preloader__tag">Specialty espresso bar · Katowice</span>

        <div className="preloader__bar">
          <span className="preloader__bar-fill" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <span className="preloader__count">{progress}</span>
      </div>
    </div>
  )
}
