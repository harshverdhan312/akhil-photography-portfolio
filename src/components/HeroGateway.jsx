import React, { useState } from 'react';
import { ArrowUpRightIcon } from './icons/CustomIcons';
import { BRAND_INFO } from '../data/galleryData';

export default function HeroGateway({ onSelectCategory }) {
  const [activeTab, setActiveTab] = useState('weddings');

  const showcaseFrames = {
    weddings: {
      id: 'weddings',
      title: 'Weddings & Celebrations',
      desc: 'Emotionally unscripted ceremonies, sacred pheras, and raw festive joy.',
      src: '/images/wedding/DSC_9355.jpg.jpeg',
      fallback: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
      tag: '11 Curated Plates'
    },
    portraits: {
      id: 'portraits',
      title: 'Model & Fashion Portraits',
      desc: 'Sculpted 50mm f/1.8 chiaroscuro lighting, lookbooks, and editorial test shoots.',
      src: '/images/portraits/0B8A1284.jpeg',
      fallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop',
      tag: '7 Curated Plates'
    },
    commercial: {
      id: 'commercial',
      title: 'Product & Commercial',
      desc: 'Precision still-life, architectural lines, and brand campaigns.',
      src: '/images/randomclick/IMG_20240815_182548.jpg.jpeg',
      fallback: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop',
      tag: '5 Curated Plates'
    }
  };

  const current = showcaseFrames[activeTab];

  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      
      {/* Title & Introduction */}
      <div className="max-w-4xl mb-10 sm:mb-14">
        <h1 className="font-editorial text-4xl sm:text-7xl lg:text-8xl font-normal text-linen-100 uppercase tracking-tight leading-[0.95]">
          Auteur Photography & <br />
          <span className="italic text-terracotta-400">Cinematic Monograph</span>
        </h1>
        
        <p className="mt-6 text-sm sm:text-base text-linen-300 font-light max-w-2xl leading-relaxed">
          The curated photography portfolio of <strong className="text-linen-100 font-medium">Akhil Gupta</strong> — Michigan State University alumnus and certified photographer capturing weddings, fashion lookbooks, and directional commercial assignments.
        </p>
      </div>

      {/* Hero Showcase Tabs */}
      <div className="flex items-center gap-4 sm:gap-8 border-b border-white/[0.1] pb-3 mb-6 overflow-x-auto no-scrollbar text-xs font-mono uppercase tracking-[0.18em]">
        <button
          onClick={() => setActiveTab('weddings')}
          className={`pb-2 transition-colors relative ${
            activeTab === 'weddings'
              ? 'text-terracotta-400 font-semibold'
              : 'text-linen-400 hover:text-linen-100'
          }`}
        >
          01 / Weddings
          {activeTab === 'weddings' && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-terracotta-500" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('portraits')}
          className={`pb-2 transition-colors relative ${
            activeTab === 'portraits'
              ? 'text-terracotta-400 font-semibold'
              : 'text-linen-400 hover:text-linen-100'
          }`}
        >
          02 / Model & Portraits
          {activeTab === 'portraits' && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-terracotta-500" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('commercial')}
          className={`pb-2 transition-colors relative ${
            activeTab === 'commercial'
              ? 'text-terracotta-400 font-semibold'
              : 'text-linen-400 hover:text-linen-100'
          }`}
        >
          03 / Commercial
          {activeTab === 'commercial' && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-terracotta-500" />
          )}
        </button>
      </div>

      {/* Large-Scale Featured Frame */}
      <div 
        onClick={() => onSelectCategory(current.id)}
        className="group relative cursor-pointer overflow-hidden border border-white/[0.1] bg-[#111113] aspect-[16/10] sm:aspect-[21/9] max-h-[640px] w-full"
      >
        <img
          key={current.id}
          src={current.src}
          alt={current.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 filter brightness-[0.92] group-hover:brightness-100"
          onError={(e) => {
            e.target.src = current.fallback;
          }}
        />

        {/* Minimal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />

        {/* Floating Caption */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-terracotta-400 block mb-1">
              {current.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-linen-100 group-hover:text-terracotta-300 transition-colors">
              {current.title}
            </h2>
            <p className="text-xs sm:text-sm text-linen-300 font-light max-w-xl mt-1 hidden sm:block">
              {current.desc}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-terracotta-400 font-semibold group-hover:translate-x-1 transition-transform">
            <span>Explore Category</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

    </section>
  );
}
