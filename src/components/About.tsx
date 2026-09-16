import React from 'react';
import { Camera, CheckCircle2, Sliders, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';
import { BUSINESS_NAME, PRIMARY_TAGLINE, SECONDARY_TAGLINE } from '../businessConfig';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Professional Approach',
      description: 'Structured timelines, prompt communication, and dependable studio etiquette for every assignment.',
      icon: ShieldCheck,
    },
    {
      title: 'Creative Work',
      description: 'Thoughtfully framed compositions, natural expressions, and artistic visual storytelling.',
      icon: Camera,
    },
    {
      title: 'Quality-Focused Output',
      description: 'Deliberate post-production, fine color grading, and crisp resolution delivered digitally.',
      icon: Sliders,
    },
    {
      title: 'Modern Equipment & Workflow',
      description: 'Contemporary digital cameras, professional studio lighting, and calibrated editing tools.',
      icon: Layers,
    },
    {
      title: 'Customer-Focused Service',
      description: 'Collaborative consultations ensuring your event vision and personal preferences are realized.',
      icon: HeartHandshake,
    },
    {
      title: 'Affordable Packages',
      description: 'Transparent starting tiers from ₹999 designed to make premium digital studio craft accessible.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0c10] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#161620] to-[#101017] p-8 shadow-2xl group">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              
              {/* Studio Emblem */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1b1b26] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display-modern font-bold tracking-widest text-base">
                    RECALL DIGITAL STUDIO
                  </h4>
                  <p className="text-xs text-[#d4af37] font-medium tracking-wider">
                    ESTABLISHED DIGITAL STUDIO
                  </p>
                </div>
              </div>

              {/* Photographic Preview */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-6 border border-white/5 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80"
                  alt="Photography Studio Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] uppercase tracking-widest text-[#e2d098] bg-[#0c0c10]/90 px-3 py-1 rounded-full border border-[#d4af37]/30 backdrop-blur-sm">
                    Studio Production &amp; Post-Processing
                  </span>
                </div>
              </div>

              {/* Studio Mission Statement Pill */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <p className="text-xs text-[#b8b8c8] italic text-center leading-relaxed">
                  "{PRIMARY_TAGLINE}"
                </p>
                <p className="text-[11px] text-[#9090a0] text-center mt-1">
                  {SECONDARY_TAGLINE}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-4">
              <span>Studio Profile</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5e0a0] via-[#d4af37] to-[#e0c268]">{BUSINESS_NAME}</span>
            </h2>

            <div className="space-y-4 text-[#b2b2c2] text-base leading-relaxed mb-10">
              <p>
                At <strong className="text-white font-medium">RECALL DIGITAL STUDIO</strong>, we believe every event,
                portrait, and creative concept carries an emotional significance that deserves thoughtful preservation.
                Our studio focuses on capturing important life and business moments with professional presentation,
                artistic lighting, and meticulous attention to detail.
              </p>
              <p>
                From wedding celebrations and pre-wedding portraits to corporate event documentation, commercial product
                catalogs, and digital post-production editing, we combine a systematic workflow with creative intuition.
                We ensure that each photograph and video frame reflects clarity, vibrant balance, and lasting value for
                our clients.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#d4af37]/25 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#9d9dae] leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
