import { site } from '../data/site'
import { Media } from './Media'
import { RotatingSeal } from './RotatingSeal'
import { TransitionLink } from '../router/TransitionLink'
import { useSmoothScrollTo } from '../hooks/useSmoothScrollTo'

export function Hero() {
  const scrollTo = useSmoothScrollTo()

  const toOffer = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo('oferta')
  }

  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <Media src="/img/hero.jpg" alt="Wnętrze kawiarni OBRÓT w Katowicach" label="OBRÓT · Katowice" />
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow hero__anim" style={{ '--d': '0.05s' } as React.CSSProperties}>
            {site.kicker}
          </span>
          <h1 className="hero__title hero__anim" style={{ '--d': '0.15s' } as React.CSSProperties}>
            OBR<span className="hero__title-accent">Ó</span>T
          </h1>
          <p className="hero__tagline hero__anim" style={{ '--d': '0.3s' } as React.CSSProperties}>
            {site.tagline}
          </p>
          <p className="hero__sub hero__anim" style={{ '--d': '0.4s' } as React.CSSProperties}>
            Specialty espresso, matcha i świeże wypieki na placu Miarki 1. Miejsce, w którym
            wszystko kręci się wokół dobrej kawy.
          </p>
          <div className="hero__actions hero__anim" style={{ '--d': '0.5s' } as React.CSSProperties}>
            <TransitionLink to="/menu" className="btn btn--primary">
              Zobacz menu
            </TransitionLink>
            <a href="#/" className="btn btn--ghost" onClick={toOffer}>
              Co robimy
            </a>
          </div>
        </div>

        <div className="hero__seal hero__anim" style={{ '--d': '0.6s' } as React.CSSProperties}>
          <RotatingSeal />
        </div>
      </div>

      <a href="#/" className="hero__scroll-cue hero__anim" style={{ '--d': '0.8s' } as React.CSSProperties} onClick={toOffer}>
        <span>przewiń</span>
        <span className="hero__scroll-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </header>
  )
}
