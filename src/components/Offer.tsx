import { offer } from '../data/offer'
import { TransitionLink } from '../router/TransitionLink'
import { OfferCard } from './OfferCard'
import { Reveal } from './Reveal'

export function Offer() {
  return (
    <section className="section section--dark" id="oferta">
      <div className="container">
        <div className="offer__head">
          <Reveal>
            <span className="eyebrow">Oferta</span>
            <h2 className="section-title">Wszystko kręci się wokół kawy</h2>
          </Reveal>
          <Reveal className="offer__intro" delay={0.1}>
            <p>
              Od pojedynczego espresso po matchę i wypieki. Prosty wybór, dopracowany w każdym
              detalu — pełne menu z cenami znajdziesz na osobnej stronie.
            </p>
          </Reveal>
        </div>

        <div className="offer__grid">
          {offer.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <OfferCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div style={{ marginTop: '2.5rem' }}>
            <TransitionLink to="/menu" className="btn btn--primary">
              Pełne menu →
            </TransitionLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
