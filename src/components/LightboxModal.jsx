import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Info, 
  Share2, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Camera, 
  Sliders, 
  Check, 
  Sparkles,
  Phone
} from 'lucide-react';
import { BRAND_INFO, GALLERY_ITEMS } from '../data/galleryData';

export default function LightboxModal({ item, onClose, onNavigateItem }) {
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = fit, 1.6 = zoom in
  const [showInfo, setShowInfo] = useState(true);
  const [copied, setCopied] = useState(false);

  // Find index of current item
  const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
  const totalItems = GALLERY_ITEMS.length;

  const handlePrev = useCallback(() => {
    setZoomLevel(1);
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    onNavigateItem(GALLERY_ITEMS[prevIndex]);
  }, [currentIndex, totalItems, onNavigateItem]);

  const handleNext = useCallback(() => {
    setZoomLevel(1);
    const nextIndex = (currentIndex + 1) % totalItems;
    onNavigateItem(GALLERY_ITEMS[nextIndex]);
  }, [currentIndex, totalItems, onNavigateItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'i' || e.key === 'I') setShowInfo((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  // Prevent background scrolling while modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(
    `Hi Akhil, I'm viewing your portfolio frame: "${item.title}" (${item.categoryLabel}). I'd love to inquire about booking a similar shoot with @${BRAND_INFO.brand}.`
  )}`;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/95 backdrop-blur-2xl p-2 sm:p-6"
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 pointer-events-none">
          {/* Index Counter */}
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-bone-300 border border-bone-400/20">
              <span className="text-saffron-400 font-bold">{currentIndex + 1}</span> / {totalItems}
            </span>
            <span className="hidden md:inline-block text-xs font-mono text-bone-400">
              Press <kbd className="px-1.5 py-0.5 rounded bg-graphite-800 text-bone-200 border border-bone-400/20">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-graphite-800 text-bone-200 border border-bone-400/20">→</kbd> to navigate
            </span>
          </div>

          {/* Action Tools */}
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
            {/* Zoom Toggle */}
            <button
              onClick={() => setZoomLevel(zoomLevel === 1 ? 1.75 : 1)}
              className="p-2.5 rounded-full glass-pill text-bone-300 hover:text-white hover:bg-graphite-800 transition-colors border border-bone-400/20"
              title={zoomLevel === 1 ? "Zoom in" : "Reset zoom"}
            >
              {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            </button>

            {/* Info Drawer Toggle */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`p-2.5 rounded-full glass-pill transition-colors border ${
                showInfo 
                  ? 'bg-saffron-500 text-graphite-950 border-saffron-400 font-bold' 
                  : 'text-bone-300 hover:text-white border-bone-400/20'
              }`}
              title="Toggle EXIF Details"
            >
              <Info className="w-4 h-4" />
            </button>

            {/* Share Link */}
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full glass-pill text-bone-300 hover:text-white hover:bg-graphite-800 transition-colors border border-bone-400/20"
              title="Copy portfolio link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close Lightbox */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-full glass-pill text-bone-300 hover:text-vermilion-400 hover:bg-graphite-800 transition-colors border border-bone-400/20"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Navigation Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full glass-pill text-bone-200 hover:text-white hover:bg-saffron-500 hover:text-graphite-950 transition-all duration-300 border border-bone-400/20 group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full glass-pill text-bone-200 hover:text-white hover:bg-saffron-500 hover:text-graphite-950 transition-all duration-300 border border-bone-400/20 group"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Central Display Canvas */}
        <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center overflow-hidden pt-12 sm:pt-0">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: zoomLevel }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`relative max-h-full max-w-full transition-transform duration-300 cursor-${zoomLevel > 1 ? 'grab' : 'zoom-in'}`}
            onClick={() => setZoomLevel(zoomLevel === 1 ? 1.75 : 1)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-bone-400/10"
              onError={(e) => {
                if (item.fallback && e.target.src !== item.fallback) {
                  e.target.src = item.fallback;
                }
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Details Drawer (Collapsible) */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 max-w-lg glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-bone-400/20 shadow-2xl z-30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-saffron-500/20 text-saffron-300 border border-saffron-500/30">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-bone-100 mt-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-champagne-400 font-bold px-2 py-1 rounded bg-graphite-850 border border-bone-400/10">
                  {item.year}
                </span>
              </div>

              {/* Story / Atmosphere */}
              <p className="mt-2.5 text-xs text-bone-300 font-light leading-relaxed border-l-2 border-saffron-500/60 pl-3 italic">
                "{item.story}"
              </p>

              {/* Location & EXIF Metadata */}
              <div className="mt-4 pt-3 border-t border-bone-400/10 grid grid-cols-2 gap-2 text-xs font-mono text-bone-300">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Camera className="w-3.5 h-3.5 text-peacock-400 flex-shrink-0" />
                  <span className="truncate">{item.camera}</span>
                </div>
              </div>

              {/* Technical EXIF grid */}
              {item.exif && (
                <div className="mt-2 grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono text-bone-400 bg-graphite-850/80 p-2 rounded-xl border border-bone-400/10">
                  <div>
                    <span className="block text-[9px] text-bone-500 uppercase">Shutter</span>
                    <span className="text-bone-200 font-semibold">{item.exif.shutter}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-bone-500 uppercase">Aperture</span>
                    <span className="text-bone-200 font-semibold">{item.exif.aperture}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-bone-500 uppercase">ISO</span>
                    <span className="text-bone-200 font-semibold">{item.exif.iso}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-bone-500 uppercase">Focal</span>
                    <span className="text-bone-200 font-semibold">{item.exif.focal}</span>
                  </div>
                </div>
              )}

              {/* Direct WhatsApp Shoot Inquiry CTA for this exact frame */}
              <div className="mt-4 pt-2 flex items-center gap-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Inquire About This Style on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
