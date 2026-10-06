import React from 'react';
import { ApertureIcon, ViewfinderIcon, PhoneIcon, WhatsAppIcon } from './icons/CustomIcons';
import { BRAND_INFO } from '../data/galleryData';

export default function MobileBottomDock({ activeSection, onNavigate }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 mobile-bottom-dock px-3 pt-2 bg-[#0D0D0E] border-t border-white/[0.1]">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
        
        {/* Visual Stream Shortcut */}
        <button
          onClick={() => onNavigate('visual-stream')}
          className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
            activeSection === 'visual-stream'
              ? 'bg-[#18181C] text-terracotta-400 font-bold'
              : 'text-linen-300 hover:text-white'
          }`}
        >
          <ApertureIcon className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Gallery</span>
        </button>

        {/* Curator / About Shortcut */}
        <button
          onClick={() => onNavigate('about')}
          className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
            activeSection === 'about'
              ? 'bg-[#18181C] text-terracotta-400 font-bold'
              : 'text-linen-300 hover:text-white'
          }`}
        >
          <ViewfinderIcon className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Curator</span>
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#131315] text-terracotta-400 hover:text-white transition-colors border border-white/[0.08]"
        >
          <PhoneIcon className="w-4 h-4 mb-0.5 text-terracotta-400" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Call</span>
        </a>

        {/* Primary WhatsApp Action */}
        <a
          href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'm%20browsing%20@${BRAND_INFO.brand}%20on%20mobile%20and%20would%20like%20to%20inquire%20about%20a%20shoot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-terracotta-500 text-charcoal-950 font-bold transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Inquire</span>
        </a>

      </div>
    </div>
  );
}
