import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlassSurface from './GlassSurface';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto px-2 py-3">
        <GlassSurface
          width="100%"
          height={72}
          borderRadius={50}
          displace={7}
          borderWidth={0.001}
          distortionScale={-150}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          brightness={60}
          opacity={0.93}
          mixBlendMode="screen"
          className="w-full"
        >
          <nav className="px-6 py-2">
            <div className="flex items-center justify-between">
              {/* Desktop Menu */}
              <div className="flex-1" />
              <div className="hidden md:flex space-x-8 justify-end">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-poppins font-light capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg p-4">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors duration-200 font-poppins font-light capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </GlassSurface>
      </div>
    </header>
  );
};

export default Header;