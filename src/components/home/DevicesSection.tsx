import { useEffect, useRef, useState } from 'react'
import Image from '../Image'

const DEVICES = [
  {
    title: 'Mobile Devices',
    description: 'iOS, Android phones and tablets',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Web Browsers',
    description: 'Chrome, Firefox, Safari, Edge',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
]

const DevicesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
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

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div 
              className={`relative z-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative max-w-lg mx-auto">
                <Image
                  src="/images/deviceYaghi.png"
                  alt="Watch on Multiple Devices"
                  className="w-full h-auto"
                />
                {/* Decorative elements */}
                <div 
                  className="absolute inset-0 hidden sm:block"
                  style={{ perspective: '1000px' }}
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute will-change-transform"
                      style={{
                        top: `${10 + i * 20}%`,
                        left: `${5 + i * 20}%`,
                        animation: `float ${2 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`,
                        transform: 'translateZ(0)',
                      }}
                    >
                      <div 
                        className={`w-3 h-3 rounded-full ${
                          i % 2 === 0 ? 'bg-primary' : 'bg-blue-500'
                        }`}
                        style={{
                          opacity: 0.6,
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

          {/* Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                Watch Anywhere, Anytime
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {DEVICES.map((device, index) => (
                  <div
                    key={device.title}
                    className={`transform transition-all duration-700 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                      transform: 'translateZ(0)'
                    }}
                  >
                    <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors h-full">
                      <div className="text-primary mb-4">
                        {device.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {device.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {device.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevicesSection