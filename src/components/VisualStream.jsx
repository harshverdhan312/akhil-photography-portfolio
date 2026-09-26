import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  Maximize2, 
  MapPin, 
  Calendar, 
  Camera, 
  Eye, 
  Sparkles, 
  LayoutGrid, 
  Columns,
  MessageSquare
} from 'lucide-react';
import { CATEGORIES, GALLERY_ITEMS, BRAND_INFO } from '../data/galleryData';

export default function VisualStream({ 
  selectedCategory, 
  onSelectCategory, 
  onOpenLightbox 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('masonry'); // 'masonry' or 'grid'

  // Filter gallery items by category and search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="visual-stream" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-bone-400/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-saffron-500/30 text-saffron-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Visual Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-bone-100 uppercase">
            The Visual <span className="font-serif italic font-normal text-champagne-300">Stream</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-bone-300 font-light max-w-lg">
            An uninterrupted masonry wall showcasing genuine captures across Wedding Shoots, Model Portfolios, Product campaigns, and Commercial assignments.
          </p>
        </div>

        {/* Search & Layout Toggles */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-bone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search shoots, models, weddings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-graphite-850 border border-bone-400/20 rounded-full text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 w-48 sm:w-64 transition-all font-mono"
            />
          </div>

          {/* Layout Mode Switcher */}
          <div className="hidden sm:flex items-center p-1 bg-graphite-850 rounded-full border border-bone-400/20 text-xs">
            <button
              onClick={() => setViewMode('masonry')}
              className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                viewMode === 'masonry' 
                  ? 'bg-saffron-500 text-graphite-950 font-semibold' 
                  : 'text-bone-400 hover:text-bone-200'
              }`}
              title="Masonry Column Flow"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Masonry</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                viewMode === 'grid' 
                  ? 'bg-saffron-500 text-graphite-950 font-semibold' 
                  : 'text-bone-400 hover:text-bone-200'
              }`}
              title="Uniform Editorial Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Uniform</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 sm:top-24 z-30 pb-6 mb-8 pt-2 backdrop-blur-xl bg-graphite-900/70 border-b border-bone-400/10">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-saffron-500 text-graphite-950 font-bold border-saffron-400 shadow-lg shadow-saffron-500/20 scale-105'
                    : 'bg-graphite-850/90 text-bone-300 border-bone-400/20 hover:border-bone-400/40 hover:text-bone-100 hover:bg-graphite-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-graphite-950 text-saffron-400' : 'bg-graphite-700 text-bone-400'
                }`}>
                  {cat.id === 'all' 
                    ? GALLERY_ITEMS.length 
                    : GALLERY_ITEMS.filter(i => i.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Items Display */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center glass-panel rounded-3xl p-10 max-w-md mx-auto">
          <p className="font-serif text-xl text-bone-200 mb-2">No frames found</p>
          <p className="text-xs text-bone-400 font-mono mb-4">Try adjusting your filter or search query.</p>
          <button
            onClick={() => {
              onSelectCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-full bg-saffron-500 text-graphite-950 font-semibold text-xs font-mono"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className={
          viewMode === 'masonry'
            ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        }>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
                className={`${viewMode === 'masonry' ? 'masonry-item' : 'w-full'}`}
              >
                <div 
                  onClick={() => onOpenLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-graphite-850 border border-bone-400/10 hover:border-saffron-500/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-saffron-500/10"
                >
                  {/* Image Container with native aspect handling */}
                  <div className={`relative overflow-hidden w-full ${
                    viewMode === 'grid' 
                      ? 'aspect-[4/5]' 
                      : item.aspect === 'tall' 
                        ? 'aspect-[3/4]' 
                        : item.aspect === 'square' 
                          ? 'aspect-square' 
                          : 'aspect-[16/10]'
                  }`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.96] group-hover:brightness-105"
                      onError={(e) => {
                        if (item.fallback && e.target.src !== item.fallback) {
                          e.target.src = item.fallback;
                        }
                      }}
                    />

                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300" />
                    
                    {/* Top right quick zoom badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass-pill flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-bone-100 hover:bg-saffron-500 hover:text-graphite-950">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Top left category badge */}
                    <div className="absolute top-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-graphite-950/80 text-bone-200 border border-bone-400/20 backdrop-blur-md">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Bottom Metadata Revealed on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                      <h3 className="font-serif text-base font-bold text-bone-100 group-hover:text-champagne-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      
                      <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-bone-300 border-t border-bone-400/15 pt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-saffron-400" />
                          <span className="truncate max-w-[150px]">{item.location}</span>
                        </span>
                        <span className="text-champagne-400 font-semibold">{item.year}</span>
                      </div>

                      {/* Camera EXIF quick peek */}
                      <div className="mt-1 text-[10px] font-mono text-bone-400 flex items-center gap-1.5 truncate">
                        <Camera className="w-2.5 h-2.5 text-peacock-400" />
                        <span>{item.camera}</span>
                      </div>
                    </div>
                  </div>

                  {/* Always-visible minimalist footer card for mobile touch devices */}
                  <div className="p-3 sm:hidden border-t border-bone-400/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-serif font-bold text-bone-100 truncate max-w-[200px]">{item.title}</h4>
                      <p className="text-[10px] font-mono text-bone-400 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-saffron-400" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-graphite-800 text-champagne-400">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Infinite Scroll / Footer Status */}
      <div className="mt-16 text-center border-t border-bone-400/10 pt-10">
        <p className="text-xs font-mono text-bone-400 uppercase tracking-widest mb-3">
          Showing {filteredItems.length} curated frames from the Kanpur Master Archive
        </p>
        <a
          href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'd%20love%20to%20see%20more%20full-resolution%20galleries%20from%20your%20archive.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill border border-bone-400/30 text-xs font-mono text-saffron-300 hover:text-white hover:bg-saffron-600/30 transition-all hover:scale-105"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
          <span>Request Extended Private Client Galleries on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
