import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import {
  BUSINESS_NAME,
  PRIMARY_TAGLINE,
  SECONDARY_TAGLINE,
  PHONE,
  WHATSAPP,
  EMAIL,
  generateWhatsAppLink,
  WHATSAPP_DEFAULT_MESSAGE,
} from '../businessConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07070a] border-t border-white/10 relative overflow-hidden">
      {/* Top subtle golden light */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#795d18] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0e0e13] rounded-[7px] flex items-center justify-center">
                  <span className="text-[#edd382] font-display-modern font-bold text-lg">
                    R
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display-modern text-lg font-bold tracking-[0.2em] text-white uppercase leading-tight">
                  {BUSINESS_NAME}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-medium leading-tight">
                  DIGITAL STUDIO
                </p>
              </div>
            </div>

            <p className="text-sm font-serif-luxury text-[#e0e0ea] italic max-w-sm">
              “{PRIMARY_TAGLINE}”
            </p>
            <p className="text-xs text-[#8c8c9e] max-w-sm leading-relaxed">
              {SECONDARY_TAGLINE}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#a0a0b2] hover:text-[#d4af37] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs text-[#a0a0b2]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors truncate">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-[#717182] bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                Studio Sessions: Mon – Sun 9:00 AM – 9:00 PM
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707080]">
          <p id="footer-copyright">
            © 2026 {BUSINESS_NAME}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#555562]">
              Professional Photography &amp; Creative Digital Services
            </span>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              aria-label="Back to Top"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#d4af37] transition-colors border border-white/5 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
