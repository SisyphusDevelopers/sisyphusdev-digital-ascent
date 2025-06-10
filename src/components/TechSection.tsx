
const TechSection = () => {
  const technologies = [
    { name: "React", category: "Frontend", color: "from-sisyphus-accent to-sisyphus-teal" },
    { name: "Angular", category: "Frontend", color: "from-sisyphus-purple to-sisyphus-pink" },
    { name: "Node.js", category: "Backend", color: "from-sisyphus-sage to-sisyphus-teal" },
    { name: "Spring Boot", category: "Backend", color: "from-sisyphus-secondary to-sisyphus-purple" },
    { name: "MySQL", category: "Database", color: "from-sisyphus-accent to-sisyphus-secondary" },
    { name: "AWS", category: "Cloud", color: "from-sisyphus-orange to-sisyphus-accent" },
    { name: "TypeScript", category: "Language", color: "from-sisyphus-purple to-sisyphus-secondary" },
    { name: "Java", category: "Language", color: "from-sisyphus-secondary to-sisyphus-teal" },
  ];

  return (
    <section id="tecnologias" className="section-padding bg-gradient-to-br from-sisyphus-cream via-sisyphus-soft-gray to-sisyphus-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sisyphus-dark mb-6">
            Tecnologías que <span className="text-gradient-purple">dominamos</span>
          </h2>
          <p className="text-xl text-sisyphus-medium max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las herramientas más modernas y eficientes del ecosistema de desarrollo, 
            siempre manteniéndonos actualizados con las últimas tendencias.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-sisyphus-accent/10 transition-all duration-300 hover-lift border border-sisyphus-accent/10"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-white font-bold text-lg">
                  {tech.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-sisyphus-dark mb-2">{tech.name}</h3>
              <span className="text-sm text-sisyphus-medium px-3 py-1 bg-gradient-to-r from-sisyphus-cream to-sisyphus-warm-beige rounded-full border border-sisyphus-accent/20">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-sisyphus-accent/20 shadow-lg">
            <h3 className="text-3xl font-bold text-sisyphus-dark mb-6">
              Siempre aprendiendo, siempre <span className="text-gradient-warm">evolucionando</span>
            </h3>
            <p className="text-lg text-sisyphus-medium leading-relaxed">
              El mundo del desarrollo de software evoluciona constantemente. Por eso, nos mantenemos 
              al día con las últimas tendencias, frameworks y mejores prácticas. Nuestro compromiso 
              es utilizar las herramientas más adecuadas para cada proyecto, garantizando 
              soluciones modernas, escalables y eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
