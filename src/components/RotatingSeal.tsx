import { Logo } from './Logo'

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
        <Logo />
      </div>
    </div>
  )
}
