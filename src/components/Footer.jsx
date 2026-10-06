import React from 'react';
import { ArrowUpIcon } from './icons/CustomIcons';
import { BRAND_INFO } from '../data/galleryData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-white/[0.08] text-linen-400 py-10 sm:py-12 px-4 sm:px-8 lg:px-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div>
          <span className="font-display text-sm font-bold tracking-[0.2em] text-linen-100 uppercase block mb-1">
            AKHIL GUPTA
          </span>
          <p className="text-[11px] text-linen-400">
            © {new Date().getFullYear()} Akhil Gupta Photography. Michigan State University Alumnus.
          </p>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <a
            href="https://instagram.com/akhilphotographyy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta-400 transition-colors"
          >
            @akhilphotographyy
          </a>
          <span>•</span>
          <a
            href="https://instagram.com/akhilg896"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta-400 transition-colors"
          >
            @akhilg896
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-terracotta-400 transition-colors uppercase tracking-wider"
          >
            <ArrowUpIcon className="w-3 h-3" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
