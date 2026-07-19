import { site } from '../data/site'
import { Reveal } from './Reveal'
import { RotatingSeal } from './RotatingSeal'

export function Contact() {
  return (
    <section className="section section--light" id="kontakt">
      <div className="container contact__grid">
        <Reveal>
          <span className="eyebrow">Kontakt</span>
          <p className="contact__lead">Napisz, zadzwoń albo po prostu wpadnij na obrót.</p>

          <div className="contact__channels">
            <a className="contact__channel" href={site.phone.href}>
              <span className="contact__channel-label">Telefon</span>
              <span className="contact__channel-value">{site.phone.display}</span>
            </a>
            <a className="contact__channel" href={site.email.href}>
              <span className="contact__channel-label">E-mail</span>
              <span className="contact__channel-value">{site.email.display}</span>
            </a>
            <a
              className="contact__channel"
              href={site.socials.instagram.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__channel-label">Instagram</span>
              <span className="contact__channel-value">{site.socials.instagram.label}</span>
            </a>
            <a
              className="contact__channel"
              href={site.socials.facebook.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__channel-label">Facebook</span>
              <span className="contact__channel-value">{site.socials.facebook.label}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="contact__seal">
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <RotatingSeal />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
