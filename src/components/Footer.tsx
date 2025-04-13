import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../data/mockData'
import Image from './Image'

const Footer = () => {
  return (
    <footer className="bg-background-light py-12 sm:py-16">
      <div className="container">
        <div className="grid gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-block mb-4">
              <Image
                src="/images/fa-filimo-dark-logo.svg"
                alt="Filimo"
                className="h-8 sm:h-10"
              />
            </Link>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto sm:mx-0">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Browse */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold mb-4">Browse</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center sm:text-left col-span-2 sm:col-span-1">
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                {FOOTER_LINKS.social.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 mt-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm order-2 sm:order-1">
                &copy; {new Date().getFullYear()} Filimo. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm order-1 sm:order-2">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer