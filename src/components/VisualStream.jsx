import React from 'react';
import { CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function VisualStream({ 
  selectedCategory, 
  onSelectCategory, 
  onOpenLightbox 
}) {
  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="works" className="py-16 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      
      {/* Section Header & Minimal Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-4 border-b border-white/[0.1]">
        <div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-terracotta-400 block mb-1">
            Visual Archive
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-linen-100 uppercase tracking-tight">
            Selected <span className="italic text-terracotta-400">Works</span>
          </h2>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar text-xs font-mono uppercase tracking-[0.16em]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`pb-1 transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'text-terracotta-400 font-semibold border-b border-terracotta-500'
                  : 'text-linen-400 hover:text-linen-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Large-Span Editorial Plates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Frame */}
            <div className={`overflow-hidden bg-[#111113] border border-white/[0.08] relative ${
              item.aspect === 'tall' 
                ? 'aspect-[4/5]' 
                : item.aspect === 'wide' 
                  ? 'aspect-[16/10]' 
                  : 'aspect-square'
            }`}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 filter brightness-[0.93] group-hover:brightness-100"
                onError={(e) => {
                  if (item.fallback && e.target.src !== item.fallback) {
                    e.target.src = item.fallback;
                  }
                }}
              />
            </div>

            {/* Minimal Under-Image Caption */}
            <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-2">
              <div>
                <h3 className="font-editorial text-lg sm:text-xl text-linen-100 group-hover:text-terracotta-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-linen-400 mt-0.5">
                  {item.location}
                </p>
              </div>

              <div className="text-right flex-shrink-0 font-mono text-[10px] text-linen-400 uppercase tracking-widest">
                <span className="text-terracotta-400">{item.categoryLabel}</span> • {item.year}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
