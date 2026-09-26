import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  Search, 
  Maximize2, 
  Camera, 
  Eye, 
  Sparkles, 
  LayoutGrid, 
  Columns,
  MessageSquare,
  Smartphone,
  Grid
} from 'lucide-react';
import { CATEGORIES, GALLERY_ITEMS, BRAND_INFO } from '../data/galleryData';

export default function VisualStream({ 
  selectedCategory, 
  onSelectCategory, 
  onOpenLightbox 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('masonry'); // 'masonry' or 'grid'
  const [mobileColumns, setMobileColumns] = useState(2); // 1 = full feed, 2 = 2-col grid

  // Filter gallery items by category and search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="visual-stream" className="relative py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-bone-400/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-saffron-500/30 text-saffron-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Visual Archive</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-serif font-black tracking-tight text-bone-100 uppercase">
            The Visual <span className="font-serif italic font-normal text-champagne-300">Stream</span>
          </h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-bone-300 font-light max-w-lg">
            An uninterrupted masonry wall showcasing genuine captures across Wedding Shoots, Model Portfolios, Product campaigns, and Commercial assignments.
          </p>
        </div>

        {/* Search & Layout Toggles */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          {/* Quick Search Input */}
          <div className="relative flex-1 sm:flex-initial">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-bone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search shoots, models, weddings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-9 pr-3 py-2 bg-graphite-850 border border-bone-400/20 rounded-full text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all font-mono"
            />
          </div>

          {/* Mobile Grid Layout Toggle (1-Col Feed vs 2-Col Grid) */}
          <div className="sm:hidden flex items-center p-1 bg-graphite-850 rounded-full border border-bone-400/20 text-xs">
            <button
              onClick={() => setMobileColumns(1)}
              className={`p-1.5 rounded-full transition-colors ${
                mobileColumns === 1 ? 'bg-saffron-500 text-graphite-950 font-bold' : 'text-bone-400'
              }`}
              title="1 Column Feed"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileColumns(2)}
              className={`p-1.5 rounded-full transition-colors ${
                mobileColumns === 2 ? 'bg-saffron-500 text-graphite-950 font-bold' : 'text-bone-400'
              }`}
              title="2 Column Grid"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Desktop Layout Switcher */}
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

      {/* Sticky Filter Bar (Touch Horizontal Scroll) */}
      <div className="sticky top-16 sm:top-24 z-30 pb-4 sm:pb-6 mb-6 sm:mb-8 pt-1 backdrop-blur-xl bg-graphite-900/80 border-b border-bone-400/10">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-scroll py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex-shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 sm:gap-2 border active:scale-95 ${
                  isSelected
                    ? 'bg-saffron-500 text-graphite-950 font-bold border-saffron-400 shadow-lg shadow-saffron-500/20'
                    : 'bg-graphite-850/90 text-bone-300 border-bone-400/20 hover:border-bone-400/40 hover:text-bone-100 hover:bg-graphite-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full ${
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
        <div className="py-16 text-center glass-panel rounded-2xl p-8 max-w-md mx-auto">
          <p className="font-serif text-lg sm:text-xl text-bone-200 mb-2">No frames found</p>
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
          // Responsive layout: on mobile uses mobileColumns (1 or 2), on desktop uses masonry/grid
          `grid ${
            mobileColumns === 1 ? 'grid-cols-1' : 'grid-cols-2'
          } sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6`
        }>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
                className="w-full"
              >
                <div 
                  onClick={() => onOpenLightbox(item)}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-graphite-850 border border-bone-400/10 hover:border-saffron-500/40 transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.99]"
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden w-full ${
                    mobileColumns === 1 
                      ? 'aspect-[4/3] sm:aspect-[3/4]' 
                      : item.aspect === 'tall' 
                        ? 'aspect-[3/4]' 
                        : item.aspect === 'square' 
                          ? 'aspect-square' 
                          : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.96] group-hover:brightness-105"
                      onError={(e) => {
                        if (item.fallback && e.target.src !== item.fallback) {
                          e.target.src = item.fallback;
                        }
                      }}
                    />

                    {/* Gradient Overlay for Desktop Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 hidden sm:block" />
                    
                    {/* Top right quick zoom badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-pill flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 text-bone-100">
                      <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Top left category badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-mono uppercase tracking-wider bg-graphite-950/85 text-bone-200 border border-bone-400/20 backdrop-blur-md">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Desktop Hover Metadata Drawer */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex flex-col justify-end">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-bone-100 group-hover:text-champagne-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      
                      {/* Camera EXIF quick peek */}
                      <div className="mt-2 text-[10px] font-mono text-bone-300 flex items-center justify-between border-t border-bone-400/15 pt-2">
                        <span className="flex items-center gap-1 truncate text-champagne-300">
                          <Camera className="w-3 h-3 text-peacock-400" />
                          <span>{item.camera}</span>
                        </span>
                        <span className="text-saffron-400 font-bold">{item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Card Footer (Optimized for finger touch) */}
                  <div className="p-2.5 sm:hidden border-t border-bone-400/10 flex flex-col gap-1">
                    <h4 className="text-[11px] font-serif font-bold text-bone-100 truncate leading-snug">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-[9px] font-mono text-bone-400">
                      <span className="text-champagne-400 truncate max-w-[120px]">{item.camera}</span>
                      <span className="text-saffron-400 font-bold">{item.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Footer Status & WhatsApp Action */}
      <div className="mt-12 sm:mt-16 text-center border-t border-bone-400/10 pt-8 sm:pt-10">
        <p className="text-[11px] sm:text-xs font-mono text-bone-400 uppercase tracking-widest mb-3">
          Showing {filteredItems.length} curated frames by @{BRAND_INFO.brand}
        </p>
        <a
          href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'd%20love%20to%20view%20more%20galleries%20or%20inquire%20about%20a%20shoot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Inquire Full Gallery on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
