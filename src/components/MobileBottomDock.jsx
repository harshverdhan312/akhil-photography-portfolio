import React from 'react';
import { MessageSquare, Phone, Camera, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function MobileBottomDock({ activeSection, onNavigate }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 mobile-bottom-dock px-3 pt-2">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
        
        {/* Visual Stream Shortcut */}
        <button
          onClick={() => onNavigate('visual-stream')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
            activeSection === 'visual-stream'
              ? 'bg-graphite-800 text-saffron-400 font-bold'
              : 'text-bone-300 hover:text-white'
          }`}
        >
          <Camera className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">Gallery</span>
        </button>

        {/* Storybooks / About Shortcut */}
        <button
          onClick={() => onNavigate('about')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
            activeSection === 'about'
              ? 'bg-graphite-800 text-saffron-400 font-bold'
              : 'text-bone-300 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">About</span>
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-graphite-800 text-saffron-300 hover:text-white transition-all border border-bone-400/10 active:scale-95"
        >
          <Phone className="w-4 h-4 mb-0.5 text-saffron-400" />
          <span className="text-[10px] font-mono tracking-tight font-semibold">Call Direct</span>
        </a>

        {/* Primary WhatsApp Action */}
        <a
          href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'm%20browsing%20@${BRAND_INFO.brand}%20on%20mobile%20and%20would%20like%20to%20inquire%20about%20a%20shoot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 fill-current" />
          <span className="text-[10px] font-mono tracking-tight">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
