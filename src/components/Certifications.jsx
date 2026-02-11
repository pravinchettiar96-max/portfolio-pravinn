'use client';

export default function Certifications() {
  const certifications = [
    {
      title: "Sports President",
      issuer: "College Sports Committee",
      date: "2025",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      description: "Leading and managing all sports activities and events"
    },
    {
      title: "Intel AI Certification",
      issuer: "Intel Corporation",
      date: "2025",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      description: "Artificial Intelligence and Machine Learning fundamentals"
    },
    {
      title: "AI & Machine Learning",
      issuer: "Google AI",
      date: "2025",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      description: "Advanced AI concepts and practical applications"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2025",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      description: "Complete web development with modern technologies"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Coursera",
      date: "2025",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      description: "Advanced React.js and Next.js development"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2025",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      description: "Data structures and algorithm problem solving"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">CERTIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card-enhanced group relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient background with color theme */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl blur-sm`} />
              
              {/* Animated border with glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/60 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
              
              {/* Certificate badge effect */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg group-hover:scale-110">
                <span className="text-white text-xl">✓</span>
              </div>
              
              <div className="relative bg-gray-800 rounded-xl p-6 h-full shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/40 transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-[1.03] will-change-transform">
                {/* Icon with glow effect */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300 text-center relative z-10 filter group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                    {cert.icon}
                  </div>
                </div>
                
                {/* Title with gradient animation */}
                <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all duration-300">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-gray-400 mb-2 text-center group-hover:text-gray-200 transition-colors duration-300 font-medium">
                  {cert.issuer}
                </p>
                
                {/* Date badge */}
                <div className="flex justify-center mb-3">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 font-semibold rounded-full text-sm group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    {cert.date}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-500 text-center group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {cert.description}
                </p>
                
                {/* Animated progress bar */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-500 mx-auto"></div>
                
                {/* Corner decorations */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-bl-xl transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/50 rounded-tr-xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Certifications Button */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/1opl2aRN21huoSpj2tzg_on38KAsfBmTz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full group/btn overflow-hidden"
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-[length:200%_auto] animate-gradient-x"></span>
            
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
            
            {/* Glow effect */}
            <span className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10"></span>
            
            {/* Shine effect */}
            <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
            </span>
            
            {/* Content */}
            <span className="relative z-10 text-white group-hover/btn:scale-105 transition-transform duration-300">
              View All Certifications
            </span>
            <svg className="relative z-10 w-6 h-6 text-white group-hover/btn:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
