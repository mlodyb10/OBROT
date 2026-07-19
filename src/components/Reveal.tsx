import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
}

/**
 * Fades + slides its children in when they enter the viewport.
 * Uses IntersectionObserver so it works in every browser (independent of
 * CSS scroll-driven animation support). Respects prefers-reduced-motion via CSS.
 */
export function Reveal({ children, as, className, delay = 0 }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={delay ? { ['--reveal-delay' as string]: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  )
}
