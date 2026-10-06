import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/galleryData';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0E]/95 border-b border-white/[0.08] py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Masthead */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group focus:outline-none"
        >
          <span className="font-display text-base sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-linen-100 uppercase group-hover:text-terracotta-400 transition-colors">
            AKHIL GUPTA
          </span>
          <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] text-linen-400 uppercase">
            Kanpur • Worldwide
          </span>
        </button>

        {/* Minimal Navigation Links */}
        <nav className="flex items-center gap-3.5 sm:gap-8 lg:gap-10">
          <button
            onClick={() => onNavigate('works')}
            className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
              activeSection === 'works'
                ? 'text-terracotta-400 font-semibold'
                : 'text-linen-300 hover:text-linen-100'
            }`}
          >
            Works
          </button>
          
          <button
            onClick={() => onNavigate('about')}
            className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
              activeSection === 'about'
                ? 'text-terracotta-400 font-semibold'
                : 'text-linen-300 hover:text-linen-100'
            }`}
          >
            About
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`text-xs font-mono uppercase tracking-[0.18em] px-3.5 py-1.5 border transition-all ${
              activeSection === 'contact'
                ? 'bg-terracotta-500 text-charcoal-950 border-terracotta-400 font-bold'
                : 'border-white/[0.15] text-linen-200 hover:border-terracotta-400 hover:text-terracotta-400'
            }`}
          >
            Inquire
          </button>
        </nav>

      </div>
    </header>
  );
}
