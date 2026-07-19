/**
 * Section divider with a scroll-driven rotating mark (grinder-burr look).
 * Rotation is driven by scroll(root) in CSS, or by --scroll-progress via the
 * JS fallback. `tone` selects line color for dark vs light sections.
 */
export function Divider({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <div className="divider" style={{ color: tone === 'dark' ? 'var(--crema)' : 'var(--espresso)' }}>
      <span className="divider__line" />
      <svg className="divider__mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="22" r="2.5" fill="currentColor" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="22"
            y1="2"
            x2="22"
            y2="8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${i * 45} 22 22)`}
          />
        ))}
      </svg>
      <span className="divider__line" />
    </div>
  )
}
