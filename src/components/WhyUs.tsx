import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Layout,
  HeartHandshake,
  BadgePercent,
  Target,
} from 'lucide-react';
import { WHY_US_ITEMS, BUSINESS_NAME } from '../businessConfig';
import { WhyUsItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  ShieldCheck,
  Layout,
  HeartHandshake,
  BadgePercent,
  Target,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0c0c10] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <span>Studio Standards</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Why Choose {BUSINESS_NAME}?
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Our commitment is to deliver refined craftsmanship, reliable communication, and lasting visual memories.
          </p>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_ITEMS.map((item: WhyUsItem) => {
            const IconComp = iconMap[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                id={`why-us-card-${item.id}`}
                className="group relative rounded-2xl bg-[#111118] border border-white/5 hover:border-[#d4af37]/35 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
              >
                {/* Top Gold Subtle Gradient Glow */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/0 group-hover:via-[#d4af37]/40 to-transparent transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#171722] border border-white/10 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-6 transition-all duration-300">
                    <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-[#edd382] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9c9cad] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#717182]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/70" />
                  <span>Standard studio workflow</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
