
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-gradient">SisyphusDev</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales excepcionales. 
              Cada proyecto es una oportunidad para crear algo extraordinario.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-electric transition-colors duration-300"
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
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
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
              <li className="text-gray-300">Desarrollo Web</li>
              <li className="text-gray-300">Apps Móviles</li>
              <li className="text-gray-300">Prototipado Rápido</li>
              <li className="text-gray-300">Consultoría Técnica</li>
              <li className="text-gray-300">Mantenimiento</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-300">
                © 2024 SisyphusDev. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>y mucho café</span>
            </div>
          </div>
          
          {/* Company motto */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
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
