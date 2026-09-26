import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroGateway from './components/HeroGateway';
import AccoladeMarquee from './components/AccoladeMarquee';
import VisualStream from './components/VisualStream';
import StorybookSeries from './components/StorybookSeries';
import AboutArtist from './components/AboutArtist';
import ContactSection from './components/ContactSection';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';
import MobileBottomDock from './components/MobileBottomDock';
import { MessageSquare, Phone } from 'lucide-react';
import { BRAND_INFO, GALLERY_ITEMS } from './data/galleryData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  // Smooth scroll to section
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // When clicking on a split hero gateway frame
  const handleSelectGateway = (category) => {
    setSelectedCategory(category);
    handleNavigate('visual-stream');
  };

  // Open Lightbox
  const handleOpenLightbox = (item) => {
    setActiveLightboxItem(item);
  };

  // Close Lightbox
  const handleCloseLightbox = () => {
    setActiveLightboxItem(null);
  };

  return (
    <div className="relative min-h-screen bg-[#0F0F10] text-[#F8F8F5] selection:bg-saffron-500 selection:text-graphite-950 pb-16 md:pb-0">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Floating Pill Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleNavigate('contact')}
      />

      {/* Main Content Sections */}
      <main>
        {/* PAGE 1: SPLIT-GATEWAY HERO SHOWCASE */}
        <HeroGateway onSelectGateway={handleSelectGateway} />

        {/* RECOGNITION & MARQUEE TICKER */}
        <AccoladeMarquee />

        {/* PAGE 2: VISUAL STREAM (MASONRY WALL & MOBILE GRID) */}
        <VisualStream
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* CURATED THEMATIC STORYBOOKS */}
        <StorybookSeries onOpenLightbox={handleOpenLightbox} />

        {/* ABOUT AKHIL GUPTA (THE ARTIST STRIP & CREDENTIALS) */}
        <AboutArtist onOpenInquiry={() => handleNavigate('contact')} />

        {/* INQUIRY & DIRECT CONNECT SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* LIGHTBOX MODAL WITH MOBILE SWIPE GESTURES */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={handleCloseLightbox}
          onNavigateItem={(newItem) => setActiveLightboxItem(newItem)}
        />
      )}

      {/* DESKTOP FLOATING WHATSAPP BUTTON */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <a
          href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'm%20browsing%20@${BRAND_INFO.brand}%20and%20would%20like%20to%20chat%20about%20a%20photography%20shoot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="font-sans text-xs font-bold uppercase tracking-wider">
            WhatsApp Akhil
          </span>
        </a>
      </div>

      {/* MOBILE BOTTOM 1-THUMB ACTION DOCK */}
      <MobileBottomDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
