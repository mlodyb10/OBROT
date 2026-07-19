import { Hero } from '../components/Hero'
import { KineticMarquee } from '../components/KineticMarquee'
import { About } from '../components/About'
import { Divider } from '../components/Divider'
import { Offer } from '../components/Offer'
import { LocationHours } from '../components/LocationHours'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Hero />
      <KineticMarquee />
      <About />
      <Divider tone="dark" />
      <Offer />
      <LocationHours />
      <Contact />
      <Footer />
    </>
  )
}
