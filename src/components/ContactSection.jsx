import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Send, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Mail, 
  ArrowUpRight,
  ShieldCheck,
  Instagram,
  GraduationCap
} from 'lucide-react';
import { BRAND_INFO } from '../data/galleryData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding & Celebrations',
    date: '',
    location: 'Kanpur',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const eventOptions = [
    'Wedding & Celebrations (Pheras / Haldi / Sangeet)',
    'Model & Fashion Portfolio Shoot',
    'Product & Commercial Campaign',
    'Cultural Conclave & Corporate Gala',
    'Personal Creative Portraiture'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate customized pre-filled WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = `Hi Akhil! I came across @${BRAND_INFO.brand} and would like to inquire about a shoot:
• Name: ${formData.name || 'A client'}
• Phone: ${formData.phone || 'N/A'}
• Shoot Category: ${formData.eventType}
• Approx Date: ${formData.date || 'TBD'}
• City/Location: ${formData.location || 'Kanpur'}
• Details: ${formData.message || 'Looking forward to discussing dates & packages.'}`;

    return `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Redirect directly to WhatsApp with pre-filled message
    window.open(generateWhatsAppUrl(), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-saffron-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-bone-400/20 shadow-2xl relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Connect & WhatsApp Badges */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-850 border border-emerald-500/40 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Artist Connect</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-bone-100 uppercase leading-[1.05]">
                Let's Frame <br />
                <span className="font-serif italic font-normal text-saffron-400">Your Story</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-bone-300 font-light leading-relaxed max-w-lg">
                Planning a grand wedding, agency model test, or high-impact commercial product shoot? Reach out directly to Akhil Gupta on WhatsApp or call.
              </p>

              {/* Credentials Badge */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-2xl bg-graphite-850 border border-bone-400/15">
                <div className="flex items-center gap-2 text-xs font-mono text-champagne-300">
                  <GraduationCap className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span>Michigan State University (US)</span>
                </div>
                <span className="hidden sm:inline text-bone-500">•</span>
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  4+ Years Experience
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="mt-6 space-y-2.5 text-xs font-mono text-bone-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-champagne-400" />
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-bone-200 hover:text-saffron-400 underline">
                    {BRAND_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-bone-400">Instagram:</span>
                  <a href="https://instagram.com/akhilphotographyy" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                    @akhilphotographyy
                  </a>
                  <span>•</span>
                  <a href="https://instagram.com/akhilg896" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                    @akhilg896
                  </a>
                </div>
              </div>
            </div>

            {/* PRIMARY & SECONDARY CTA BUTTONS */}
            <div className="mt-8 pt-6 border-t border-bone-400/10 flex flex-col sm:flex-row gap-4">
              
              {/* PRIMARY: WhatsApp CTA */}
              <a
                href={`https://wa.me/${BRAND_INFO.rawPhone}?text=Hi%20Akhil,%20I%20came%20across%20@${BRAND_INFO.brand}%20and%20would%20like%20to%20inquire%20about%20a%20shoot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/40"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* SECONDARY: Direct Dialer Call Button */}
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex-1 py-4 px-6 bg-graphite-850 hover:bg-graphite-800 text-saffron-300 hover:text-white rounded-2xl text-xs sm:text-sm font-mono font-medium flex items-center justify-center gap-3 transition-all duration-300 border border-bone-400/20 hover:border-saffron-500/40"
              >
                <Phone className="w-4 h-4 text-saffron-400" />
                <span>Direct Call: 8960830821</span>
              </a>

            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-mono text-bone-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Canon EOS R Full-Frame Precision</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-saffron-400" />
                <span>Prompt Response Guaranteed</span>
              </span>
            </div>

          </div>

          {/* Right Column: Quick Interactive Inquiry Builder */}
          <div className="lg:col-span-6 bg-graphite-900/90 p-6 sm:p-8 rounded-3xl border border-bone-400/20 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-serif text-xl font-bold text-bone-100">Quick Inquiry & WhatsApp Dispatch</h3>
                <p className="text-xs text-bone-400 font-mono mt-0.5">Pre-fills a direct message for Akhil Gupta</p>
              </div>
              <Sparkles className="w-5 h-5 text-saffron-400" />
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 font-sans"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                    Your Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 font-mono"
                  />
                </div>
              </div>

              {/* Event Type Selector */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                  Type of Assignment *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 focus:outline-none focus:border-saffron-500 font-sans"
                >
                  {eventOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-graphite-900 text-bone-100">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Event Date */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                    Approx Date / Month
                  </label>
                  <input
                    type="text"
                    name="date"
                    placeholder="e.g. Nov 2026 / Dec 2027"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 font-sans"
                  />
                </div>

                {/* City / Venue */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                    City / Venue
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Kanpur / Lucknow / Delhi"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 font-sans"
                  />
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-bone-300 mb-1.5">
                  Vision & Specific Shoot Notes
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Share details regarding lookbook concepts, wedding dates, or commercial deliverables..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 bg-graphite-850 border border-bone-400/20 rounded-xl text-xs text-bone-100 placeholder:text-bone-500 focus:outline-none focus:border-saffron-500 font-sans resize-none"
                ></textarea>
              </div>

              {/* Submit Button that launches WhatsApp */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-saffron-500 hover:bg-saffron-400 text-graphite-950 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-saffron-500/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send via WhatsApp Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </form>

            {submitted && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp launched! Send your message to connect directly with Akhil.</span>
              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
