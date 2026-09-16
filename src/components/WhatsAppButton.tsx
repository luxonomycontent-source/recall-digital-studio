import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  WHATSAPP,
  generateWhatsAppLink,
  WHATSAPP_DEFAULT_MESSAGE,
  BUSINESS_NAME,
} from '../businessConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Prompt Bubble on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 p-2.5 px-3.5 rounded-xl bg-[#111118]/95 border border-[#25D366]/40 text-xs text-white shadow-2xl backdrop-blur-md animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium">Chat with {BUSINESS_NAME}</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-[#8e8e9e] hover:text-white p-0.5 ml-1 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with RECALL DIGITAL STUDIO on WhatsApp"
        className="relative group p-4 rounded-full bg-[#25D366] text-black hover:bg-[#20ba59] shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#128C7E]" />
        </span>
        <MessageCircle className="w-7 h-7 text-black stroke-[2.2]" />
      </a>
    </div>
  );
};
