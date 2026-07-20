import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { Logo } from './Logo'
import { TransitionLink } from '../router/TransitionLink'
import { useRouteTransition } from '../router/RouteTransition'
import { useSmoothScrollTo } from '../hooks/useSmoothScrollTo'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const go = useRouteTransition()
  const scrollTo = useSmoothScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollTo('kontakt')
    } else {
      // Come home first, then glide down once the section exists.
      go('/')
      window.setTimeout(() => scrollTo('kontakt'), 700)
    }
  }

  return (
    <nav className={['nav', scrolled ? 'nav--scrolled' : ''].join(' ')}>
      <TransitionLink to="/" className="nav__brand">
        <Logo className="nav__brand-mark" />
        {site.name}
      </TransitionLink>

      <div className="nav__links">
        <span className="nav__hours">{site.hoursShort}</span>
        <TransitionLink to="/menu" className="nav__link">
          Menu
        </TransitionLink>
        <a href="#/" className="nav__link" onClick={handleContact}>
          Kontakt
        </a>
      </div>
    </nav>
  )
}
