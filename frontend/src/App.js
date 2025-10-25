import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@/App.css';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => setShowSplash(false), 800);
  };

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => setShowSplash(false), 300);
  };

  if (showSplash) {
    return (
      <motion.div 
        className="splash-screen" 
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          overflow: 'hidden'
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Video container with professional styling */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
          style={{
            width: '80%',
            maxWidth: '600px',
            aspectRatio: '16/9',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(255, 139, 123, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, rgba(255, 139, 123, 0.1) 0%, rgba(255, 169, 150, 0.1) 100%)',
          }}
        >
          <video
            autoPlay
            muted
            onEnded={handleVideoEnd}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/logo.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, rgba(255, 139, 123, 0.1) 0%, transparent 50%, rgba(255, 169, 150, 0.1) 100%)'
            }}
          />
        </motion.div>

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
          whileHover={{
            scale: 1.05,
            background: 'rgba(255, 139, 123, 0.2)',
            borderColor: 'rgba(255, 139, 123, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Intro →
        </motion.button>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-8 flex items-center gap-3 text-white/60 text-sm"
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          Loading AutoBridge AI...
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;