import { useState } from 'react'

interface MediaProps {
  src: string
  alt: string
  /** Short uppercase label shown on the designed placeholder if the image is missing. */
  label?: string
  className?: string
}

/**
 * Image with a designed espresso/cobalt placeholder behind it.
 * If the image fails to load (e.g. AI photos not generated yet), the
 * placeholder stays visible — the page looks intentional either way.
 */
export function Media({ src, alt, label, className }: MediaProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={['media', className].filter(Boolean).join(' ')}>
      <div className="media__ph">
        {label && <span className="media__ph-label">{label}</span>}
      </div>
      {!failed && (
        <img
          className="media__img"
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
