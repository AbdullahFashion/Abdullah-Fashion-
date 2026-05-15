import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-dark-border bg-dark-card pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gold font-serif text-2xl font-bold tracking-wide">
              Abdullah Fashion
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Elevate your style with our premium collection of luxury fashion and accessories. Designed for the modern trendsetter.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-serif text-lg font-medium">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm text-gray-400">
                <Link to="/" className="hover:text-gold transition-colors duration-300 w-fit">Home</Link>
                <Link to="/products" className="hover:text-gold transition-colors duration-300 w-fit">Our Collection</Link>
                <Link to="/about" className="hover:text-gold transition-colors duration-300 w-fit">About Us</Link>
                {/* Contact Link আপডেট করা হলো */}
                <Link to="/contact" className="hover:text-gold transition-colors duration-300 w-fit">Contact</Link>
              </nav>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-serif text-lg font-medium">Contact Us</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-400">
              <p className="flex items-center space-x-3">
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>support@atikking904@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3">
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.893-1.422-5.234-3.763-6.656-6.656l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+880 1752584184</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Abdullah Fashion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer