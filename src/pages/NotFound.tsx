import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      {/* SEO Meta Tags (404 পেইজ যেন গুগলে ইনডেক্স না হয়) */}
      <Helmet>
        <title>404 Not Found | Abdullah Fashion</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
        <h2 className="text-8xl md:text-9xl font-serif font-bold text-gold mb-4 drop-shadow-lg">
          404
        </h2>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
          Page Not Found
        </h3>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          We apologize, but the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-transparent border border-gold text-gold font-medium rounded hover:bg-gold hover:text-primary transition-all duration-300"
        >
          Return to Home
        </Link>
      </div>
    </>
  )
}

export default NotFound