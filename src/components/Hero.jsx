'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-0 md:mb-6 flex justify-center items-center gap-8 flex-wrap mt-24 md:mt-0">
            <div className="order-2 md:order-1 signature-container-beside-photo">
              <svg viewBox="0 0 250 120" className="signature-svg-beside-photo">
                <defs>
                  <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id="professionalGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Clear "Pravin" text signature */}
                <text
                  x="10"
                  y="60"
                  fontFamily="'Segoe Script', 'Brush Script MT', 'Lucida Handwriting', cursive"
                  fontSize="48"
                  fill="url(#signatureGradient)"
                  filter="url(#professionalGlow)"
                  fontStyle="italic"
                  fontWeight="600"
                  className="signature-text-clear"
                >
                  Pravin
                </text>
                
                {/* Professional underline */}
                <path
                  d="M 10 75 Q 125 82, 235 72"
                  stroke="url(#signatureGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#professionalGlow)"
                  className="signature-underline-clear"
                />
                
                {/* Small flourish at end */}
                <path
                  d="M 235 72 Q 238 70, 240 75"
                  stroke="url(#signatureGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  className="signature-flourish-end"
                />
              </svg>
            </div>
            
            <div className="order-1 md:order-2 relative w-80 h-80 md:w-80 md:h-80 w-64 h-64 flex items-center justify-center -mb-24 md:mb-0">
              {/* Background decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-96 h-96 rounded-full border border-purple-500/20 animate-pulse"></div>
                <div className="absolute w-80 h-80 rounded-full border border-pink-500/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute w-64 h-64 rounded-full border border-blue-500/20 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-2 h-2 bg-purple-500/50 rounded-full animate-float"></div>
                <div className="absolute top-20 right-16 w-3 h-3 bg-pink-500/50 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-16 left-20 w-2 h-2 bg-blue-500/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-indigo-500/50 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-1/2 left-8 w-2 h-2 bg-purple-400/50 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-pink-400/50 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
              </div>
              
              {/* Main photo container */}
              <div className="relative w-72 h-72">
                {/* Multi-layer glow effect */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl opacity-40"></div>
                
                {/* Premium photo frame */}
                <div className="relative w-full h-full rounded-full animate-float">
                  {/* Outer gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 via-pink-500 to-amber-500 p-[3px] shadow-2xl shadow-purple-500/50">
                    {/* Inner gradient glow */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-[2px]">
                      {/* Photo container */}
                      <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/5 relative">
                        <Image
                          src="/pravin.png"
                          alt="Pravin Chettiar"
                          width={288}
                          height={288}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-3 w-64 h-64 flex items-center justify-center opacity-0 pointer-events-none">
              {/* Spacer for balance */}
            </div>
          </div>
          
          <div className="relative mb-8 -mt-56 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-black mb-4 animate-fade-in relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-red-500 drop-shadow-2xl">
                PRAVIN CHETTIAR
              </span>
              {/* Glowing effect behind text */}
              <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 -z-10"></div>
            </h1>
            
            {/* Decorative line under name */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 via-purple-500 to-transparent rounded-full"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up font-light tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Full Stack Developer</span>
            {" & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">UI/UX Enthusiast</span>
          </p>
          
          <div className="flex justify-center gap-4 animate-slide-up">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
