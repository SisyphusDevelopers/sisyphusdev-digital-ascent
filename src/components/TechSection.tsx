
const TechSection = () => {
  const technologies = [
    { name: "React", category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Angular", category: "Frontend", color: "from-red-400 to-red-600" },
    { name: "Node.js", category: "Backend", color: "from-green-400 to-green-600" },
    { name: "Spring Boot", category: "Backend", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", category: "Database", color: "from-blue-500 to-blue-700" },
    { name: "Docker", category: "DevOps", color: "from-blue-400 to-cyan-500" },
    { name: "AWS", category: "Cloud", color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-800" },
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps", "Cloud", "Language"];

  return (
    <section id="tecnologias" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnologías que <span className="text-gradient">dominamos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las herramientas más modernas y eficientes del ecosistema de desarrollo, 
            siempre manteniéndonos actualizados con las últimas tendencias.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">
                  {tech.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Categories breakdown */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nuestro stack tecnológico
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryTechs = technologies.filter(tech => tech.category === category);
              return (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{category}</h4>
                  <div className="space-y-2">
                    {categoryTechs.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center">
                        <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full mr-3`}></div>
                        <span className="text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Siempre aprendiendo, siempre evolucionando
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
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
