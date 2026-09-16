import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  AlertCircle,
} from 'lucide-react';
import {
  BUSINESS_NAME,
  PHONE,
  WHATSAPP,
  EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  YOUTUBE_URL,
  generateWhatsAppLink,
  WHATSAPP_DEFAULT_MESSAGE,
} from '../businessConfig';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#09090d] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Reach out directly for immediate availability checks, custom packages, or studio inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Main Direct Channels Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111118] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide font-display-modern">
                    {BUSINESS_NAME}
                  </h3>
                  <p className="text-xs text-[#a0a0b2]">
                    Direct Studio Desk &amp; Booking Assistance
                  </p>
                </div>
              </div>

              {/* Contact Methods List */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#d4af37] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#808092] tracking-wider block">
                        Telephone Direct
                      </span>
                      <a
                        href={`tel:${PHONE}`}
                        className="text-base font-bold text-white hover:text-[#d4af37] transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    id="contact-call-now-btn"
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/10 transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#25D366] tracking-wider block">
                        WhatsApp Official
                      </span>
                      <a
                        href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-white hover:text-[#25D366] transition-colors"
                      >
                        {WHATSAPP}
                      </a>
                    </div>
                  </div>
                  <a
                    href={generateWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-whatsapp-btn"
                    className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-bold tracking-wider uppercase shadow-md shadow-[#25D366]/20 transition-all"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#d4af37] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#808092] tracking-wider block">
                        Email Desk
                      </span>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#d4af37] transition-colors truncate block"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    id="contact-email-btn"
                    className="shrink-0 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/10 transition-colors"
                  >
                    Send Email
                  </a>
                </div>

              </div>
            </div>

            {/* Business Hours Strip */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-[#a3a3b5]">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Studio Hours: <strong className="text-white">{BUSINESS_HOURS}</strong></span>
            </div>
          </div>

          {/* Secondary Details & Location / Socials Placeholders */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address & Google Maps Placeholder Card */}
            <div className="rounded-3xl bg-[#111118] border border-white/10 p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Studio Location
                    </h4>
                    <span className="text-[11px] text-[#7d7d8e]">
                      Official Address &amp; Maps
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-4 text-xs text-[#b0b0c2] leading-relaxed">
                  <p className="text-white font-medium mb-1">Registered Address:</p>
                  <p className="text-[#9e9eb0]">{BUSINESS_ADDRESS}</p>
                </div>

                {GOOGLE_MAPS_URL ? (
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-[11px] text-[#7d7d8e] p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>GOOGLE_MAPS_URL placeholder configured in <code className="text-[#d4af37]">businessConfig.ts</code></span>
                  </div>
                )}
              </div>

              {/* Social Media Links Section */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                  Studio Social Media
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {/* Instagram */}
                  <a
                    href={INSTAGRAM_URL || '#'}
                    target={INSTAGRAM_URL ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!INSTAGRAM_URL) {
                        e.preventDefault();
                        alert('Instagram profile link can be set in src/businessConfig.ts under INSTAGRAM_URL');
                      }
                    }}
                    id="social-instagram-link"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#d4af37]/40 text-[#c5c5d5] hover:text-[#d4af37] transition-all group"
                  >
                    <Instagram className="w-5 h-5 mb-1 text-[#d4af37]" />
                    <span className="text-[10px] font-medium tracking-wide">Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={FACEBOOK_URL || '#'}
                    target={FACEBOOK_URL ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!FACEBOOK_URL) {
                        e.preventDefault();
                        alert('Facebook page link can be set in src/businessConfig.ts under FACEBOOK_URL');
                      }
                    }}
                    id="social-facebook-link"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#d4af37]/40 text-[#c5c5d5] hover:text-[#d4af37] transition-all group"
                  >
                    <Facebook className="w-5 h-5 mb-1 text-[#d4af37]" />
                    <span className="text-[10px] font-medium tracking-wide">Facebook</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href={YOUTUBE_URL || '#'}
                    target={YOUTUBE_URL ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!YOUTUBE_URL) {
                        e.preventDefault();
                        alert('YouTube channel link can be set in src/businessConfig.ts under YOUTUBE_URL');
                      }
                    }}
                    id="social-youtube-link"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#d4af37]/40 text-[#c5c5d5] hover:text-[#d4af37] transition-all group"
                  >
                    <Youtube className="w-5 h-5 mb-1 text-[#d4af37]" />
                    <span className="text-[10px] font-medium tracking-wide">YouTube</span>
                  </a>
                </div>

                {(!INSTAGRAM_URL || !FACEBOOK_URL || !YOUTUBE_URL) && (
                  <p className="text-[10px] text-[#696979] text-center mt-3">
                    Social URLs are placeholders awaiting your official accounts in <code className="text-[#a4a4b4]">businessConfig.ts</code>.
                  </p>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
