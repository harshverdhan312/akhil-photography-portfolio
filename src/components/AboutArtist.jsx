import React from 'react';
import { BRAND_INFO } from '../data/galleryData';

export default function AboutArtist() {
  return (
    <section id="about" className="py-16 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.1]">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Artist Portrait */}
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] bg-charcoal-950 border border-white/[0.1] overflow-hidden">
            <img
              src={BRAND_INFO.artistPortrait}
              alt={BRAND_INFO.name}
              className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-linen-400 uppercase tracking-widest">
            <span>{BRAND_INFO.name}</span>
            <span>@{BRAND_INFO.brand}</span>
          </div>
        </div>

        {/* Right: Artist Statement & Credentials */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-terracotta-400 block mb-2">
            The Artist & Practice
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-linen-100 uppercase tracking-tight mb-8">
            Behind The <span className="italic text-terracotta-400">Viewfinder</span>
          </h2>

          <blockquote className="font-editorial text-xl sm:text-2xl text-linen-100 font-normal leading-relaxed border-l-2 border-terracotta-500 pl-6 mb-8 italic">
            "{BRAND_INFO.philosophy}"
          </blockquote>

          <div className="space-y-4 text-xs sm:text-sm text-linen-300 font-light leading-relaxed mb-10">
            <p>{BRAND_INFO.bio}</p>
            <p>
              Primary working kit consists of the <strong className="text-linen-100 font-medium">Canon EOS R full-frame system</strong> paired with fast prime glass (<strong className="text-terracotta-400 font-mono">50mm f/1.8</strong>) for sculpted chiaroscuro portraits and ultra-wide optics (<strong className="text-linen-100 font-mono">17-35mm</strong>) for grand spatial coverage.
            </p>
          </div>

          {/* Clean 2-Column Credentials Manifest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-white/[0.08] text-xs font-mono mb-8">
            <div>
              <span className="text-linen-400 block text-[10px] uppercase tracking-wider">Academic Pedigree</span>
              <span className="text-linen-100 font-semibold">{BRAND_INFO.education.college}</span>
            </div>
            <div>
              <span className="text-linen-400 block text-[10px] uppercase tracking-wider">Master Certification</span>
              <span className="text-linen-100 font-semibold">{BRAND_INFO.education.course}</span>
            </div>
            <div>
              <span className="text-linen-400 block text-[10px] uppercase tracking-wider">Experience</span>
              <span className="text-terracotta-400 font-semibold">{BRAND_INFO.experienceYears} Years • {BRAND_INFO.weddingsCovered} Weddings</span>
            </div>
            <div>
              <span className="text-linen-400 block text-[10px] uppercase tracking-wider">Location Base</span>
              <span className="text-linen-100 font-semibold">{BRAND_INFO.location}</span>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <span className="text-linen-400 uppercase tracking-wider">Instagram:</span>
            <a
              href="https://instagram.com/akhilphotographyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-linen-200 hover:text-terracotta-400 transition-colors underline"
            >
              @akhilphotographyy
            </a>
            <a
              href="https://instagram.com/akhilg896"
              target="_blank"
              rel="noopener noreferrer"
              className="text-linen-200 hover:text-terracotta-400 transition-colors underline"
            >
              @akhilg896
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
