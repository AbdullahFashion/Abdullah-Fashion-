import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact' // আমাদের নতুন Contact পেইজ ইমপোর্ট করা হলো
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-gold selection:text-primary">
      {/* Navigation Layer */}
      <Navbar />

      {/* Main Content & Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Contact পেইজের রাউট যুক্ত করা হলো */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          
          {/* যদি কেউ ভুল লিংকে যায়, তাহলে এই NotFound পেইজটি দেখাবে */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer Layer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default App