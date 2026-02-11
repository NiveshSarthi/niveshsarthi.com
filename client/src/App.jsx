import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';
import InventoryModal from './components/InventoryModal';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show preloader if not seen in this session
    return !sessionStorage.getItem('preloader_seen');
  });
  const [showModal, setShowModal] = useState(false);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloader_seen', 'true');
    setIsLoading(false);

    // Only show modal if preloader was just shown and it hasn't been seen
    if (!sessionStorage.getItem('modal_seen')) {
      setTimeout(() => {
        setShowModal(true);
      }, 1500);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem('modal_seen', 'true');
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

        {!isLoading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
            <Footer />
            <Chatbot />
            <InventoryModal
              isOpen={showModal}
              onClose={handleCloseModal}
            />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
