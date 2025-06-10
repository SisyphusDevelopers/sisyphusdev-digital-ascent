
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sisyphus-dark text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <img 
                src="/lovable-uploads/876576ae-e241-4773-a147-b0ce9f935177.png" 
                alt="SisyphusDev Logo" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-white">SisyphusDev</span>
            </div>
            <p className="text-sisyphus-light mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales excepcionales. 
              Cada proyecto es una oportunidad para crear algo extraordinario.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-sisyphus-medium rounded-lg flex items-center justify-center hover:bg-sisyphus-accent transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sisyphus-medium rounded-lg flex items-center justify-center hover:bg-sisyphus-accent transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sisyphus-medium rounded-lg flex items-center justify-center hover:bg-sisyphus-accent transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-sisyphus-medium rounded-lg flex items-center justify-center hover:bg-sisyphus-accent transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sisyphus-light hover:text-white transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sisyphus-light hover:text-white transition-colors duration-200"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sisyphus-light hover:text-white transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sisyphus-light hover:text-white transition-colors duration-200"
                >
                  Tecnologías
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-sisyphus-light">Desarrollo Web</li>
              <li className="text-sisyphus-light">Apps Móviles</li>
              <li className="text-sisyphus-light">Prototipado Rápido</li>
              <li className="text-sisyphus-light">Consultoría Técnica</li>
              <li className="text-sisyphus-light">Mantenimiento</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-sisyphus-medium pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-sisyphus-light">
                © 2024 SisyphusDev. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sisyphus-light">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>y mucho café</span>
            </div>
          </div>
          
          {/* Company motto */}
          <div className="text-center mt-8 pt-8 border-t border-sisyphus-medium">
            <p className="text-xl font-medium text-gradient">
              "SisyphusDev – Subimos la colina contigo, una línea de código a la vez."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
