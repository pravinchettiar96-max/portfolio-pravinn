'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Goozop",
      description: "E-commerce platform with advanced product filtering and secure checkout system",
      fullDescription: "Goozop is a comprehensive e-commerce solution featuring advanced product filtering, real-time inventory management, secure payment gateway integration, user authentication, shopping cart functionality, and order tracking. Built with modern technologies to provide seamless shopping experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/gozoop.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Apple Clone",
      description: "Pixel-perfect clone of Apple's website with smooth animations",
      fullDescription: "A meticulously crafted clone of Apple's official website featuring smooth scroll animations, product showcases, interactive elements, and responsive design. Demonstrates advanced CSS skills, GSAP animations, and attention to detail in replicating premium user experiences.",
      tech: ["React", "CSS3", "GSAP", "Framer Motion"],
      image: "/apple.png",
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming interface with playlist management",
      fullDescription: "Music streaming application with Spotify API integration featuring playlist creation and management, music player controls, search functionality, artist profiles, album displays, and personalized recommendations. Includes responsive design for all devices.",
      tech: ["React", "Spotify API", "Tailwind", "Context API"],
      image: "/spotify.png",
      color: "from-green-400 to-lime-500",
      link: "http://127.0.0.1:5500/spotify.html"
    },
    {
      title: "BookMyShow Clone",
      description: "Movie ticket booking system with seat selection",
      fullDescription: "Comprehensive movie ticket booking platform featuring movie listings, theater selection, interactive seat selection, multiple payment options, booking confirmation, and ticket generation. Includes admin panel for theater and show management. Built with modern web technologies to provide seamless booking experience.",
      tech: ["Next.js", "MongoDB", "Stripe", "Socket.io"],
      image: "/bookmyshow.png",
      color: "from-pink-500 to-rose-500",
      link: "http://127.0.0.1:5500/bookmyshoww.html"
    },
    {
      title: "Interactive Game",
      description: "Self-made interactive browser game with engaging gameplay",
      fullDescription: "A fully functional browser-based game built from scratch featuring smooth animations, interactive gameplay mechanics, score tracking, and responsive controls. Demonstrates proficiency in JavaScript game development, DOM manipulation, and creating engaging user experiences with clean code architecture.",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      image: "/game.png",
      color: "from-green-500 to-emerald-500",
      link: "http://127.0.0.1:5500/game2.html"
    },
    {
      title: "Pricing Component",
      description: "Self-made dynamic pricing page with interactive features",
      fullDescription: "A beautifully designed pricing component built from scratch featuring multiple pricing tiers, toggle switches for billing periods, interactive hover effects, and responsive design. Showcases expertise in creating professional UI components with clean HTML, CSS, and JavaScript for dynamic pricing calculations and smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/pricing.png",
      color: "from-amber-500 to-orange-500",
      link: "http://127.0.0.1:5500/pricing.html"
    },
    {
      title: "Restaurant Menu",
      description: "Self-made interactive restaurant menu with filtering",
      fullDescription: "An elegant restaurant menu application built from scratch featuring category filtering, search functionality, dynamic menu items display, and smooth animations. Demonstrates proficiency in creating interactive web applications with clean UI/UX design, responsive layouts, and efficient JavaScript for filtering and sorting menu items by categories.",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      image: "/resturent.png",
      color: "from-red-500 to-pink-500",
      link: "http://127.0.0.1:5500/resturent.html"
    },
    {
      title: "M.S Import Export",
      description: "Business website for Mohansundaram Chettiar's company",
      fullDescription: "Professional business website for M.S Import Export, led by Mohansundaram Chettiar (CEO & Founder) - father of Pravin Chettiar. Features company overview, services, product catalog, and contact information. Built with modern web technologies to showcase the import-export business with a clean, professional design and responsive layout.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "/ms.import export.png",
      color: "from-blue-600 to-indigo-600",
      link: "http://127.0.0.1:5500/audit.html/mohan.html",
      liveLink: "https://ms-importexport.com/"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      fullDescription: "Modern portfolio website featuring animated sections, project showcases, skills visualization, contact forms, and responsive design. Built with Next.js and Tailwind CSS to demonstrate web development capabilities and design sense.",
      tech: ["Next.js", "Tailwind", "Framer Motion", "EmailJS"],
      image: "/portfolio.png",
      color: "from-violet-500 to-purple-600",
      link: "http://127.0.0.1:5500/pravin.html"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">PROJECTS</h2>
          
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-300">
              <span className="text-purple-400 font-bold text-3xl">9 Projects Completed</span> | 
              <span className="text-pink-400 font-bold text-3xl ml-2">6+ Months Experience</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Simple gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Project number badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md z-10">
                  <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
                
                {/* Live demo indicator */}
                {project.link && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-md z-10">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                )}
                
                <div className="relative bg-gray-800 rounded-xl p-5 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 transform group-hover:-translate-y-2 will-change-transform">
                  {/* Image container */}
                  <div className="relative h-44 mb-4 overflow-hidden rounded-lg bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 will-change-transform"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-3 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-purple-400 rounded-full text-xs border border-gray-600 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                    <button className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-pink-400 transition-colors duration-300">
                      <span>View Details</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-xs hover:scale-105 hover:shadow-md hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-1"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-800 rounded-2xl max-w-3xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              {selectedProject.title}
            </h3>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {selectedProject.fullDescription}
            </p>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-purple-500 text-white rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Live Link Button */}
            {selectedProject.liveLink && (
              <div className="mt-6">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  <span>Visit Live Website</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
