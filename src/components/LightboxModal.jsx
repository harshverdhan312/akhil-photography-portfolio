import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloseIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  ZoomInIcon, 
  ZoomOutIcon, 
  InfoIcon, 
  ShareIcon, 
  WhatsAppIcon, 
  ApertureIcon, 
  CheckIcon,
  DiamondGlyph
} from './icons/CustomIcons';
import { BRAND_INFO, GALLERY_ITEMS } from '../data/galleryData';

export default function LightboxModal({ item, onClose, onNavigateItem }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [copied, setCopied] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

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
    `Hi Akhil, I'm viewing your portfolio frame: "${item.title}" (${item.categoryLabel}). I'd love to inquire about booking a similar commission with @${BRAND_INFO.brand}.`
  )}`;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#080809]/98 p-2 sm:p-6 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 pointer-events-none">
          {/* Index Counter */}
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="px-3 py-1.5 bg-[#131315] text-[11px] font-mono text-linen-300 border border-white/[0.1]">
              PLATE <span className="text-terracotta-400 font-bold">{currentIndex + 1}</span> / {totalItems}
            </span>
            <span className="hidden md:inline-block text-[11px] font-mono text-linen-400 uppercase tracking-widest">
              Keyboard: [← / →] Navigate • [I] Technical EXIF
            </span>
          </div>

          {/* Action Tools */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Zoom Toggle */}
            <button
              onClick={() => setZoomLevel(zoomLevel === 1 ? 1.6 : 1)}
              className="p-2.5 bg-[#131315] text-linen-300 hover:text-white border border-white/[0.1] transition-colors"
              title={zoomLevel === 1 ? "Magnify Plate" : "Reset Zoom"}
            >
              {zoomLevel === 1 ? <ZoomInIcon className="w-4 h-4" /> : <ZoomOutIcon className="w-4 h-4" />}
            </button>

            {/* Info Drawer Toggle */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`p-2.5 transition-colors border ${
                showInfo 
                  ? 'bg-terracotta-500 text-charcoal-950 border-terracotta-400 font-bold' 
                  : 'bg-[#131315] text-linen-300 hover:text-white border-white/[0.1]'
              }`}
              title="Toggle Technical EXIF & Context"
            >
              <InfoIcon className="w-4 h-4" />
            </button>

            {/* Share Link */}
            <button
              onClick={handleShare}
              className="p-2.5 bg-[#131315] text-linen-300 hover:text-white border border-white/[0.1] transition-colors"
              title="Copy link"
            >
              {copied ? <CheckIcon className="w-4 h-4 text-terracotta-400" /> : <ShareIcon className="w-4 h-4" />}
            </button>

            {/* Close Lightbox */}
            <button
              onClick={onClose}
              className="p-2.5 bg-[#131315] text-linen-300 hover:text-terracotta-400 border border-white/[0.1] transition-colors"
              title="Close viewer (Esc)"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Previous Navigation Arrow (Desktop) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-[#131315] text-linen-200 hover:bg-terracotta-500 hover:text-charcoal-950 transition-colors border border-white/[0.1]"
          aria-label="Previous image"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        {/* Next Navigation Arrow (Desktop) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 bg-[#131315] text-linen-200 hover:bg-terracotta-500 hover:text-charcoal-950 transition-colors border border-white/[0.1]"
          aria-label="Next image"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>

        {/* Central Display Plate */}
        <div className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-16 sm:py-0">
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: zoomLevel }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative max-h-full max-w-full transition-transform duration-200 cursor-${zoomLevel > 1 ? 'grab' : 'zoom-in'}`}
            onClick={() => setZoomLevel(zoomLevel === 1 ? 1.6 : 1)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="max-h-[68vh] sm:max-h-[80vh] w-auto max-w-full object-contain border border-white/[0.1] bg-charcoal-950"
              onError={(e) => {
                if (item.fallback && e.target.src !== item.fallback) {
                  e.target.src = item.fallback;
                }
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Persistent WhatsApp Bar for Mobile */}
        <div className="sm:hidden absolute bottom-3 left-3 right-3 z-30">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-terracotta-500 text-charcoal-950 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Inquire About This Style on WhatsApp</span>
          </a>
        </div>

        {/* Collapsible Details Drawer */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 max-w-lg bg-[#111113] p-5 sm:p-6 border border-white/[0.15] z-40 max-h-[52vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.16em] bg-charcoal-950 text-terracotta-400 border border-terracotta-500/30">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-editorial font-bold text-linen-100 mt-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-linen-400 px-2 py-1 bg-charcoal-950 border border-white/[0.08]">
                  {item.year}
                </span>
              </div>

              {/* Story / Atmosphere */}
              <p className="mt-2.5 text-xs text-linen-300 font-light leading-relaxed border-l-2 border-terracotta-500 pl-3 italic">
                "{item.story}"
              </p>

              {/* Camera Kit & EXIF */}
              <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-terracotta-400">
                <ApertureIcon className="w-3.5 h-3.5 text-terracotta-500 flex-shrink-0" />
                <span>{item.camera}</span>
              </div>

              {/* Technical EXIF grid */}
              {item.exif && (
                <div className="mt-2.5 grid grid-cols-4 gap-1 text-center text-[10px] font-mono text-linen-300 bg-charcoal-950 p-2.5 border border-white/[0.08]">
                  <div>
                    <span className="block text-[8px] text-linen-400 uppercase tracking-wider">Shutter</span>
                    <span className="text-linen-100 font-semibold">{item.exif.shutter}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-linen-400 uppercase tracking-wider">Aperture</span>
                    <span className="text-linen-100 font-semibold">{item.exif.aperture}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-linen-400 uppercase tracking-wider">ISO</span>
                    <span className="text-linen-100 font-semibold">{item.exif.iso}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] text-linen-400 uppercase tracking-wider">Focal</span>
                    <span className="text-linen-100 font-semibold">{item.exif.focal}</span>
                  </div>
                </div>
              )}

              {/* Desktop WhatsApp commission CTA */}
              <div className="hidden sm:flex mt-4 pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-terracotta-500 hover:bg-terracotta-400 text-charcoal-950 text-xs font-mono font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Inquire This Frame on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
