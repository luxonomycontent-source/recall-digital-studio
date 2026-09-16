import React, { useState } from 'react';
import { Eye, Sparkles, AlertCircle, Info, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../businessConfig';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioProps {
  onEnquireFromPortfolio: (category: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onEnquireFromPortfolio }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#09090c] relative">
      {/* Background Subtle Ambience */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Studio Portfolio &amp; Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Explore aesthetic sample compositions and studio setups. Click any showcase item to inspect visual details.
          </p>
        </div>

        {/* Clear Placeholder Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-[#121219] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <div className="text-xs text-[#b5b5c7] leading-relaxed">
              <span className="text-[#edd382] font-semibold">Studio Notice:</span>{' '}
              These portfolio cards currently display curated showcase placeholder imagery. You can easily substitute them with your real studio photographs.
            </div>
          </div>
          <button
            onClick={() => setShowConfigHelper(!showConfigHelper)}
            id="portfolio-replace-guide-btn"
            className="shrink-0 text-xs font-medium text-[#d4af37] hover:text-white underline underline-offset-4 cursor-pointer"
          >
            {showConfigHelper ? 'Hide Instructions' : 'How to replace photos?'}
          </button>
        </div>

        {/* Quick Instructions Dropdown / Panel if requested */}
        {showConfigHelper && (
          <div className="max-w-4xl mx-auto mb-10 p-5 rounded-xl bg-[#151520] border border-[#d4af37]/30 text-xs text-[#c5c5d5] space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-[#edd382] font-bold text-sm">
              <ImageIcon className="w-4 h-4" />
              <span>Step-by-Step: Adding your real photos</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-[#a8a8ba] pl-1">
              <li>Open the central file: <code className="text-[#f5e0a0]">src/businessConfig.ts</code></li>
              <li>Find the array named <code className="text-[#f5e0a0]">PORTFOLIO_ITEMS</code></li>
              <li>Replace each <code className="text-[#f5e0a0]">imageUrl</code> with your local file path (e.g. <code className="text-[#f5e0a0]">/assets/my-wedding.jpg</code>) or an online link.</li>
              <li>Save the file. Your real studio photos will instantly appear in the gallery!</li>
            </ol>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`portfolio-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/25'
                  : 'bg-white/5 text-[#a3a3b5] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#121218] border border-white/10 hover:border-[#d4af37]/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c11] via-[#0c0c11]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Placeholder Notice Pill (Transparent & Elegant) */}
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] uppercase font-medium tracking-wider text-[#d4af37] bg-black/80 px-2 py-0.5 rounded border border-[#d4af37]/30">
                    Placeholder
                  </span>
                </div>

                {/* Hover Center Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider shadow-xl shadow-black/80 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    View Project
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 bg-[#0e0e14] border-t border-white/5">
                <p className="text-[10px] uppercase tracking-wider text-[#d4af37] font-medium mb-1">
                  {item.tag}
                </p>
                <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-[#edd382] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onEnquire={onEnquireFromPortfolio}
        />
      </div>
    </section>
  );
};
