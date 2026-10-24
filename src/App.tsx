import { useAos } from './useAos'
import Hero from './components/Hero'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import UpIcon from './components/UpIcon'

export default function App() {
  useAos()
  return (
    <>
      <a className="skip-link" href="#films">skip to films</a>
      <Hero />
      <Header />
      <HeroSection />
      <hr />
      <Footer />
      <UpIcon />
    </>
  )
}
