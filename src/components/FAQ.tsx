import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_NAME } from '../businessConfig';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  // Open the first item by default
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0c0c10] relative overflow-hidden">
      {/* Subtle Backdrop Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Quick clarity regarding studio bookings, service offerings, and pricing terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq: FaqItem, idx: number) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#12121b] border-[#d4af37]/40 shadow-xl shadow-black/40'
                    : 'bg-[#101017] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  id={`faq-toggle-${faq.id}`}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-display-modern font-semibold text-[#d4af37]">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#edd382] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#d4af37] text-black rotate-180'
                        : 'bg-white/5 text-[#9a9ab0] group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#a8a8ba] leading-relaxed border-t border-white/5 animate-fade-in">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
