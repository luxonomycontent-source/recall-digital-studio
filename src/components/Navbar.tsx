import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_NAME, PHONE, WHATSAPP, generateWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from '../businessConfig';

interface NavbarProps {
  onOpenBooking: (service?: string, pkg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0b0b0e]/90 via-[#0b0b0e]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="navbar-brand-logo"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#b8972f] to-[#795d18] p-[1px] shadow-lg shadow-[#d4af37]/10 flex items-center justify-center">
            <div className="w-full h-full bg-[#0e0e13] rounded-[7px] flex items-center justify-center transition-transform group-hover:scale-95">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e2a3] via-[#d4af37] to-[#e6ca65] font-display-modern font-bold text-lg tracking-wider">
                R
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display-modern text-base sm:text-lg font-bold tracking-[0.2em] text-white group-hover:text-[#d4af37] transition-colors leading-tight uppercase">
              RECALL
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-medium leading-tight">
              DIGITAL STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => handleLinkClick(link.href)}
              className="px-3 py-2 text-sm font-medium text-[#b8b8c7] hover:text-white transition-colors duration-200 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${PHONE}`}
            id="nav-quick-call"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#a8a8b8] hover:text-white px-3 py-2 rounded-full border border-white/10 hover:border-[#d4af37]/40 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{PHONE}</span>
          </a>

          {/* Primary CTA */}
          <button
            id="navbar-book-now-btn"
            onClick={() => onOpenBooking()}
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] hover:from-[#f5df9e] hover:to-[#c5a037] rounded-md shadow-md shadow-[#d4af37]/20 transition-all duration-300 hover:shadow-[#d4af37]/35 hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-book-now-top"
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold tracking-wide uppercase text-black bg-[#d4af37] rounded font-sans"
          >
            Book Now
          </button>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-white hover:text-[#d4af37] rounded-md bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="sm:hidden fixed inset-x-0 top-[60px] bg-[#0c0c11]/98 border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 text-base font-medium text-[#c5c5d3] hover:text-[#d4af37] border-b border-white/5 cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                id="mobile-drawer-book-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] rounded-md shadow-lg shadow-[#d4af37]/20"
              >
                Book a Session
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${PHONE}`}
                  id="mobile-drawer-call-btn"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-white"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call {PHONE}</span>
                </a>
                <a
                  href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-drawer-whatsapp-btn"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
