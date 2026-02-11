'use client';

export default function Skills() {
  const codeSkills = [
    { name: "HTML5 & CSS3", level: 95, icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "JavaScript (ES6+)", level: 90, icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "React.js & Next.js", level: 88, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind CSS", level: 92, icon: "🎨", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js & Express", level: 85, icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "MongoDB & SQL", level: 80, icon: "🗄️", color: "from-green-600 to-teal-600" },
    { name: "Git & GitHub", level: 87, icon: "🐙", color: "from-purple-500 to-pink-500" }
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 88, icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "Figma", level: 85, icon: "🎯", color: "from-pink-500 to-rose-500" },
    { name: "Responsive Design", level: 93, icon: "📱", color: "from-blue-500 to-cyan-500" },
    { name: "Wireframing", level: 82, icon: "📐", color: "from-indigo-500 to-purple-500" },
    { name: "Prototyping", level: 80, icon: "🖼️", color: "from-violet-500 to-fuchsia-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">SKILLS</h2>
        
        {/* Code Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8 text-center">
            💻 Code & Development
          </h3>
          <div className="max-w-5xl mx-auto space-y-6">
            {codeSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-item-enhanced"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="skill-bar-container-enhanced">
                    <div
                      className={`skill-bar-enhanced bg-gradient-to-r ${skill.color}`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UI/UX Design Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center">
            🎨 UI/UX Design
          </h3>
          <div className="max-w-5xl mx-auto space-y-6">
            {designSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-item-enhanced"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="skill-bar-container-enhanced">
                    <div
                      className={`skill-bar-enhanced bg-gradient-to-r ${skill.color}`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
