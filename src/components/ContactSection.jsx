import React, { useState } from 'react';
import { WhatsAppIcon, ArrowUpRightIcon } from './icons/CustomIcons';
import { BRAND_INFO } from '../data/galleryData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Weddings & Celebrations',
    date: '',
    location: 'Kanpur',
    message: ''
  });

  const eventOptions = [
    'Weddings & Celebrations (Royal Pheras / Haldi / Sangeet)',
    'Model & Fashion Lookbook Shoot',
    'Product & Commercial Campaign',
    'Cultural & Corporate Event'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Akhil! I came across your portfolio (@${BRAND_INFO.brand}) and would like to discuss a photography assignment:
• Client Name: ${formData.name || 'A client'}
• Contact Phone: ${formData.phone || 'N/A'}
• Shoot Category: ${formData.eventType}
• Proposed Date: ${formData.date || 'TBD'}
• City/Venue: ${formData.location || 'Kanpur'}
• Notes: ${formData.message || 'Looking forward to discussing dates & deliverables.'}`;

    return `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(generateWhatsAppUrl(), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.1]">
      
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-terracotta-400 block mb-2">
          Commissions & Inquiries
        </span>
        <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-linen-100 uppercase tracking-tight">
          Let's Frame <span className="italic text-terracotta-400">Your Story</span>
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-linen-300 font-light max-w-xl mx-auto leading-relaxed">
          Available for destination weddings, agency fashion portfolios, and commercial assignments worldwide.
        </p>

        {/* Quick Direct Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I'm%20inquiring%20about%20a%20photography%20shoot.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-terracotta-500 hover:bg-terracotta-400 text-charcoal-950 font-mono text-xs font-bold uppercase tracking-[0.16em] flex items-center gap-2 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp: {BRAND_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="px-6 py-3.5 border border-white/[0.15] hover:border-terracotta-400 text-linen-200 hover:text-terracotta-400 font-mono text-xs uppercase tracking-[0.16em] transition-colors"
          >
            <span>Email: {BRAND_INFO.email}</span>
          </a>
        </div>
      </div>

      {/* Concise Commission Form */}
      <div className="max-w-2xl mx-auto bg-[#131315] p-6 sm:p-10 border border-white/[0.1]">
        <h3 className="font-editorial text-xl font-bold text-linen-100 mb-6 pb-2 border-b border-white/[0.08]">
          Send a Detailed Brief
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-linen-400 mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Client name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-[#0D0D0E] border border-white/[0.1] text-xs text-linen-100 placeholder:text-linen-500 focus:outline-none focus:border-terracotta-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-linen-400 mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-[#0D0D0E] border border-white/[0.1] text-xs text-linen-100 placeholder:text-linen-500 focus:outline-none focus:border-terracotta-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-linen-400 mb-1.5">
                Commission Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-[#0D0D0E] border border-white/[0.1] text-xs text-linen-100 focus:outline-none focus:border-terracotta-500 font-sans"
              >
                {eventOptions.map((opt, i) => (
                  <option key={i} value={opt} className="bg-charcoal-900 text-linen-100">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-linen-400 mb-1.5">
                Date & City
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Dec 2026, Kanpur"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-[#0D0D0E] border border-white/[0.1] text-xs text-linen-100 placeholder:text-linen-500 focus:outline-none focus:border-terracotta-500 font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-[0.16em] text-linen-400 mb-1.5">
              Specific Notes / Vision
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Share event scale, venue details, or lookbook requirements..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3.5 py-2.5 bg-[#0D0D0E] border border-white/[0.1] text-xs text-linen-100 placeholder:text-linen-500 focus:outline-none focus:border-terracotta-500 font-sans resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-terracotta-500 hover:bg-terracotta-400 text-charcoal-950 font-mono text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Launch Brief on WhatsApp</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

    </section>
  );
}
