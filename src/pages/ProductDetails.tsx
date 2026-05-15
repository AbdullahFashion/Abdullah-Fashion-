import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ProductDetails = () => {
  const { id } = useParams()
  
  // সাইজ এবং মেইন ইমেজের জন্য স্টেট
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [mainImage, setMainImage] = useState<string>('')
  
  // ডেমো প্রোডাক্ট ডেটা (বাস্তব ছবি সহ)
  const product = {
    id: id,
    name: 'Royal Gold Watch',
    category: 'Accessories',
    price: '$2,999.00',
    description: 'Experience unparalleled luxury with this handcrafted masterpiece. Featuring premium materials and exclusive design, this item is perfect for elevating your modern wardrobe. Every detail is meticulously crafted to ensure the highest quality and style.',
    features: ['Premium Quality Materials', 'Swiss Movement', 'Water Resistant 50m', 'Global Warranty'],
    sizes: ['One Size'],
    // প্রোডাক্টের ৪টি ভিন্ন অ্যাঙ্গেলের ছবি
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508656966810-7201b12b5cd3?auto=format&fit=crop&w=800&q=80'
    ]
  }

  // পেজ লোড হলে প্রথম ছবিটিকে ডিফল্ট মেইন ছবি হিসেবে সেট করা
  useEffect(() => {
    setMainImage(product.images[0])
  }, [])

  return (
    <>
      <Helmet>
        <title>{product.name} | Abdullah Fashion</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="container mx-auto px-4 py-12 md:py-16 animate-fade-in">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-400 mb-8 md:mb-12">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-gold transition-colors">Collection</Link>
          <span className="mx-2">/</span>
          <span className="text-white truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side: Product Image Gallery */}
          <div className="flex flex-col space-y-4">
            {/* Main Large Image */}
            <div className="aspect-[3/4] bg-dark-card border border-dark-border rounded-lg flex items-center justify-center overflow-hidden group">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <div 
                  key={index} 
                  onClick={() => setMainImage(img)}
                  className={`aspect-square bg-dark-card rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                    mainImage === img ? 'border-2 border-gold opacity-100' : 'border border-dark-border opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Product Information */}
          <div className="flex flex-col">
            <span className="text-gold uppercase tracking-widest text-xs mb-2 font-medium">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-white font-medium mb-6">{product.price}</p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">Select Size</span>
                  <button className="text-gold text-sm hover:underline underline-offset-4 transition-all">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 flex items-center justify-center border rounded transition-all duration-300 ${
                        selectedSize === size 
                          ? 'border-gold bg-gold text-primary font-bold' 
                          : 'border-dark-border text-gray-300 hover:border-gold hover:text-gold bg-dark'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 px-8 py-4 bg-gold text-primary font-bold rounded hover:bg-gold-light transition-all duration-300 gold-glow">
                Add to Cart
              </button>
              <button className="flex-1 px-8 py-4 bg-transparent border border-gold text-gold font-bold rounded hover:bg-gold/10 transition-all duration-300">
                Buy It Now
              </button>
            </div>

            {/* Product Highlights / Features */}
            <div className="border-t border-dark-border pt-8 space-y-4">
              <h3 className="text-white font-serif text-xl mb-4">Product Highlights</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails