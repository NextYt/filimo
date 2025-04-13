import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { NAVIGATION_LINKS } from '../data/mockData'
import Image from './Image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    
    // Only update state if change is significant (more than 5px)
    if (Math.abs(prevScrollPos - currentScrollPos) > 5) {
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }
    
    setIsScrolled(currentScrollPos > 20)
  }, [prevScrollPos])

  useEffect(() => {
    let rafId: number
    
    const throttledScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      cancelAnimationFrame(rafId)
    }
  }, [handleScroll])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-background-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Image
              src="/images/fa-filimo-dark-logo.svg"
              alt="Filimo"
              className="h-8 md:h-10 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/subscribe"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[57px] bg-background-dark/95 backdrop-blur-sm transition-all duration-300 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="container py-4">
            <div className="flex flex-col gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-gray-800 my-2" />
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/subscribe"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header