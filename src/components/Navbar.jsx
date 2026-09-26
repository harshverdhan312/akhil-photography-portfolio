import React, { useState, useEffect } from 'react';
import { Camera, MessageSquare, Phone, Menu, X, ArrowUpRight, Sparkles, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function Navbar({ activeSection, onNavigate, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Archive' },
    { id: 'visual-stream', label: 'Visual Stream' },
    { id: 'storybook', label: 'Storybooks' },
    { id: 'about', label: 'About & Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Mark / Logo with Proper Crisp Dimensions */}
          <button 
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative h-11 sm:h-12 px-2.5 py-1 rounded-xl bg-graphite-900/95 border border-champagne-500/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg backdrop-blur-md">
              <img 
                src={BRAND_INFO.logoSrc} 
                alt={BRAND_INFO.brand} 
                className="h-8 sm:h-9 w-auto max-w-[120px] sm:max-w-[150px] object-contain filter brightness-110 contrast-105 drop-shadow"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden items-center gap-1.5 text-saffron-400 font-mono text-xs">
                <Camera className="w-4 h-4" />
                <span className="font-bold">{BRAND_INFO.brand}</span>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-bone-100 group-hover:text-saffron-400 transition-colors">
                AKHIL <span className="font-sans font-light text-xs sm:text-sm tracking-widest text-champagne-400 uppercase">Gupta</span>
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-saffron-400 font-semibold">
                @{BRAND_INFO.brand}
              </span>
            </div>
          </button>


          {/* Right: Nav Links & Direct WhatsApp CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-bone-400/20">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full ${
                    activeSection === link.id
                      ? 'bg-saffron-500 text-graphite-950 font-semibold shadow-sm'
                      : 'text-bone-300 hover:text-bone-100 hover:bg-graphite-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Direct WhatsApp Quick CTA */}
            <a
              href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I%20came%20across%20@${BRAND_INFO.brand}%20and%20would%20like%20to%20inquire%20about%20a%20shoot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 border border-emerald-400/30"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-bone-300 hover:text-saffron-400 bg-graphite-850 hover:bg-graphite-800 rounded-full border border-bone-400/20 transition-all"
              title="Call Akhil Gupta directly"
            >
              <Phone className="w-3.5 h-3.5 text-saffron-400" />
              <span>8960830821</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-graphite-850 text-bone-200 hover:text-white border border-bone-400/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-lg mx-auto p-5 rounded-2xl glass-panel border border-bone-400/20 shadow-2xl backdrop-blur-2xl animate-in fade-in duration-200">
            {/* Status bar in mobile */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-bone-400/10 text-xs font-mono text-bone-300">
              <span className="flex items-center gap-1.5 text-champagne-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>@{BRAND_INFO.brand}</span>
              </span>
              <span className="text-saffron-400 text-[11px] font-bold">4+ Years Experience</span>
            </div>

            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-saffron-500/20 text-saffron-400 font-bold border border-saffron-500/30'
                      : 'text-bone-200 hover:bg-graphite-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </button>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-bone-400/10">
              <a
                href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I%20came%20across%20@${BRAND_INFO.brand}%20and%20would%20like%20to%20inquire%20about%20a%20shoot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-graphite-850 hover:bg-graphite-750 text-saffron-400 rounded-xl text-xs font-mono font-medium border border-bone-400/10"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 8960830821</span>
              </a>
            </div>

            {/* Instagram links in mobile menu */}
            <div className="mt-3 pt-2 border-t border-bone-400/10 flex items-center justify-between text-[11px] font-mono text-bone-400">
              <a href="https://instagram.com/akhilphotographyy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 flex items-center gap-1">
                <Instagram className="w-3 h-3 text-pink-400" />
                <span>@akhilphotographyy</span>
              </a>
              <a href="https://instagram.com/akhilg896" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 flex items-center gap-1">
                <span>@akhilg896</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
