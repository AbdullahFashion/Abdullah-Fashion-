import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us | Abdullah Fashion</title>
        <meta name="description" content="Discover the story behind Abdullah Fashion. Learn about our commitment to luxury, quality, and timeless elegance." />
      </Helmet>

      <div className="w-full animate-fade-in">
        
        {/* Header / Hero Section for About Page */}
        <section className="relative py-20 md:py-32 bg-dark-card border-b border-dark-border text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 to-dark pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              The Legacy
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Redefining luxury fashion through impeccable craftsmanship, timeless design, and an unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Content Section: Story & Vision */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Brand Image */}
            <div className="aspect-[4/5] bg-dark-card border border-dark-border rounded-lg relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80" 
                alt="Abdullah Fashion Heritage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark to-transparent opacity-60"></div>
              
              {/* Decorative Corner Borders */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/50 group-hover:border-gold transition-colors duration-500 z-10"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/50 group-hover:border-gold transition-colors duration-500 z-10"></div>
            </div>

            {/* Right Side: Text */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gold mb-4">The Abdullah Fashion Heritage</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Founded with a singular vision to bring world-class luxury to the modern wardrobe, Abdullah Fashion stands as a beacon of elegance and sophistication. We believe that fashion is not just about clothing; it is an expression of identity, confidence, and art.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-white mb-4">Uncompromising Quality</h2>
                <p className="text-gray-400 leading-relaxed">
                  Every piece in our collection is a testament to our dedication to perfection. From globally sourced premium fabrics to the meticulous attention of master artisans, we ensure that what you wear is nothing short of a masterpiece. 
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-2 mt-4">
                <p className="text-xl font-serif text-white italic">
                  "Elegance is not standing out, but being remembered."
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-dark-card border-t border-dark-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every stitch, every design, and every decision we make.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Craftsmanship', desc: 'Precision and artistry in every detail, honoring traditional techniques while embracing modern innovation.' },
                { title: 'Exclusivity', desc: 'Curating limited collections that ensure your style remains uniquely yours, setting you apart from the crowd.' },
                { title: 'Integrity', desc: 'A steadfast commitment to ethical sourcing, sustainability, and transparency in everything we do.' }
              ].map((value, index) => (
                <div key={index} className="p-8 border border-dark-border rounded-lg hover:border-gold/50 transition-colors duration-300 bg-dark text-center group">
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default About