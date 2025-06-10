
import { Globe, Smartphone, Zap, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables con tecnologías de vanguardia. Frontend interactivo y backend robusto.",
      features: ["React & Angular", "Node.js & Spring Boot", "APIs RESTful", "Arquitectura escalable"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android que ofrecen experiencias de usuario excepcionales.",
      features: ["React Native", "Flutter", "UI/UX optimizado", "Integración nativa"]
    },
    {
      icon: Zap,
      title: "Prototipado Rápido",
      description: "MVPs y prototipos funcionales para validar ideas de negocio en tiempo récord.",
      features: ["Desarrollo ágil", "Validación temprana", "Iteración rápida", "Time-to-market optimizado"]
    },
    {
      icon: Wrench,
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado y mantenimiento continuo para optimizar tu infraestructura tecnológica.",
      features: ["Code reviews", "Arquitectura de software", "Optimización de rendimiento", "Soporte 24/7"]
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-gradient">servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales de desarrollo de software, 
            desde la conceptualización hasta el mantenimiento continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover-lift">
              <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-electric rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-electric rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Conversemos sobre cómo podemos hacer realidad tu visión digital.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-electric px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover-lift"
            >
              Iniciar conversación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
