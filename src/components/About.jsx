'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">ABOUT ME</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Sports President Badge */}
          <div className="mb-12 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl mb-6 animate-pulse">
              <div className="bg-gray-900 px-8 py-4 rounded-2xl">
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                  🏆 SPORTS PRESIDENT
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 mt-2">
                  at Nexcore Institute of Technology
                </p>
              </div>
            </div>
          </div>
          
          {/* Main content card */}
          <div className="relative group">
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 group-hover:border-purple-500/50 transition-all duration-500">
              {/* Introduction */}
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Pravin Chettiar</span>, a passionate Full Stack Developer with over <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">6+ months of hands-on experience</span> in building modern web applications.
              </p>
              
              {/* Specialization */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                As a developer, I specialize in creating <span className="text-emerald-400 font-semibold">responsive, user-friendly websites</span> and applications using cutting-edge technologies like <span className="text-blue-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Next.js</span>, and <span className="text-green-400 font-semibold">Node.js</span>. My journey combines technical excellence with leadership skills honed through sports management.
              </p>
              
              {/* Projects highlight */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  I have successfully completed <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-2xl">9+ projects</span> ranging from <span className="text-cyan-400 font-semibold">e-commerce platforms</span> to <span className="text-pink-400 font-semibold">entertainment websites</span>. Each project reflects my commitment to quality, innovation, and user experience.
                </p>
              </div>
              
              {/* Leadership */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                My role as <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold">Sports President</span> has taught me valuable lessons in <span className="text-blue-400 font-semibold">teamwork</span>, <span className="text-green-400 font-semibold">time management</span>, and <span className="text-purple-400 font-semibold">leadership</span> - skills that translate perfectly into collaborative development environments and project management.
              </p>
              
              {/* Passion */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                When I'm not coding or leading sports activities, I'm exploring <span className="text-indigo-400 font-semibold">new frameworks</span>, contributing to <span className="text-pink-400 font-semibold">open-source projects</span>, and designing <span className="text-cyan-400 font-semibold">intuitive user interfaces</span> that make a real difference in people's lives.
              </p>
              
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a
                  href="https://socialmedia.nexcorealliance.com/pravin.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full group/btn overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x"></span>
                  
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  
                  {/* Glow effect */}
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10"></span>
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                  </span>
                  
                  {/* Content */}
                  <span className="relative z-10 text-white group-hover/btn:scale-105 transition-transform duration-300">
                    View My Social Profile
                  </span>
                  <svg className="relative z-10 w-6 h-6 text-white group-hover/btn:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
