import React from 'react';
import { Award, Star, Sparkles, ShieldCheck, Heart, GraduationCap, Camera } from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function AccoladeMarquee() {
  const accolades = [
    { title: "MICHIGAN STATE UNIVERSITY (US)", org: "Academic Background", icon: GraduationCap },
    { title: "BASIC TO BEYOND PHOTOGRAPHY", org: "Master Certified", icon: Award },
    { title: "CANON EOS R FULL-FRAME", org: "50mm 1.8 & 17-35mm", icon: Camera },
    { title: "4+ YEARS COMMERCIAL & WEDDINGS", org: "150+ Celebrations", icon: Heart },
    { title: "EDITORIAL & MODEL PORTRAITURE", org: "Agency Portfolio Standard", icon: Star },
    { title: "@AKHILPHOTOGRAPHYY", org: "Kanpur • Worldwide", icon: Sparkles },
  ];

  return (
    <div className="py-8 bg-graphite-950 border-y border-bone-400/10 overflow-hidden relative">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-graphite-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-graphite-950 to-transparent z-10 pointer-events-none" />

      {/* Moving Marquee Track */}
      <div className="flex w-max animate-marquee space-x-8">
        {[...accolades, ...accolades, ...accolades].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 px-6 py-2 rounded-full glass-pill border border-bone-400/10 text-xs font-mono tracking-widest uppercase text-bone-300 hover:text-saffron-300 hover:border-saffron-500/30 transition-all cursor-default"
            >
              <IconComponent className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0" />
              <span className="font-bold text-bone-100">{item.title}</span>
              <span className="text-bone-500">•</span>
              <span className="text-champagne-400/90 text-[11px]">{item.org}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
