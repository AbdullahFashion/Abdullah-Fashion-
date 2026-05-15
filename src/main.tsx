import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        {/* গ্লোবাল নোটিফিকেশন স্টাইল (Luxury Black & Gold) */}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#171717',
              color: '#fff',
              border: '1px solid #D4AF37',
            },
            success: {
              iconTheme: {
                primary: '#D4AF37',
                secondary: '#171717',
              },
            },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)