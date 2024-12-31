import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Profile } from './pages/Profile';
import { Developers } from './pages/Developers';
import { WagmiProvider } from './providers/WagmiProvider';
import { AuthProvider } from './features/auth/AuthProvider';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <WagmiProvider>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/developers" element={<Developers />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </WagmiProvider>
  );
}