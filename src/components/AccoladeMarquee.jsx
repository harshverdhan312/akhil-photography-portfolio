import React from 'react';
import { DiamondGlyph } from './icons/CustomIcons';

export default function AccoladeMarquee() {
  const accolades = [
    { title: "MICHIGAN STATE UNIVERSITY (US)", detail: "International Academic Background" },
    { title: "BASIC TO BEYOND PHOTOGRAPHY", detail: "Master Certified Curriculum" },
    { title: "CANON EOS R FULL-FRAME", detail: "50mm f/1.8 & 17-35mm Kit" },
    { title: "4+ YEARS PROFESSIONAL MASTERY", detail: "150+ Weddings & Campaigns" },
    { title: "EDITORIAL & MODEL PORTRAITURE", detail: "Agency Lookbook Standard" },
    { title: "@AKHILPHOTOGRAPHYY", detail: "Commissions Nationwide & Worldwide" },
  ];

  return (
    <div className="py-4 bg-[#0B0B0C] border-y border-white/[0.08] overflow-hidden relative">
      {/* Subtle edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none" />

      {/* Moving Marquee Track */}
      <div className="flex w-max animate-marquee space-x-12">
        {[...accolades, ...accolades, ...accolades].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-[11px] font-mono tracking-[0.2em] uppercase text-linen-300 hover:text-terracotta-400 transition-colors cursor-default"
          >
            <DiamondGlyph className="w-1.5 h-1.5 text-terracotta-500" />
            <span className="font-semibold text-linen-100">{item.title}</span>
            <span className="text-white/20">—</span>
            <span className="text-linen-400 text-[10px]">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
