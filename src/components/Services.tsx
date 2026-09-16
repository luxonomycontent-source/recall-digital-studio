import React from 'react';
import {
  Camera,
  Video,
  HeartHandshake,
  Sparkles,
  CalendarCheck,
  UserCheck,
  Package,
  Sliders,
  Film,
  Palette,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { SERVICES, generateWhatsAppLink } from '../businessConfig';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Camera,
  Video,
  HeartHandshake,
  Sparkles,
  CalendarCheck,
  UserCheck,
  Package,
  Sliders,
  Film,
  Palette,
};

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#09090c] relative">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <span>Our Expertise</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Digital Studio &amp; Creative Services
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            From monumental ceremonies to personal studio portraits and specialized digital editing, explore our
            comprehensive creative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const IconComponent = iconMap[service.iconName] || Camera;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl bg-gradient-to-b from-[#13131b] to-[#0e0e14] border border-white/5 hover:border-[#d4af37]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Top Subtle Light Accent */}
                <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/0 group-hover:via-[#d4af37]/40 to-transparent transition-all duration-300" />

                <div>
                  {/* Category Tag & Service Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#a7a7ba] bg-white/5 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                    <span className="text-xs font-display-modern font-semibold text-[#666675]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a24] border border-white/10 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-4 transition-all duration-300 shadow-inner">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white tracking-wide mb-2 group-hover:text-[#edd382] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#9d9dae] leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    id={`enquire-btn-${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f7e6b5] transition-colors cursor-pointer group/btn"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={generateWhatsAppLink(`Hello RECALL DIGITAL STUDIO, I would like to enquire about your ${service.title} services.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-[#25D366]/20 text-[#a3a3b5] hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Central Config Edit Notice for Business Owner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6e6e80]">
            All studio services can be updated directly from the central configuration file (<code className="text-[#a4a4b8]">src/businessConfig.ts</code>).
          </p>
        </div>
      </div>
    </section>
  );
};
