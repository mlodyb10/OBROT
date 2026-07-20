import { menu } from '../data/menu'
import { site } from '../data/site'
import { Reveal } from '../components/Reveal'
import { Footer } from '../components/Footer'
import { RotatingSeal } from '../components/RotatingSeal'
import { KineticMarquee } from '../components/KineticMarquee'
import { TransitionLink } from '../router/TransitionLink'
import { CATEGORY_MARKS } from '../components/visuals/CategoryVisuals'

const TAG_LABEL: Record<string, string> = {
  matcha: 'matcha',
  nowość: 'nowość',
  roślinne: 'roślinne',
}

/** Each category gets its own full-bleed colour band, cycling the palette. */
const BANDS = ['paper', 'cobalt', 'espresso', 'roast'] as const

export function Menu() {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <span className="menu-hero__ghost" aria-hidden="true">
          ↻
        </span>

        <div className="menu-hero__inner">
          <div className="menu-hero__text">
            <span className="eyebrow menu-hero__eyebrow">{site.fullName}</span>
            <h1 className="menu-hero__title">
              <span className="menu-hero__title-line">Menu</span>
            </h1>
            <p className="menu-hero__note">
              Kawa specialty, matcha i wypieki. Ofertę rotujemy sezonowo — pochodzenie ziarna i
              wybór wypieków zmieniają się w rytmie obrotu.
            </p>
          </div>

          <div className="menu-hero__seal">
            <RotatingSeal />
          </div>
        </div>
      </section>

      <KineticMarquee />

      {menu.map((cat, i) => {
        const band = BANDS[i % BANDS.length]
        const Mark = CATEGORY_MARKS[cat.id]
        return (
          <section className={`menu-band menu-band--${band}`} key={cat.id}>
            <span className="menu-band__ghost" aria-hidden="true">
              {Mark && <Mark />}
            </span>

            <div className="menu-band__inner">
              <Reveal className="menu-band__head">
                <span className="menu-band__mark" aria-hidden="true">
                  {Mark && <Mark />}
                </span>
                <h2 className="menu-band__title">{cat.title}</h2>
                {cat.subtitle && <p className="menu-band__subtitle">{cat.subtitle}</p>}
              </Reveal>

              <div className="menu-band__rows">
                {cat.rows.map((row, r) => (
                  <Reveal key={row.name} delay={r * 0.05}>
                    <div className="menu-row">
                      <span className="menu-row__name">
                        {row.name}
                        {row.note && <span className="menu-row__note">· {row.note}</span>}
                        {row.tag && (
                          <span className={`menu-row__tag menu-row__tag--${row.tag}`}>
                            {TAG_LABEL[row.tag]}
                          </span>
                        )}
                      </span>
                      <span className="menu-row__dots" aria-hidden="true" />
                      <span className="menu-row__price">{row.price}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="menu-outro">
        <Reveal>
          <p className="menu-outro__note">
            Ceny orientacyjne — aktualne stawki obowiązują na miejscu. Pytaj baristę o dzisiejsze
            ziarno i wypieki.
          </p>
          <div className="menu-outro__actions">
            <TransitionLink to="/" className="btn btn--primary">
              ← Wróć na stronę główną
            </TransitionLink>
            <a href={site.mapLink} target="_blank" rel="noreferrer" className="btn btn--ghost">
              Wpadnij na plac Miarki 1
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
