import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Flame, Eye, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function HeroGateway({ onSelectGateway }) {
  // State for which split panel is hovered on desktop ('left', 'right', or null)
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-saffron-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-vermilion-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-peacock-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Header Typography / Masthead */}
      <div className="max-w-7xl mx-auto w-full mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-bone-400/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-saffron-500/30 text-saffron-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Visual Auteur • @{BRAND_INFO.brand}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-bone-100 uppercase leading-[0.95]">
              AKHIL <span className="italic font-normal font-serif text-champagne-300">Gupta</span>
            </h1>
          </div>

          <div className="sm:max-w-xs text-center sm:text-right">
            <p className="font-sans text-xs sm:text-sm text-bone-300 font-light leading-relaxed">
              Crafting emotionally unscripted weddings, editorial model portraits, and directional commercial campaigns.
            </p>
            <span className="block mt-1 font-mono text-[11px] text-champagne-400/80 tracking-widest uppercase">
              Canon EOS R • 4+ Years Mastery
            </span>
          </div>
        </div>
      </div>

      {/* Dual-Split Interactive Gateway Canvas */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-4 sm:gap-6 min-h-[580px] lg:min-h-[640px]">
        
        {/* FRAME 1: Weddings & Celebrations */}
        <motion.div
          className="relative group rounded-3xl overflow-hidden cursor-pointer border border-bone-400/15 transition-all duration-700 shadow-2xl flex-1"
          animate={{
            flex: hoveredSide === 'left' ? 1.45 : hoveredSide === 'right' ? 0.75 : 1,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectGateway('weddings')}
        >
          {/* Background Image with Parallax / Zoom */}
          <div className="absolute inset-0 bg-graphite-950 overflow-hidden">
            <img
              src="/images/wedding/DSC_9355.jpg.jpeg"
              alt="Wedding Shoot by Akhil Gupta"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop";
              }}
            />
            {/* Color Gradient Overlays (Saffron + Vermilion Sunset Vignette) */}
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-saffron-900/20 via-transparent to-vermilion-900/20 mix-blend-overlay" />
          </div>

          {/* Frame Floating Header Badge */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-wider uppercase text-saffron-300 border border-saffron-500/30 flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-saffron-400 fill-saffron-400/30" />
              <span>Sacred Traditions • Royal Pheras</span>
            </span>
            <div className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-bone-100 group-hover:bg-saffron-500 group-hover:text-graphite-950 transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom Caption & Interactive CTA */}
          <div className="relative z-10 p-6 sm:p-8 mt-auto flex flex-col justify-end">
            <span className="font-mono text-xs uppercase tracking-widest text-saffron-400 font-semibold mb-1">
              01 / CATEGORY SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone-100 group-hover:text-champagne-300 transition-colors leading-tight">
              Weddings & Celebrations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-bone-300 font-light max-w-md line-clamp-2 sm:line-clamp-3">
              Capturing raw emotion, sacred Vedic rituals, and unrestrained joy across grand celebration estates and palace destinations.
            </p>

            {/* Micro Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-bone-300">
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Haldi Euphoria</span>
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Varmala Lights</span>
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Destination Galas</span>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-saffron-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span>Explore Wedding Archive (11+ Works)</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* FRAME 2: Commercial, Fashion & Portraits */}
        <motion.div
          className="relative group rounded-3xl overflow-hidden cursor-pointer border border-bone-400/15 transition-all duration-700 shadow-2xl flex-1"
          animate={{
            flex: hoveredSide === 'right' ? 1.45 : hoveredSide === 'left' ? 0.75 : 1,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectGateway('portraits')}
        >
          {/* Background Image with Parallax / Zoom */}
          <div className="absolute inset-0 bg-graphite-950 overflow-hidden">
            <img
              src="/images/portraits/0B8A1284.jpeg"
              alt="Model Editorial Portrait by Akhil Gupta"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop";
              }}
            />
            {/* Color Gradient Overlays (Deep Peacock + Lapis Lazuli Studio Vignette) */}
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-peacock-900/20 via-transparent to-lapis-900/20 mix-blend-overlay" />
          </div>

          {/* Frame Floating Header Badge */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-wider uppercase text-peacock-300 border border-peacock-500/30 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-peacock-400" />
              <span>Model Portraits • Product • Commercial</span>
            </span>
            <div className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-bone-100 group-hover:bg-peacock-400 group-hover:text-graphite-950 transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom Caption & Interactive CTA */}
          <div className="relative z-10 p-6 sm:p-8 mt-auto flex flex-col justify-end">
            <span className="font-mono text-xs uppercase tracking-widest text-peacock-400 font-semibold mb-1">
              02 / CATEGORY SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-bone-100 group-hover:text-peacock-300 transition-colors leading-tight">
              Model, Product & Commercial
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-bone-300 font-light max-w-md line-clamp-2 sm:line-clamp-3">
              Sculpted 50mm f/1.8 lighting, agency-grade model lookbooks, and high-conversion commercial still lifes.
            </p>

            {/* Micro Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-bone-300">
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Model Lookbooks</span>
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Product Shoots</span>
              <span className="px-2.5 py-1 rounded-md bg-graphite-900/80 border border-bone-400/10">Studio Chiaroscuro</span>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-peacock-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span>Explore Editorial & Commercial (12+ Works)</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div className="mt-8 text-center flex flex-col items-center justify-center gap-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-bone-400 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-saffron-400 animate-spin" style={{ animationDuration: '8s' }} />
          Scroll down to enter the Complete Visual Stream
        </span>
        <div className="w-4 h-7 rounded-full border border-bone-400/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-saffron-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
