import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Abdullah Fashion | Premium Luxury Fashion</title>
        <meta name="description" content="Discover premium luxury fashion, accessories, and exclusive collections at Abdullah Fashion." />
      </Helmet>

      <div className="w-full animate-fade-in">
        
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Fashion" 
              className="w-full h-full object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block animate-slide-down">
              Welcome to the New Era
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
              Redefining Luxury
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Experience the pinnacle of craftsmanship and style. Explore our exclusive collection designed for the modern connoisseur.
            </p>
            <Link 
              to="/products" 
              className="inline-block px-10 py-4 bg-gold text-primary font-bold rounded uppercase tracking-wider hover:bg-gold-light transition-all duration-300 gold-glow hover:scale-105"
            >
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Shop by Category</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Men */}
            <Link to="/products" className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80" 
                alt="Men Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Men's Collection</h3>
                <span className="text-gold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Discover Now <span>&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Category 2: Women */}
            <Link to="/products" className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80" 
                alt="Women Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Women's Collection</h3>
                <span className="text-gold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Discover Now <span>&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Category 3: Accessories */}
            <Link to="/products" className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Accessories</h3>
                <span className="text-gold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Discover Now <span>&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-dark-card border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Featured Pieces</h2>
                <div className="w-24 h-1 bg-gold"></div>
              </div>
              <Link to="/products" className="hidden md:block text-gold hover:text-white transition-colors border-b border-gold hover:border-white pb-1">
                View All Products
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: 1, name: 'Royal Gold Watch', price: '$2,999.00', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
                { id: 2, name: 'Luxury Leather Bag', price: '$1,499.00', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80' },
                { id: 5, name: 'Leather Oxford Shoes', price: '$899.00', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80' },
                { id: 4, name: 'Signature Perfume', price: '$399.00', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80' },
              ].map((product) => (
                <div key={product.id} className="bg-dark border border-dark-border rounded-lg p-4 hover:border-gold transition-colors duration-500 group">
                  <div className="aspect-[3/4] rounded-md mb-5 overflow-hidden relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <Link 
                        to={`/product/${product.id}`}
                        className="px-6 py-2 border border-gold text-gold bg-transparent rounded hover:bg-gold hover:text-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="px-1">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors duration-300 truncate cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gold font-medium mt-2 text-lg">
  {product.price}
</p>
</div>
</div>
))}
</div>

{/* Mobile View All Button */}
<div className="mt-10 text-center md:hidden">
  <Link
    to="/products"
    className="inline-block px-8 py-3 border border-gold text-gold rounded hover:bg-gold hover:text-primary transition-all duration-300"
  >
    View All Products
  </Link>
</div>
</div>
</section>

</div>
</>
)
}

export default Home