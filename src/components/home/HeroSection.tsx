import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Image from '../Image'

const HERO_FEATURES = [
  {
    id: 1,
    text: "100,000+ episodes of movies and series to watch"
  },
  {
    id: 2,
    text: "Download and watch offline"
  },
  {
    id: 3,
    text: "Create a special profile for kids"
  }
]

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized gradients */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/TVBG.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent will-change-transform" 
          style={{ transform: 'translateZ(0)' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

      {/* Content with optimized animations */}
      <div 
        className={`relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6 transform transition-all duration-1000 will-change-transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Unlimited Movies, TV Shows, and More
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Watch anywhere. Cancel anytime. Start your free trial today.
        </p>

        {/* Features List */}
        <div className="grid gap-4 sm:gap-6 mb-8 max-w-xl mx-auto">
          {HERO_FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`flex items-center gap-3 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${feature.id * 200}ms`,
                transform: 'translateZ(0)'
              }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-primary" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-200">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Link 
            to="/subscribe" 
            className="btn-primary text-center group"
          >
            <span className="relative z-10">Start Watching Now</span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
          <Link 
            to="/browse" 
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Browse Content
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection