import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Abdullah Fashion</title>
        <meta name="description" content="Get in touch with Abdullah Fashion. We are here to assist you with any inquiries regarding our premium luxury collection." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24 animate-fade-in">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a question about our collection, your order, or just want to say hello? Our dedicated team is here to provide you with an exceptional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Side: Contact Information */}
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Reach Out Directly</h2>
              <p className="text-gray-400 mb-8">
                Whether you're looking for styling advice or need help with a recent purchase, we are at your service.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Our Boutique</h3>
                  <p className="text-gray-400 text-sm">simanto bazer,sirajganj sadar,sirajganj<br />rajshahi, Bangladesh</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm">support atikkin904@gmail.com<br />info atikking904@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-gold flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.893-1.422-5.234-3.763-6.656-6.656l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Call Us</h3>
                  <p className="text-gray-400 text-sm">+880 1752584184<br />Sat-Thu: 07:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark border border-dark-border rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark border border-dark-border rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-dark border border-dark-border rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-dark border border-dark-border rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-gold text-primary font-bold rounded hover:bg-gold-light transition-all duration-300 gold-glow"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact