import { Link } from 'react-router-dom'
import { menu } from '../data/menu'
import { site } from '../data/site'
import { Reveal } from '../components/Reveal'
import { Footer } from '../components/Footer'

const TAG_LABEL: Record<string, string> = {
  matcha: 'matcha',
  nowość: 'nowość',
  roślinne: 'roślinne',
}

export function Menu() {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <span className="menu-hero__ghost" aria-hidden="true">
          ↻
        </span>
        <div className="menu-hero__inner">
          <span className="eyebrow">{site.fullName}</span>
          <h1 className="menu-hero__title">Menu</h1>
          <p className="menu-hero__note">
            Kawa specialty, matcha i wypieki. Ofertę rotujemy sezonowo — pochodzenie ziarna i wybór
            wypieków zmieniają się w rytmie obrotu.
          </p>
        </div>
      </section>

      <div className="menu-body">
        {menu.map((cat, i) => (
          <Reveal key={cat.id} className="menu-cat" delay={i * 0.06}>
            <div className="menu-cat__head">
              <span className="menu-cat__index">{cat.index}</span>
              <div>
                <h2 className="menu-cat__title">{cat.title}</h2>
                {cat.subtitle && <p className="menu-cat__subtitle">{cat.subtitle}</p>}
              </div>
            </div>

            <div className="menu-cat__rows">
              {cat.rows.map((row) => (
                <div className="menu-row" key={row.name}>
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
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="menu-footer">
        <p className="menu-footer__note">
          Ceny orientacyjne — aktualne stawki obowiązują na miejscu. Pytaj baristę o dzisiejsze
          ziarno i wypieki.
        </p>
        <Link to="/" className="btn btn--primary">
          ← Wróć na stronę główną
        </Link>
      </div>

      <Footer />
    </div>
  )
}
