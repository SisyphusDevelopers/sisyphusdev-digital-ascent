
import { Users, Lightbulb, Award, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes <span className="text-gradient">somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de jóvenes ingenieros apasionados por el desarrollo de software. 
            Creemos en el poder de la tecnología para transformar ideas en realidades digitales exitosas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Nuestra filosofía
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Como Sísifo, sabemos que cada proyecto es una montaña que escalar. 
              Pero a diferencia del mito griego, nosotros disfrutamos cada paso del camino, 
              aprendiendo y creciendo con cada línea de código.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Creemos que el desarrollo de software es un arte que combina creatividad, 
              lógica y una profunda comprensión de las necesidades del usuario.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-electric/10 to-teal-electric/10 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Innovación</h4>
            <p className="text-gray-600 leading-relaxed">
              Mantenemos una mentalidad curiosa y exploramos constantemente nuevas tecnologías 
              y metodologías para ofrecer soluciones vanguardistas.
            </p>
          </div>

          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Calidad</h4>
            <p className="text-gray-600 leading-relaxed">
              Cada línea de código es escrita con precisión y cuidado. 
              Implementamos las mejores prácticas y estándares de la industria.
            </p>
          </div>

          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Colaboración</h4>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos de la mano con nuestros clientes, creando una relación 
              de confianza y transparencia durante todo el proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
