import React, { useState } from 'react';
import { ArrowUpRightIcon, ArrowLeftIcon, ArrowRightIcon, DiamondGlyph } from './icons/CustomIcons';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function StorybookSeries({ onOpenLightbox }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const curatedStories = [
    {
      id: "story-01",
      series: "ESSAY 01 // CEREMONIAL REPORTAGE",
      title: "The Midnight Pheras",
      subtitle: "Sacred Flame, Heirlooms & Raw Sentiments",
      heroImg: "/images/wedding/DSC_9355.jpg.jpeg",
      secondaryImgs: [
        "/images/wedding/DSC_4100.jpg.jpeg",
        "/images/wedding/DSC_5910.jpg.jpeg",
        "/images/wedding/IMG_20260214_012558916_HDR~2.jpg.jpeg"
      ],
      description: "Indian weddings are not mere events; they are sensory epics. We shadowed the celebrations from the dawn Haldi to the solemn 3:45 AM Sindoor ritual, focusing on unscripted glances."
    },
    {
      id: "story-02",
      series: "ESSAY 02 // STUDIO CHIAROSCURO",
      title: "Model & Fashion Lookbooks",
      subtitle: "Haute Couture, Form & Sculpted Light",
      heroImg: "/images/portraits/0B8A1284.jpeg",
      secondaryImgs: [
        "/images/portraits/DSC_3411.jpg.jpeg",
        "/images/portraits/1000140732.jpeg",
        "/images/portraits/file_00000000356c82119921a479c311e799.jpeg"
      ],
      description: "Sculpting directional light across heavy Banarasi brocades and raw silk textures. A study in tension, minimal backdrop geometry, and the intense poise of contemporary Indian couture."
    },
    {
      id: "story-03",
      series: "ESSAY 03 // COMMERCIAL ARCHIVE",
      title: "Twilight River & Industrial Light",
      subtitle: "Product Still Lifes & Architectural Spaces",
      heroImg: "/images/randomclick/IMG_20240815_182548.jpg.jpeg",
      secondaryImgs: [
        "/images/events/0B8A3378.JPG.jpeg",
        "/images/events/0B8A2462.JPG.jpeg",
        "/images/randomclick/1000145786.jpeg"
      ],
      description: "Documenting architectural geometry, product campaigns, and dramatic monsoon twilight along ancient river ghats and modern retail spaces."
    }
  ];

  const current = curatedStories[activeStoryIndex];

  return (
    <section id="storybook" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-white/[0.1]">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-terracotta-400 mb-2">
            <DiamondGlyph className="w-2 h-2 text-terracotta-500" />
            <span>Monograph Essays // 03</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-6xl font-normal tracking-tight text-linen-100 uppercase">
            Curated Visual <span className="italic text-terracotta-400">Essays</span>
          </h2>
        </div>

        {/* Story Selector Buttons */}
        <div className="flex items-center gap-2">
          {curatedStories.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors border ${
                activeStoryIndex === idx
                  ? 'bg-terracotta-500 text-charcoal-950 font-bold border-terracotta-400'
                  : 'bg-[#131315] text-linen-300 border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Storybook Deck */}
      <div className="editorial-panel p-5 sm:p-10 border border-white/[0.1] bg-[#111113]">
        
        {/* Story Headline */}
        <div className="mb-6 sm:mb-8 pb-4 border-b border-white/[0.08]">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-terracotta-400 font-semibold block mb-1">
            {current.series}
          </span>
          <h3 className="text-2xl sm:text-4xl font-editorial font-normal text-linen-100">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans text-linen-300 font-light mt-1">
            {current.subtitle}
          </p>
        </div>

        {/* Visual Showcase: Large Hero + 3 Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Photo */}
          <div 
            onClick={() => {
              const matched = GALLERY_ITEMS.find(i => i.src === current.heroImg) || GALLERY_ITEMS[0];
              onOpenLightbox(matched);
            }}
            className="lg:col-span-7 overflow-hidden cursor-pointer group relative aspect-[4/3] bg-charcoal-950 border border-white/[0.1]"
          >
            <img
              src={current.heroImg}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.94] group-hover:brightness-100"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-linen-200">
              <span className="px-2.5 py-1 bg-charcoal-950/90 text-[10px] border border-white/[0.1]">
                Click to inspect full plate
              </span>
              <div className="w-8 h-8 bg-charcoal-950/90 border border-white/[0.1] flex items-center justify-center text-terracotta-400 group-hover:bg-terracotta-500 group-hover:text-charcoal-950 transition-colors">
                <ArrowUpRightIcon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right: Narrative + 3 Secondary Thumbnails */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <p className="text-xs sm:text-sm text-linen-300 font-light leading-relaxed border-l-2 border-terracotta-500 pl-4 italic">
              "{current.description}"
            </p>

            {/* 3 Secondary Image Frames */}
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-linen-400 mb-2">
                Secondary Plates // Series 0{activeStoryIndex + 1}
              </span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {current.secondaryImgs.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      const matched = GALLERY_ITEMS.find(i => i.src === imgSrc) || GALLERY_ITEMS[0];
                      onOpenLightbox(matched);
                    }}
                    className="overflow-hidden aspect-square bg-charcoal-950 border border-white/[0.08] cursor-pointer group relative"
                  >
                    <img
                      src={imgSrc}
                      alt={`Essay frame ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Story Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <span className="text-[11px] font-mono text-linen-400 tracking-wider">
                Essay {activeStoryIndex + 1} of {curatedStories.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev - 1 + curatedStories.length) % curatedStories.length)}
                  className="p-2.5 bg-[#131315] text-linen-200 hover:text-terracotta-400 border border-white/[0.1] transition-colors"
                  aria-label="Previous essay"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev + 1) % curatedStories.length)}
                  className="p-2.5 bg-[#131315] text-linen-200 hover:text-terracotta-400 border border-white/[0.1] transition-colors"
                  aria-label="Next essay"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
