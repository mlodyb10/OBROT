import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">{site.fullName}</div>
          <p className="footer__tag">{site.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>Kawiarnia</h4>
          <Link to="/">Strona główna</Link>
          <Link to="/menu">Menu</Link>
          <a href={site.mapLink} target="_blank" rel="noreferrer">
            Dojazd
          </a>
        </div>

        <div className="footer__col">
          <h4>Kontakt</h4>
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={site.email.href}>{site.email.display}</a>
          <a href={site.socials.instagram.href} target="_blank" rel="noreferrer">
            {site.socials.instagram.label}
          </a>
        </div>

        <div className="footer__col">
          <h4>Adres</h4>
          <p>{site.address.street}</p>
          <p>
            {site.address.postal} {site.address.city}
          </p>
          <p>{site.hoursShort}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {site.fullName} · Katowice</span>
        <span>Sprawy nabrały obrotu.</span>
      </div>
    </footer>
  )
}
