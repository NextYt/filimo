import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Image from '../Image'

const FEATURES = [
  {
    title: "Safe Environment",
    description: "Kid-friendly content with parental controls",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Learning & Fun",
    description: "Educational content mixed with entertainment",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Download & Watch",
    description: "Download shows for offline viewing",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
]

const KidsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 sm:py-16 lg:py-24 kids-section overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900"
    >
      <div className="absolute inset-0 bg-background-dark/40" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat pattern-grid" 
          style={{ 
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} 
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                Create Special Profiles for Kids
              </h2>
              <p className="text-gray-200 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>

              <div className="space-y-4 mb-8">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                      index === activeFeature 
                        ? 'bg-white/10 transform scale-100 sm:scale-105' 
                        : 'hover:bg-white/5'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      index === activeFeature 
                        ? 'bg-primary text-white' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                  to="/kids" 
                  className="w-full sm:w-auto btn-primary text-center"
                >
                  Explore Kids Content
                </Link>
                <Link 
                  to="/multi-profile" 
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Create Kids Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Image Column with floating elements */}
          <div className="relative">
            <div 
              className={`relative z-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative max-w-lg mx-auto">
                <Image 
                  src="/images/bg-kids.png" 
                  alt="Kids Content" 
                  className="w-full h-auto"
                />
                {/* Floating Elements Animation */}
                <div 
                  className="absolute inset-0 hidden sm:block"
                  style={{ perspective: '1000px' }}
                >
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute will-change-transform"
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 25}%`,
                        animation: `float ${3 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                        transform: 'translateZ(0)',
                      }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full bg-primary opacity-75 will-change-transform"
                        style={{
                          animation: `pulse 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          transform: 'translateZ(0)',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KidsSection