import { ReactLenis } from 'lenis/react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { ScrollToTopOnNav } from './router/ScrollToTopOnNav'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { useScrollTimelineSupport } from './hooks/useScrollTimelineSupport'
import { useScrollProgress } from './hooks/useScrollProgress'
import './styles/global.css'
import './styles/sections.css'
import './styles/fallback.css'

function App() {
  useScrollTimelineSupport()
  useScrollProgress()

  return (
    <ReactLenis root>
      <ScrollToTopOnNav />
      <ScrollProgressBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </ReactLenis>
  )
}

export default App
