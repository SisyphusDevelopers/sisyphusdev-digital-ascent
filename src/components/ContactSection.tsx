
import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea brillante? Nos encantaría escucharla y ayudarte a convertirla en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User size={20} className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="relative">
                <Mail size={20} className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="relative">
                <MessageSquare size={20} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-electric text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué elegirnos?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Desarrollo ágil</h4>
                    <p className="text-gray-600">Metodologías ágiles para entregas rápidas y eficientes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovación constante</h4>
                    <p className="text-gray-600">Siempre explorando nuevas tecnologías y soluciones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Colaboración cercana</h4>
                    <p className="text-gray-600">Trabajamos contigo en cada paso del proceso.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Soporte continuo</h4>
                    <p className="text-gray-600">Mantenimiento y soporte post-lanzamiento garantizado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-gradient-electric rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Información de contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} />
                  <span>hola@sisyphusdev.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare size={18} />
                  <span>Respuesta en menos de 24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
