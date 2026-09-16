import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { PHONE, generateWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from '../businessConfig';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-sticky-quick-bar"
      className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#0c0c11]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl"
    >
      {/* Call Button */}
      <a
        href={`tel:${PHONE}`}
        id="mobile-quick-call"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white active:bg-white/10"
      >
        <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        id="mobile-quick-whatsapp"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-xs font-semibold text-[#25D366] active:bg-[#25D366]/25"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Now Button */}
      <button
        onClick={onOpenBooking}
        id="mobile-quick-book"
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] text-black text-xs font-bold uppercase tracking-wider shadow-md shadow-[#d4af37]/20 active:scale-98"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Now</span>
      </button>
    </div>
  );
};
