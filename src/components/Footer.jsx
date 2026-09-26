import React from 'react';
import { Camera, ArrowUp, MessageSquare, Phone, Mail, Instagram, MapPin, Heart, GraduationCap, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite-950 border-t border-bone-400/10 text-bone-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-bone-400/10">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 px-2 py-1 rounded-xl bg-graphite-900 border border-champagne-500/30 flex items-center justify-center">
                <img 
                  src={BRAND_INFO.logoSrc} 
                  alt={BRAND_INFO.brand} 
                  className="h-8 w-auto object-contain filter brightness-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-bone-100">
                AKHIL <span className="text-champagne-400 font-sans font-light text-sm uppercase tracking-widest">Gupta</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-bone-400 font-light leading-relaxed max-w-sm">
              Independent commercial, wedding, and model portrait photographer. Alumnus of <strong className="text-bone-200">Michigan State University (US)</strong> and certified in <strong className="text-bone-200">Basic to Beyond Photography</strong>.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-bone-400">
              <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
              <span>Available for Worldwide Commissions & Destination Shoots</span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Camera className="w-3.5 h-3.5 text-peacock-400" />
              <span>Canon EOS R • 17-35mm & 50mm f/1.8</span>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bone-200 font-semibold mb-4">
              Portfolio
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-saffron-400 transition-colors">
                  01 / Archive Gateway
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('visual-stream')} className="hover:text-saffron-400 transition-colors">
                  02 / Complete Visual Stream
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('storybook')} className="hover:text-saffron-400 transition-colors">
                  03 / Storybook Series
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-saffron-400 transition-colors">
                  04 / About Akhil Gupta
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-saffron-400 transition-colors">
                  05 / Book on WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels & Instagram */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-bone-200 font-semibold mb-4">
              Direct Contact & Socials
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20inquiring%20about%20photography%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-emerald-400 border border-bone-400/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp: 8960830821</span>
              </a>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-saffron-300 border border-bone-400/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call: 8960830821</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-bone-300 border border-bone-400/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-champagne-400" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://instagram.com/akhilphotographyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-pink-400 border border-bone-400/10 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="truncate">@akhilphotographyy</span>
                </a>
                <a
                  href="https://instagram.com/akhilg896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-graphite-900 hover:bg-graphite-850 text-pink-400 border border-bone-400/10 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="truncate">@akhilg896</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-bone-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Akhil Gupta (@{BRAND_INFO.brand}). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-bone-400">4+ Years • Michigan State University • Canon EOS R</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-pill text-bone-300 hover:text-white hover:bg-saffron-500 hover:text-graphite-950 transition-colors border border-bone-400/20 flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-bold pr-1">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
