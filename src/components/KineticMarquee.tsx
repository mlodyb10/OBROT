interface KineticMarqueeProps {
  items?: string[]
}

const DEFAULT_ITEMS = [
  'ESPRESSO',
  'FLAT WHITE',
  'MATCHA',
  'FILTER',
  'CORTADO',
  'WYPIEKI',
  'COLD BREW',
  'CAPPUCCINO',
]

/**
 * Horizontal auto-scrolling text band in brand cobalt. Reinforces the
 * kinetic "rotation/turnover" identity. Content duplicated so the
 * translateX(-50%) loop is seamless.
 */
export function KineticMarquee({ items = DEFAULT_ITEMS }: KineticMarqueeProps) {
  const group = (
    <span className="marquee__item">
      {items.map((item) => (
        <span key={item}>
          {item}
          <span className="marquee__dot"> · </span>
        </span>
      ))}
    </span>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  )
}
