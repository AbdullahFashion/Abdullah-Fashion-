import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// ডেমো প্রোডাক্ট লিস্ট (বাস্তব ছবি সহ)
const products = [
  { id: 1, name: 'Royal Gold Watch', category: 'Accessories', price: '$2,999.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Velvet Evening Gown', category: 'Women', price: '$1,499.00', image: 'https://images.unsplash.com/photo-1566160980482-1a2c3a5165dc?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Classic Black Tuxedo', category: 'Men', price: '$1,899.00', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Diamond Stud Earrings', category: 'Jewelry', price: '$3,499.00', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Leather Oxford Shoes', category: 'Men', price: '$899.00', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Silk Scarf', category: 'Accessories', price: '$299.00', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Gold Chain Blazer', category: 'Women', price: '$1,299.00', image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Platinum Cufflinks', category: 'Jewelry', price: '$599.00', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80' },
]

const Products = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Collection | Abdullah Fashion - Luxury Items</title>
        <meta name="description" content="Explore our exclusive collection of premium luxury fashion and accessories." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 animate-fade-in">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-dark-border pb-6">
          <div>
            <span className="text-gold uppercase tracking-[0.2em] text-xs mb-2 block font-medium">
              Exclusive
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our Collection
            </h1>
          </div>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm font-medium">
            Showing {products.length} premium items
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold transition-colors duration-500 group"
            >
              {/* Product Image Area */}
              <div className="aspect-[3/4] bg-dark rounded-md mb-5 overflow-hidden relative">
                
                {/* রিয়েল প্রোডাক্ট ইমেজ */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Link Button */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                  <Link 
                    to={`/product/${product.id}`}
                    className="px-6 py-2 border border-gold text-gold bg-transparent rounded hover:bg-gold hover:text-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="px-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors duration-300 truncate cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mt-1">{product.category}</p>
                <p className="text-gold font-medium mt-3 text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Products