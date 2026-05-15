import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // আমাদের নেভিগেশন লিংকগুলো
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/products' },
  ]

  // মেনু ওপেন বা ক্লোজ করার ফাংশন
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full border-b border-dark-border bg-dark-card/90 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-gold font-serif text-2xl font-bold tracking-wide">
          Abdullah Fashion
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-300 ${
                location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gold focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-dark-border transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // ক্লিক করার পর মেনু বন্ধ হয়ে যাবে
              className={`block text-base font-medium transition-colors duration-300 ${
                location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar