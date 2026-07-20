import { useEffect, useRef, useState } from 'react'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { Preloader } from './components/Preloader'
import { ScrollToTopOnNav } from './router/ScrollToTopOnNav'
import { RouteTransitionProvider } from './router/RouteTransition'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { useScrollTimelineSupport } from './hooks/useScrollTimelineSupport'
import { useScrollProgress } from './hooks/useScrollProgress'
import './styles/global.css'
import './styles/sections.css'
import './styles/menu.css'
import './styles/fallback.css'

function App() {
  const lenisRef = useRef<LenisRef>(null)
  const [loading, setLoading] = useState(true)

  useScrollTimelineSupport()
  useScrollProgress()

  // Hold the page still behind the preloader, then hand scrolling back.
  useEffect(() => {
    const lenis = lenisRef.current?.lenis
    if (loading) {
      window.scrollTo(0, 0)
      lenis?.stop()
    } else {
      lenis?.start()
    }
    document.documentElement.classList.toggle('is-ready', !loading)
  }, [loading])

  return (
    <ReactLenis root ref={lenisRef}>
      <RouteTransitionProvider>
        <ScrollToTopOnNav lenisRef={lenisRef} />
        <ScrollProgressBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </RouteTransitionProvider>

      {loading && <Preloader onDone={() => setLoading(false)} />}
    </ReactLenis>
  )
}

export default App
