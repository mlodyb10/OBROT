import { useLenis } from 'lenis/react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { Media } from './Media'
import { RotatingSeal } from './RotatingSeal'

export function Hero() {
  const lenis = useLenis()

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('oferta')
    if (el) lenis ? lenis.scrollTo(el, { offset: -20 }) : el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <Media src="/img/hero.jpg" alt="Wnętrze kawiarni OBRÓT w Katowicach" label="OBRÓT · Katowice" />
      </div>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">{site.kicker}</span>
          <h1 className="hero__title">
            OBR<span className="hero__title-accent">Ó</span>T
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__sub">
            Specialty espresso, matcha i świeże wypieki na placu Miarki 1. Miejsce, w którym
            wszystko kręci się wokół dobrej kawy.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn btn--primary">
              Zobacz menu
            </Link>
            <a href="/#oferta" className="btn btn--ghost" onClick={scrollToOffer}>
              Co robimy
            </a>
          </div>
        </div>

        <div className="hero__seal">
          <RotatingSeal />
        </div>
      </div>

      <a href="/#oferta" className="hero__scroll-cue" onClick={scrollToOffer}>
        <span>przewiń</span>
        <span className="hero__scroll-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </header>
  )
}
