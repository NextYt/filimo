import HeroSection from '../components/home/HeroSection'
import MoviesSection from '../components/home/MoviesSection'
import DevicesSection from '../components/home/DevicesSection'
import TVSection from '../components/home/TVSection'
import KidsSection from '../components/home/KidsSection'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      <HeroSection />
      <MoviesSection />
      <DevicesSection />
      <TVSection />
      <KidsSection />
    </div>
  )
}

export default HomePage
