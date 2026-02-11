'use client';
import Image from 'next/image';

export default function Institutions() {
  const institutions = [
    {
      name: "Podar International School",
      type: "Secondary Education (10th)",
      icon: "🏫",
      image: "/podar school.png",
      color: "from-green-500 to-emerald-500",
      website: "https://www.podarintl-ssc.com/",
      description: "A prestigious institution known for academic excellence and holistic development",
      highlights: [
        "Strong foundation in core subjects",
        "Active participation in sports and extracurricular activities",
        "Developed leadership and teamwork skills",
        "Achieved 79% in board examinations"
      ],
      achievement: "79% in 10th Grade"
    },
    {
      name: "Podar International Higher Secondary College",
      type: "Higher Secondary (11th & 12th)",
      icon: "📚",
      image: "/podar colleg.png",
      color: "from-blue-500 to-cyan-500",
      website: "https://www.podarintl-ssc.com/",
      description: "Premier college offering comprehensive education in Commerce and Information Technology",
      highlights: [
        "Specialized in Commerce and IT stream",
        "Scored exceptional 89% in Information Technology",
        "Gained practical knowledge in business and technology",
        "Participated in various tech competitions and events"
      ],
      achievement: "89% in IT | 68% Overall"
    },
    {
      name: "Nexcore Institute of Technology",
      type: "B.Voc in AI & ML",
      icon: "🎓",
      image: "/degree.png",
      color: "from-purple-500 to-pink-500",
      website: "https://nexcoreinstitute.org/",
      description: "Leading technical institute focused on innovation, research, and industry-ready skills in AI and Machine Learning",
      highlights: [
        "Pursuing B.Voc in Artificial Intelligence & Machine Learning",
        "Serving as Sports President - Leading college sports activities",
        "Working on cutting-edge AI/ML and web development projects",
        "Building strong technical and leadership foundation"
      ],
      achievement: "Currently Pursuing (2025-2028)"
    }
  ];

  return (
    <section id="institutions" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">MY INSTITUTIONS</h2>
        
        <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          My educational journey through prestigious institutions that shaped my skills, knowledge, and character
        </p>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Special card for FRIENDSCAMPUS TUITION & COACHING CENTRE */}
          <div className="institution-card group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
            
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-xl transition-all duration-500"></div>
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
            </div>
            
            <div className="relative bg-gray-800 rounded-xl p-8 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500">
              <div className="flex flex-col gap-6">
                {/* Top section with image and title */}
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-orange-500 group-hover:border-red-500 transition-colors duration-300">
                      <Image
                        src="/friends.png"
                        alt="FRIENDSCAMPUS TUITION & COACHING CENTRE"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      👨‍🏫
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-4xl md:text-5xl font-black mb-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 drop-shadow-lg">
                        FRIENDSCAMPUS TUITION & COACHING CENTRE
                      </span>
                    </h3>
                    <a 
                      href="https://www.friendscampus.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-orange-500/50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Visit Website
                    </a>
                  </div>
                </div>
                
                {/* Middle section - Minhaj Shaikh Sir */}
                <div className="relative py-8 px-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border-2 border-orange-500/30 group-hover:border-orange-500 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-xl animate-pulse"></div>
                  
                  <div className="relative text-center">
                    <div className="mb-3">
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">More Than a Teacher</p>
                      <h4 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 mb-2 drop-shadow-lg">
                        MINHAJ SHAIKH SIR
                      </h4>
                      <div className="flex justify-center items-center gap-3 mb-2">
                        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-orange-500 to-red-500"></div>
                        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                          CEO & FOUNDER
                        </p>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-red-500 via-orange-500 to-transparent"></div>
                      </div>
                      <p className="text-base text-gray-300 italic mb-3">FRIENDSCAMPUS TUITION & COACHING CENTRE</p>
                      <p className="text-lg text-orange-300 font-semibold">Like a Big Brother to Me</p>
                    </div>
                    
                    <div className="mt-4 flex justify-center gap-3 flex-wrap">
                      <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-semibold">My Mentor</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-semibold">My Inspiration</span>
                      </div>
                      <a 
                        href="https://www.instagram.com/theaccidentaltutor.minhaj/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-white font-semibold">Follow on Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Bottom section - Description and highlights */}
                <div>
                  <p className="text-gray-300 mb-4 text-lg text-center group-hover:text-white transition-colors">
                    Where my journey began - studied from 1st to 10th grade. He helped me in my 10th and 12th boards, believed I can be a good AI Engineer, and guided me to join Nexcore Institute of Technology
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Completed entire schooling from 1st to 10th standard</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Helped me excel in 10th and 12th board examinations</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Believed in my potential to become a good AI Engineer</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Guided me to join Nexcore Institute of Technology</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other institutions */}
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="institution-card group relative"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${institution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />
              
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-all duration-500"></div>
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
              </div>
              
              <div className="relative bg-gray-800 rounded-xl p-8 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-purple-500 group-hover:border-pink-500 transition-colors duration-300">
                      <Image
                        src={institution.image}
                        alt={institution.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {institution.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-3">
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all mb-2">
                          {institution.name}
                        </h3>
                        <p className="text-lg text-purple-400 font-semibold mb-2">
                          {institution.type}
                        </p>
                        {institution.website && (
                          <a 
                            href={institution.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-xs hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Visit Website
                          </a>
                        )}
                      </div>
                      <span className={`px-6 py-2 bg-gradient-to-r ${institution.color} text-white rounded-full font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                        {institution.achievement}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-lg group-hover:text-white transition-colors">
                      {institution.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {institution.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                        >
                          <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
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
