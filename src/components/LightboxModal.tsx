import React, { useEffect } from 'react';
import { X, Calendar, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';
import { PortfolioItem } from '../types';
import { generateWhatsAppLink, PHONE } from '../businessConfig';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onEnquire: (serviceName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onEnquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#101016] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-lightbox-btn"
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#d4af37] border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover max-h-[70vh]"
            referrerPolicy="no-referrer"
          />

          {/* Explicit Placeholder Notice Banner */}
          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/85 backdrop-blur-sm border-t border-white/10 flex items-center gap-2 text-center justify-center">
            <AlertCircle className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="text-[11px] text-[#e0e0ea] tracking-wide">
              {item.placeholderNotice}
            </span>
          </div>
        </div>

        {/* Details Container */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-md border border-[#d4af37]/20">
                {item.category}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#888899]">
                {item.tag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white tracking-wide mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#a3a3b5] leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5 mb-6 text-xs text-[#a3a3b3]">
              <p className="font-semibold text-white">How to replace this with your real photo:</p>
              <p className="text-[11px] text-[#8e8e9e]">
                Open <code className="text-[#edd382]">src/businessConfig.ts</code>, locate item <code className="text-[#edd382]">{item.id}</code>, and update its <code className="text-[#edd382]">imageUrl</code>.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onEnquire(item.category);
              }}
              id="lightbox-enquire-btn"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] hover:from-[#f5df9e] hover:to-[#c5a037] flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#d4af37]/20"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book For Similar Shoot</span>
            </button>

            <a
              href={generateWhatsAppLink(`Hello RECALL DIGITAL STUDIO, I saw your portfolio work for "${item.title}" (${item.category}) and would like to enquire.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
