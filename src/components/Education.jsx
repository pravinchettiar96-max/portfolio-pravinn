'use client';

export default function Education() {
  const education = [
    {
      degree: "B.Voc in AI & ML and Data Science",
      institution: "Nexcore Institute of Technology",
      status: "Pursuing",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      details: "Specializing in Artificial Intelligence, Machine Learning and Data Science"
    },
    {
      degree: "Higher Secondary (11th & 12th)",
      institution: "Podar International Higher Secondary College",
      status: "Completed",
      icon: "📚",
      color: "from-blue-500 to-cyan-500",
      details: "Commerce and IT Stream"
    },
    {
      degree: "Secondary School (10th)",
      institution: "Podar International School",
      status: "Completed",
      icon: "🏫",
      color: "from-green-500 to-emerald-500",
      details: "Strong foundation in core subjects and extracurricular activities"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">EDUCATION</h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-card-enhanced group relative"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
              
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-all duration-500"></div>
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
              </div>
              
              <div className="relative bg-gray-800 rounded-xl p-8 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 transform group-hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                        {edu.degree}
                      </h3>
                      <span className={`px-6 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <p className="text-xl text-gray-300 mb-2 group-hover:text-white transition-colors font-semibold">
                      {edu.institution}
                    </p>
                    
                    <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                      {edu.details}
                    </p>
                    
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
