import React from 'react';
import { Check, Sparkles, HelpCircle, Info, Calendar } from 'lucide-react';
import { PACKAGES, PRICE_DISCLAIMER, generateWhatsAppLink } from '../businessConfig';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackageForBooking: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForBooking }) => {
  return (
    <section id="packages" className="py-24 bg-[#0b0b0f] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2
            id="packages-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Choose Your Package
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Curated packages tailored for portraits, creative sessions, and event coverage.
          </p>
        </div>

        {/* Starting Prices Disclaimer Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#14141d] border border-[#d4af37]/25 text-[#edd382] text-xs sm:text-sm">
            <Info className="w-5 h-5 text-[#d4af37] shrink-0" />
            <div>
              <strong className="text-white font-semibold block sm:inline mr-1">
                Notice:
              </strong>
              <span>{PRICE_DISCLAIMER}</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PACKAGES.map((pkg: PackageItem) => {
            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-[#181824] via-[#12121b] to-[#0f0f16] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/10 scale-100 md:-translate-y-2'
                    : 'bg-gradient-to-b from-[#13131b] to-[#0e0e14] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] text-black font-display-modern font-bold text-[11px] tracking-widest uppercase shadow-md shadow-[#d4af37]/30">
                    POPULAR
                  </div>
                )}

                <div>
                  {/* Package Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white tracking-wide mb-1 font-display-modern">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#a0a0b2]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-[11px] uppercase tracking-wider text-[#9f9fb0] block mb-1">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight">
                        {pkg.formattedPrice}
                      </span>
                      <span className="text-xs text-[#8c8c9e] font-normal">
                        *
                      </span>
                    </div>
                    <p className="text-[11px] text-[#78788a] mt-1.5">
                      Base price for initial session scope.
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#b0b0c2] leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                      Included Features:
                    </p>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-xs text-[#c8c8d8]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPackageForBooking(pkg.name)}
                    id={`select-package-btn-${pkg.id}`}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] hover:from-[#f7e49d] hover:to-[#c5a037] text-black shadow-lg shadow-[#d4af37]/25'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#12121b] via-[#161623] to-[#12121b] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Need a Customized Studio Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#9f9fb2]">
              Every event has unique hours, venue requirements, and delivery formats. We happily craft personalized plans.
            </p>
          </div>
          <a
            href={generateWhatsAppLink("Hello RECALL DIGITAL STUDIO, I would like to discuss a customized photography package for my requirements.")}
            target="_blank"
            rel="noopener noreferrer"
            id="packages-custom-discuss-btn"
            className="shrink-0 px-6 py-3 rounded-lg bg-white/5 hover:bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#edd382] hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Discuss Custom Package
          </a>
        </div>
      </div>
    </section>
  );
};
