import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, Award, ShieldCheck, ChevronRight, Camera } from 'lucide-react';
import {
  BUSINESS_NAME,
  PHONE,
  WHATSAPP,
  generateWhatsAppLink,
  WHATSAPP_DEFAULT_MESSAGE,
  PRIMARY_TAGLINE,
} from '../businessConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0a0a0d]"
    >
      {/* Background Graphic & Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0d]/60 via-[#0a0a0d]/80 to-[#0b0b0e] z-10" />

        {/* Studio Spotlight Effects (Warm Gold & Deep Charcoal Glow) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-[#b8972f]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#3a3a46]/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle geometric lens aperture grid line pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px), radial-gradient(#d4af37 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />

        {/* Background photographic texture overlay (high quality studio camera backdrop) */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center filter contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=80')`,
          }}
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#d4af37]/10 text-[#edd382] border border-[#d4af37]/25 shadow-sm shadow-[#d4af37]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Professional Studio
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 text-[#dcdce5] border border-white/10">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            Creative Services
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 text-[#dcdce5] border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            Premium Quality
          </span>
        </div>

        {/* Brand Tagline Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-3">
          {PRIMARY_TAGLINE}
        </p>

        {/* Main Heading */}
        <h1
          id="hero-main-heading"
          className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          Your Moments.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e6b5] via-[#d4af37] to-[#e0c268]">
            Our Creativity.
          </span>
        </h1>

        {/* Subheading */}
        <p
          id="hero-subheading"
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#b5b5c3] font-normal leading-relaxed mb-10"
        >
          <strong className="text-white font-semibold">{BUSINESS_NAME}</strong> — Professional photography,
          videography and creative digital services designed to turn important moments into unforgettable memories.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            id="hero-book-session-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] hover:from-[#f5df9e] hover:to-[#c5a037] rounded-md shadow-xl shadow-[#d4af37]/20 transition-all duration-300 hover:shadow-[#d4af37]/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book a Session</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#f5f5fa] bg-[#14141c] hover:bg-[#1a1a24] border border-[#25D366]/40 hover:border-[#25D366] rounded-md shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-white"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Display Contact Strip */}
        <div className="inline-flex items-center justify-center flex-wrap gap-4 sm:gap-8 px-6 py-3 rounded-full bg-[#121217]/90 border border-white/10 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#b0b0be]">
            <span className="text-[#a0a0af]">Studio Direct Line:</span>
            <a
              href={`tel:${PHONE}`}
              id="hero-display-phone"
              className="text-white hover:text-[#d4af37] font-semibold tracking-wide transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{PHONE}</span>
            </a>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#d4af37]/60" />
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#b0b0be]">
            <span className="text-[#a0a0af]">WhatsApp:</span>
            <a
              href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-semibold tracking-wide"
            >
              {WHATSAPP}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Subtle Glow Divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
    </section>
  );
};
