import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { site } from '../data/site'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const lenis = useLenis()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const go = () => {
      const el = document.getElementById('kontakt')
      if (!el) return
      if (lenis) lenis.scrollTo(el, { offset: -20 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname === '/') {
      go()
    } else {
      navigate('/')
      // wait for Home to mount before scrolling
      setTimeout(go, 120)
    }
  }

  return (
    <nav className={['nav', scrolled ? 'nav--scrolled' : ''].join(' ')}>
      <Link to="/" className="nav__brand">
        <svg className="nav__brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="20" stroke="var(--cobalt)" strokeWidth="5" />
          <circle cx="32" cy="32" r="6" fill="var(--cobalt)" />
          <path
            d="M32 6 A26 26 0 0 1 58 32"
            stroke="var(--cobalt)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        {site.name}
      </Link>

      <div className="nav__links">
        <span className="nav__hours">{site.hoursShort}</span>
        <Link to="/menu" className="nav__link">
          Menu
        </Link>
        <a href="/#kontakt" className="nav__link" onClick={scrollToContact}>
          Kontakt
        </a>
      </div>
    </nav>
  )
}
