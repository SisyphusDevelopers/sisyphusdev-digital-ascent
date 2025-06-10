
import { Package, Star, Download } from 'lucide-react';

const CatalogSection = () => {
  const catalogItems = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "ERP completo para la gestión integral de empresas. Incluye módulos de contabilidad, inventario, recursos humanos y reportes avanzados.",
      category: "ERP",
      features: ["Dashboard interactivo", "Reportes en tiempo real", "Multi-usuario", "API REST"]
    },
    {
      title: "Plataforma E-commerce",
      description: "Solución completa para tiendas online con pasarela de pagos, gestión de inventario y panel administrativo avanzado.",
      category: "E-commerce",
      features: ["Pasarela de pagos", "Carrito inteligente", "SEO optimizado", "Mobile-first"]
    },
    {
      title: "App de Gestión de Proyectos",
      description: "Herramienta colaborativa para equipos que permite seguimiento de tareas, gestión de tiempo y comunicación efectiva.",
      category: "Productividad",
      features: ["Metodologías ágiles", "Time tracking", "Chat integrado", "Notificaciones push"]
    },
    {
      title: "Sistema de Reservas Online",
      description: "Plataforma para gestión de citas y reservas con calendario inteligente, notificaciones automáticas y reportes de ocupación.",
      category: "Servicios",
      features: ["Calendario inteligente", "Confirmación automática", "Métricas de ocupación", "Integración WhatsApp"]
    },
    {
      title: "Dashboard de Analytics",
      description: "Herramienta de visualización de datos con gráficos interactivos, KPIs personalizables y exportación de reportes.",
      category: "Analytics",
      features: ["Gráficos interactivos", "KPIs personalizables", "Exportación PDF/Excel", "Actualizaciones en tiempo real"]
    },
    {
      title: "App de Delivery",
      description: "Aplicación móvil para delivery con seguimiento GPS en tiempo real, múltiples métodos de pago y sistema de calificaciones.",
      category: "Delivery",
      features: ["Tracking GPS", "Múltiples pagos", "Sistema de rating", "Notificaciones push"]
    }
  ];

  return (
    <section id="catalogo" className="section-padding bg-sisyphus-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sisyphus-dark mb-6">
            Nuestro <span className="text-gradient-sage">catálogo</span> de software
          </h2>
          <p className="text-xl text-sisyphus-medium max-w-3xl mx-auto leading-relaxed">
            Soluciones de software listas para implementar, diseñadas con las mejores prácticas 
            y tecnologías modernas para impulsar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift border border-sisyphus-accent/10">
              {/* Placeholder image with gradient background */}
              <div className="w-full h-48 bg-gradient-to-br from-sisyphus-cream via-sisyphus-warm-beige to-sisyphus-soft-gray flex items-center justify-center border-b border-sisyphus-accent/10">
                <Package size={48} className="text-sisyphus-medium" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-sisyphus-accent bg-sisyphus-cream px-3 py-1 rounded-full border border-sisyphus-accent/20">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sisyphus-orange">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-sisyphus-medium">5.0</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-sisyphus-dark mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sisyphus-medium mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-sisyphus-dark mb-2">Características principales:</h4>
                  <ul className="space-y-1">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-sisyphus-medium">
                        <div className="w-1.5 h-1.5 bg-sisyphus-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-sisyphus text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                    <Download size={16} />
                    <span>Ver demo</span>
                  </button>
                  <button className="text-sisyphus-accent hover:text-sisyphus-dark text-sm font-medium transition-colors duration-300">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-sisyphus rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Desarrollamos soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-sisyphus-dark px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover-lift"
            >
              Solicitar desarrollo personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
