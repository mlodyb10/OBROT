import { site } from '../data/site'
import { Reveal } from './Reveal'

export function LocationHours() {
  return (
    <section className="section section--roast" id="lokalizacja">
      <div className="container location__grid">
        <Reveal className="location__info">
          <span className="eyebrow">Znajdź nas</span>
          <h2 className="section-title">Plac Miarki 1</h2>

          <div className="location__rows">
            <div>
              <div className="location__row-label">Adres</div>
              <div className="location__row-value">
                {site.address.street}
                <br />
                {site.address.postal} {site.address.city}
                <br />
                <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>{site.address.note}</span>
              </div>
            </div>

            <div>
              <div className="location__row-label">Godziny otwarcia</div>
              <ul className="location__hours-list">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="location__actions">
            <a href={site.mapLink} target="_blank" rel="noreferrer" className="btn btn--primary">
              Wyznacz trasę
            </a>
            <a href={site.phone.href} className="btn btn--ghost">
              Zadzwoń
            </a>
          </div>
        </Reveal>

        <Reveal className="location__map" delay={0.1}>
          <iframe
            src={site.mapEmbedSrc}
            title="Mapa — OBRÓT COFFEE, plac Miarki 1, Katowice"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
