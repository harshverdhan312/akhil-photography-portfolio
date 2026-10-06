import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroGateway from './components/HeroGateway';
import VisualStream from './components/VisualStream';
import AboutArtist from './components/AboutArtist';
import ContactSection from './components/ContactSection';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  // Smooth scroll to section
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    handleNavigate('works');
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0E] text-[#EDE8DF] selection:bg-[#C07048] selection:text-[#0D0D0E] font-sans antialiased">
      {/* Subtle Analog Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Minimal Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Streamlined Sections */}
      <main>
        {/* ACT 1: LARGE-SCALE HERO MONOGRAPH */}
        <HeroGateway onSelectCategory={handleSelectCategory} />

        {/* ACT 2: SELECTED WORKS (2-COLUMN EDITORIAL PLATES) */}
        <VisualStream
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* ACT 3: THE ARTIST & PRACTICE */}
        <AboutArtist />

        {/* ACT 4: COMMISSIONS & DIRECT INQUIRY */}
        <ContactSection />
      </main>

      {/* MINIMAL FOOTER */}
      <Footer />

      {/* DARKROOM LIGHTBOX VIEWER */}
      {activeLightboxItem && (
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onNavigateItem={(newItem) => setActiveLightboxItem(newItem)}
        />
      )}
    </div>
  );
}
