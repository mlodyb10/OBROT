import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'

type Phase = 'idle' | 'covering' | 'revealing'

/** Must match the curtain animation durations in global.css. */
const COVER_MS = 550
const REVEAL_MS = 550

const TransitionContext = createContext<(to: string) => void>(() => {})

/** Navigate with the cobalt curtain wipe. Use instead of <Link> for route changes. */
export function useRouteTransition() {
  return useContext(TransitionContext)
}

/**
 * Wraps route changes in a two-part curtain: a cobalt panel wipes up to cover
 * the page, the route swaps behind it, then it wipes away revealing the new
 * page. Users who prefer reduced motion just navigate straight there.
 *
 * Phases advance on timers rather than animationend, because CSS animations
 * (and their events) are paused in background tabs — an event-driven curtain
 * could leave a visitor stuck under a full-screen cobalt panel.
 */
export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [phase, setPhase] = useState<Phase>('idle')
  const pending = useRef<string | null>(null)
  const timers = useRef<number[]>([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const go = useCallback(
    (to: string) => {
      if (to === location.pathname || phase !== 'idle') return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        navigate(to)
        return
      }

      pending.current = to
      setPhase('covering')

      timers.current.push(
        window.setTimeout(() => {
          if (pending.current) navigate(pending.current)
          pending.current = null
          setPhase('revealing')

          timers.current.push(window.setTimeout(() => setPhase('idle'), REVEAL_MS))
        }, COVER_MS)
      )
    },
    [location.pathname, navigate, phase]
  )

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div className={`curtain curtain--${phase}`} aria-hidden="true">
        <Logo className="curtain__mark" />
      </div>
    </TransitionContext.Provider>
  )
}
