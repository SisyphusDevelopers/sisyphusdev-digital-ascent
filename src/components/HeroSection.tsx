
import { ArrowRight, Code2 } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-sisyphus-accent/20 to-sisyphus-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-sisyphus-secondary/20 to-sisyphus-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sisyphus-orange/10 to-sisyphus-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-cool rounded-2xl animate-float shadow-xl">
              <Code2 size={48} className="text-white" />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-sisyphus-dark mb-6 leading-tight">
            Impulsamos tu{' '}
            <span className="text-gradient">visión digital</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-sisyphus-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Soluciones de software a la medida, creadas por apasionados del desarrollo.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="group bg-gradient-sisyphus text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-sisyphus-accent/25 transition-all duration-300 inline-flex items-center space-x-3 hover-lift"
          >
            <span>Contáctanos</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Stats or additional info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sisyphus-accent/20 hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sisyphus-medium">Proyectos entregados a tiempo</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sisyphus-secondary/20 hover-lift">
              <div className="text-3xl font-bold text-gradient-purple mb-2">24/7</div>
              <div className="text-sisyphus-medium">Soporte técnico dedicado</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sisyphus-purple/20 hover-lift">
              <div className="text-3xl font-bold text-gradient-warm mb-2">∞</div>
              <div className="text-sisyphus-medium">Pasión por el código</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
