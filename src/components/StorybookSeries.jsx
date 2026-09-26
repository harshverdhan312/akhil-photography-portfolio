import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function StorybookSeries({ onOpenLightbox }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const curatedStories = [
    {
      id: "story-01",
      series: "SERIES 01 // WEDDING ESSAYS",
      title: "The Midnight Pheras",
      subtitle: "Sacred Flame, Heirlooms & Emotion",
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
      series: "SERIES 02 // STUDIO CHIAROSCURO",
      title: "Model & Fashion Lookbooks",
      subtitle: "High-Fashion Editorial & Studio Lighting",
      heroImg: "/images/portraits/0B8A1284.jpeg",
      secondaryImgs: [
        "/images/portraits/DSC_3411.jpg.jpeg",
        "/images/portraits/1000140732.jpeg",
        "/images/portraits/file_00000000356c82119921a479c311e799.jpeg"
      ],
      description: "Sculpting light across heavy zari weaves and raw silk textures. A study in tension, minimal backdrop geometry, and the intense poise of contemporary Indian couture."
    },
    {
      id: "story-03",
      series: "SERIES 03 // COMMERCIAL ARCHIVE",
      title: "Twilight River & Industrial Light",
      subtitle: "Product & Architectural Commercial Stills",
      heroImg: "/images/randomclick/IMG_20240815_182548.jpg.jpeg",
      secondaryImgs: [
        "/images/events/0B8A3378.JPG.jpeg",
        "/images/events/0B8A2462.JPG.jpeg",
        "/images/randomclick/1000145786.jpeg"
      ],
      description: "Documenting architectural geometry, products, and dramatic monsoon twilight along ancient river ghats and modern retail spaces."
    }
  ];

  const current = curatedStories[activeStoryIndex];

  return (
    <section id="storybook" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-bone-400/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-saffron-500/30 text-saffron-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-2 sm:mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Visual Narratives</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-serif font-black tracking-tight text-bone-100 uppercase">
            Storybook <span className="font-serif italic font-normal text-champagne-300">Series</span>
          </h2>
        </div>

        {/* Story Selector Buttons */}
        <div className="flex items-center gap-2">
          {curatedStories.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-mono transition-all active:scale-95 ${
                activeStoryIndex === idx
                  ? 'bg-saffron-500 text-graphite-950 font-bold'
                  : 'bg-graphite-850 text-bone-300 hover:text-bone-100 border border-bone-400/15'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Storybook Deck */}
      <div className="glass-panel p-4 sm:p-10 rounded-2xl sm:rounded-3xl border border-bone-400/20 shadow-2xl relative overflow-hidden">
        
        {/* Story Headline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-5 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-saffron-400 font-bold block mb-1">
              {current.series}
            </span>
            <h3 className="text-xl sm:text-4xl font-serif font-black text-bone-100">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-champagne-300 mt-0.5">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Visual Showcase: Large Hero + 3 Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Main Hero Photo */}
          <div 
            onClick={() => {
              const matched = GALLERY_ITEMS.find(i => i.src === current.heroImg) || GALLERY_ITEMS[0];
              onOpenLightbox(matched);
            }}
            className="lg:col-span-7 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group relative aspect-[4/3] bg-graphite-850 border border-bone-400/15 shadow-xl active:scale-[0.99]"
          >
            <img
              src={current.heroImg}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs font-mono text-bone-200">
              <span className="px-2.5 py-1 rounded-full glass-pill text-[10px] sm:text-xs border border-bone-400/20">
                Tap to inspect full frame
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-pill flex items-center justify-center text-saffron-400 group-hover:bg-saffron-500 group-hover:text-graphite-950 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Right: Narrative + 3 Secondary Thumbnails */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-bone-300 font-light leading-relaxed border-l-2 border-saffron-500/60 pl-3 sm:pl-4 italic">
              "{current.description}"
            </p>

            {/* 3 Secondary Image Frames */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {current.secondaryImgs.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const matched = GALLERY_ITEMS.find(i => i.src === imgSrc) || GALLERY_ITEMS[0];
                    onOpenLightbox(matched);
                  }}
                  className="rounded-lg sm:rounded-xl overflow-hidden aspect-square bg-graphite-850 border border-bone-400/15 cursor-pointer group relative shadow-md active:scale-95"
                >
                  <img
                    src={imgSrc}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-graphite-950/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>

            {/* Story Navigation Controls */}
            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-bone-400/10">
              <span className="text-[11px] sm:text-xs font-mono text-bone-400">
                Story {activeStoryIndex + 1} of {curatedStories.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev - 1 + curatedStories.length) % curatedStories.length)}
                  className="p-2 sm:p-2.5 rounded-full glass-pill text-bone-200 hover:text-white transition-colors border border-bone-400/20 active:scale-90"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveStoryIndex((prev) => (prev + 1) % curatedStories.length)}
                  className="p-2 sm:p-2.5 rounded-full glass-pill text-bone-200 hover:text-white transition-colors border border-bone-400/20 active:scale-90"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
