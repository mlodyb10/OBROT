/**
 * Circular rotating wordmark — the core "obrót" (rotation) motif.
 * Text runs around a ring via SVG <textPath>; the ring spins continuously
 * (CSS `spin`, works everywhere). Center holds a small rotation glyph.
 */
export function RotatingSeal() {
  const text = 'OBRÓT · SPECIALTY COFFEE · KATOWICE · EST. 2025 · '

  return (
    <div className="seal" aria-hidden="true">
      <svg className="seal__ring" viewBox="0 0 200 200">
        <defs>
          <path id="sealPath" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text>
          <textPath href="#sealPath" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      <div className="seal__center">
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="20" stroke="var(--cobalt)" strokeWidth="4" />
          <circle cx="32" cy="32" r="6" fill="var(--cobalt)" />
          <path
            d="M32 6 A26 26 0 0 1 58 32"
            stroke="var(--cobalt)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
