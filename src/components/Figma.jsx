'use client';

export default function Figma() {
  return (
    <section id="figma" className="py-20 bg-gray-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title">DESIGN & CODE</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Figma Card */}
            <div className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50">
              {/* Animated glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
              
              <div className="relative bg-gray-800 rounded-2xl p-8 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative text-center mb-6">
                  <div className="inline-block mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-20 h-20 mx-auto text-purple-400 group-hover:text-pink-400 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 2C6.343 2 5 3.343 5 5v14c0 1.657 1.343 3 3 3h3V12H8c-1.657 0-3-1.343-3-3s1.343-3 3-3h3V2H8zm8 0v4h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3v4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3h3V6h-3c-1.657 0-3-1.343-3-3s1.343-3 3-3h3z"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
                    FIGMA DESIGNS
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Check out my professional Figma design projects
                  </p>
                  
                  <p className="text-sm text-gray-400 mb-6">
                    If you have any Figma projects you'd like to bring to life, connect with me!
                  </p>
                </div>
                
                <div className="relative group mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <a
                    href="https://www.figma.com/design/LucDfniNgGcPormjmPBZAL/DRACULLA-PROJECT?node-id=0-1&t=2P6IDM4UQ2lUCRYp-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block bg-gray-900 rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 2C6.343 2 5 3.343 5 5v14c0 1.657 1.343 3 3 3h3V12H8c-1.657 0-3-1.343-3-3s1.343-3 3-3h3V2H8zm8 0v4h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3v4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3h3V6h-3c-1.657 0-3-1.343-3-3s1.343-3 3-3h3z"/>
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                            View Designs
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            My Design Projects
                          </p>
                        </div>
                      </div>
                      
                      <svg className="w-6 h-6 text-purple-400 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-purple-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <p className="text-xs text-purple-400 font-semibold">UI/UX</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-purple-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-purple-400 font-semibold">Responsive</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-purple-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-xs text-purple-400 font-semibold">Modern</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="group relative bg-gradient-to-r from-gray-600 via-slate-600 to-gray-700 p-1 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/50">
              {/* Animated glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-slate-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
              
              <div className="relative bg-gray-800 rounded-2xl p-8 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative text-center mb-6">
                  <div className="inline-block mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-20 h-20 mx-auto text-gray-400 group-hover:text-slate-300 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-slate-400 mb-3">
                    GITHUB CODE
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Explore my code repositories and open-source contributions
                  </p>
                  
                  <p className="text-sm text-gray-400 mb-6">
                    See my coding style, projects, and contributions on GitHub!
                  </p>
                </div>
                
                <div className="relative group mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <a
                    href="https://github.com/pravinchettiar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block bg-gray-900 rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-slate-400 transition-all">
                            View Code
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            @pravinchettiar
                          </p>
                        </div>
                      </div>
                      
                      <svg className="w-6 h-6 text-gray-400 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-gray-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <p className="text-xs text-gray-400 font-semibold">Clean Code</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-gray-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <p className="text-xs text-gray-400 font-semibold">Projects</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-gray-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <p className="text-xs text-gray-400 font-semibold">Open Source</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WordPress Card */}
            <div className="group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 p-1 rounded-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50">
              {/* Animated glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
              
              <div className="relative bg-gray-800 rounded-2xl p-8 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative text-center mb-6">
                  <div className="inline-block mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-20 h-20 mx-auto text-blue-400 group-hover:text-cyan-400 transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                    WORDPRESS
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Need a custom WordPress website or plugin?
                  </p>
                  
                  <p className="text-sm text-gray-400 mb-6">
                    Any project you want to make, contact me and let's build it together!
                  </p>
                </div>
                
                <div className="relative group mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <a
                    href="mailto:pravinchettiar96@gmail.com"
                    className="relative block bg-gray-900 rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                            Contact Me
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                            pravinchettiar96@gmail.com
                          </p>
                        </div>
                      </div>
                      
                      <svg className="w-6 h-6 text-blue-400 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-blue-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <p className="text-xs text-blue-400 font-semibold">Websites</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-blue-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                    <p className="text-xs text-blue-400 font-semibold">Plugins</p>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-900 rounded-lg group/icon hover:bg-gray-800 transition-colors duration-300">
                    <svg className="w-8 h-8 mx-auto mb-1 text-blue-400 group-hover/icon:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xs text-blue-400 font-semibold">Custom</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
