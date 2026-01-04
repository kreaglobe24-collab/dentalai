import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="relative min-h-screen selection:bg-orange-500/30 text-white bg-black font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Signup />
      <Footer />
      
      <div className="fixed bottom-8 right-8 z-[100]">
        {/* Convai widget can be added here if needed */}
      </div>
    </div>
  </React.StrictMode>
);
