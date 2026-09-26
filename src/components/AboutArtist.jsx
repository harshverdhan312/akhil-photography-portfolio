import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Award, 
  Sparkles, 
  Sliders, 
  Layers, 
  HeartHandshake, 
  ArrowUpRight, 
  CheckCircle2,
  Phone,
  MessageSquare,
  GraduationCap,
  Instagram,
  Mail,
  BookOpen
} from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function AboutArtist({ onOpenInquiry }) {
  const [activeGearTab, setActiveGearTab] = useState(0);

  const stats = [
    { value: '4+ Years', label: 'Professional Mastery', detail: 'Weddings, Models & Commercial' },
    { value: 'MSU (US)', label: 'Academic Pedigree', detail: 'Michigan State University' },
    { value: 'Certified', label: 'Basic to Beyond', detail: 'Master Photography Program' },
    { value: 'EOS R', label: 'Full-Frame Canon System', detail: '17-35mm & 50mm f/1.8' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decorative Vignettes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-saffron-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peacock-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-850 border border-champagne-500/30 text-champagne-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-saffron-400" />
          <span>The Artist & Credentials</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-bone-100 uppercase">
          Behind The <span className="font-serif italic font-normal text-champagne-300">Viewfinder</span>
        </h2>
        <p className="mt-2 text-xs font-mono text-saffron-400 tracking-widest uppercase">
          Brand: {BRAND_INFO.brand} • Kanpur & Worldwide
        </p>
      </div>

      {/* Main Grid: Portrait + Detailed Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Artist Portrait Card */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-bone-400/20 bg-graphite-850 shadow-2xl">
            {/* Portrait Image */}
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src={BRAND_INFO.artistPortrait}
                alt={BRAND_INFO.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent" />
            </div>

            {/* Bottom floating artist card details */}
            <div className="p-6 bg-graphite-900/95 border-t border-bone-400/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-bone-100">{BRAND_INFO.name}</h3>
                  <p className="text-xs font-mono text-saffron-400 tracking-wider uppercase mt-0.5">
                    @{BRAND_INFO.brand}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 border border-champagne-500/30 flex items-center justify-center text-champagne-300">
                  <Camera className="w-6 h-6" />
                </div>
              </div>

              {/* Education & Credentials Strip on Card */}
              <div className="mt-4 pt-3 border-t border-bone-400/10 space-y-1.5 text-xs font-mono text-bone-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                  <span className="truncate">{BRAND_INFO.education.college}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0" />
                  <span className="truncate">{BRAND_INFO.education.course}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-bone-400 pt-1 font-mono">
                  <span className="flex items-center gap-1 text-champagne-300">
                    <Sparkles className="w-3 h-3 text-saffron-400" />
                    <span>Commercial & Weddings</span>
                  </span>
                  <span className="text-emerald-400 font-bold">{BRAND_INFO.experienceYears} Years Exp</span>
                </div>
              </div>

              {/* Instagram Links Strip */}
              <div className="mt-4 pt-3 border-t border-bone-400/10 flex gap-2">
                {BRAND_INFO.instagrams.map((insta, idx) => (
                  <a
                    key={idx}
                    href={insta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-graphite-850 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 border border-bone-400/15 text-[11px] font-mono text-bone-200 hover:text-pink-300 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Instagram className="w-3 h-3 text-pink-400" />
                    <span>{insta.handle}</span>
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Decorative floating badge */}
          <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 p-3.5 rounded-2xl glass-pill border border-saffron-500/40 shadow-xl">
            <Award className="w-5 h-5 text-saffron-400" />
            <span className="font-mono text-xs text-bone-100 font-bold">Michigan State Alumnus</span>
          </div>
        </div>

        {/* Right: Artist Narrative & Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-bone-100 font-normal leading-relaxed border-l-4 border-saffron-500 pl-5 mb-6 italic">
            "{BRAND_INFO.philosophy}"
          </blockquote>

          <p className="text-sm sm:text-base text-bone-300 font-light leading-relaxed mb-4">
            {BRAND_INFO.bio}
          </p>

          <p className="text-sm text-bone-400 font-light leading-relaxed mb-8">
            Specializing in <strong className="text-bone-100 font-medium">Weddings & Celebrations</strong>, <strong className="text-bone-100 font-medium">Model & Fashion Portraits</strong>, and <strong className="text-bone-100 font-medium">Product & Commercial Shoots</strong>. Leveraging the precision optical rendering of the <strong className="text-saffron-400 font-mono">Canon EOS R</strong> paired with the fast <strong className="text-champagne-300 font-mono">50mm f/1.8</strong> and the versatile wide-angle <strong className="text-peacock-300 font-mono">17-35mm</strong>.
          </p>

          {/* Stats 4-Column Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-bone-400/15 mb-8">
            {stats.map((st, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="block font-serif text-xl sm:text-2xl font-black text-saffron-400">
                  {st.value}
                </span>
                <span className="block font-mono text-[11px] font-bold text-bone-200 mt-0.5">
                  {st.label}
                </span>
                <span className="block text-[10px] text-bone-400 font-mono mt-0.5">
                  {st.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Master Gear & Optics Manifest (Canon EOS R Kit) */}
          <div className="p-5 rounded-2xl bg-graphite-850/80 border border-bone-400/15">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne-300 font-semibold flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-saffron-400" />
                <span>Primary Kit: Canon EOS R</span>
              </span>
              <div className="flex gap-1">
                {BRAND_INFO.gearList.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGearTab(idx)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                      activeGearTab === idx
                        ? 'bg-saffron-500 text-graphite-950 font-bold'
                        : 'text-bone-400 hover:text-bone-200 bg-graphite-800'
                    }`}
                  >
                    {idx === 0 ? "Body" : idx === 1 ? "Lenses" : "Lights"}
                  </button>
                ))}
              </div>
            </div>

            {/* Gear Tab Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {BRAND_INFO.gearList[activeGearTab].items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-mono text-bone-300 bg-graphite-900/60 p-2 rounded-lg border border-bone-400/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Connect Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'd%20like%20to%20inquire%20about%20booking%20a%20shoot%20with%20akhilphotographyy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp: +91 89608 30821</span>
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="px-5 py-3 rounded-full glass-pill border border-bone-400/20 hover:border-saffron-400/50 text-bone-200 hover:text-saffron-400 font-mono text-xs flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-champagne-400" />
              <span>{BRAND_INFO.email}</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
