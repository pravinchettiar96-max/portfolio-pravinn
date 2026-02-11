'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#services', label: 'Services', icon: '⚙️' },
    { href: '#skills', label: 'Skills', icon: '💡' },
    { href: '#projects', label: 'Projects', icon: '🚀' },
    { href: '#certifications', label: 'Certifications', icon: '🏆' },
    { href: '#education', label: 'Education', icon: '🎓' },
    { href: '#institutions', label: 'Institutions', icon: '🏫' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20 border-b border-purple-500/30' 
        : 'bg-gradient-to-b from-gray-900/90 to-transparent backdrop-blur-sm'
    }`}>
      {/* Simple gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - clean with glow animation */}
          <div className="flex-shrink-0 group relative">
            {/* Animated glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            
            {/* PC Text with animations */}
            <span className="relative text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 group-hover:scale-110 inline-block transition-all duration-300 cursor-pointer bg-[length:200%_auto] animate-gradient-x filter group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
              PC
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="group relative px-4 py-2 text-gray-300 hover:text-white font-semibold transition-all duration-300 rounded-lg"
                >
                  {/* Glow background */}
                  <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-all duration-300 rounded-lg blur-sm"></span>
                  
                  {/* Solid background */}
                  <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300 rounded-lg"></span>
                  
                  {/* Animated underline with glow */}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                  
                  {/* Text with glow */}
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
              
              {/* Contact Button - enhanced with animations */}
              <Link 
                href="#contact" 
                className="relative ml-4 px-8 py-2.5 font-bold rounded-full group overflow-hidden"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x"></span>
                
                {/* Hover overlay with reverse gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                
                {/* Pulsing glow effect */}
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 -z-10 animate-pulse"></span>
                
                {/* Border animation */}
                <span className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-full transition-all duration-300"></span>
                
                {/* Shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </span>
                
                {/* Text with scale animation */}
                <span className="relative z-10 text-white group-hover:scale-110 inline-block transition-transform duration-300">
                  Contact
                </span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button - simplified */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-200 group"
            >
              <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-colors duration-200 rounded-lg"></span>
              <svg className="relative z-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - simplified */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-purple-500/30 animate-slide-down">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="group relative block px-4 py-3 rounded-lg text-gray-300 hover:text-white font-semibold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {/* Glow background */}
                <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-all duration-300 rounded-lg blur-sm"></span>
                
                {/* Solid background */}
                <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300 rounded-lg"></span>
                
                {/* Content with glow */}
                <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
            
            {/* Contact Button - enhanced with animations */}
            <Link 
              href="#contact" 
              className="relative block mt-3 px-4 py-3 font-bold text-center rounded-lg group overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x rounded-lg"></span>
              
              {/* Hover overlay with reverse gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>
              
              {/* Pulsing glow effect */}
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-all duration-500 -z-10 animate-pulse"></span>
              
              {/* Border animation */}
              <span className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-lg transition-all duration-300"></span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </span>
              
              {/* Text with scale animation */}
              <span className="relative z-10 text-white text-lg group-hover:scale-110 inline-block transition-transform duration-300">
                Contact Me
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
