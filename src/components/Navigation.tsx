
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/876576ae-e241-4773-a147-b0ce9f935177.png" 
              alt="SisyphusDev Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-sisyphus-dark">SisyphusDev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('tecnologias')}
                className="text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium"
              >
                Tecnologías
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-sisyphus text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium w-full text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block px-3 py-2 text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium w-full text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block px-3 py-2 text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium w-full text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('tecnologias')}
                className="block px-3 py-2 text-sisyphus-dark hover:text-sisyphus-medium transition-colors duration-200 font-medium w-full text-left"
              >
                Tecnologías
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block mx-3 my-2 bg-gradient-sisyphus text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-center"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
