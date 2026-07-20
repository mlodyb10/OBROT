import type { ReactNode } from 'react'
import { useRouteTransition } from './RouteTransition'

interface TransitionLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/**
 * Anchor that plays the curtain transition instead of navigating instantly.
 * Keeps a real hash href so middle-click / open-in-new-tab still work.
 */
export function TransitionLink({ to, children, className }: TransitionLinkProps) {
  const go = useRouteTransition()

  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        go(to)
      }}
    >
      {children}
    </a>
  )
}
