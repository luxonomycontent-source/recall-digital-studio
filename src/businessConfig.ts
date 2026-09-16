import { ServiceItem, PackageItem, PortfolioItem, WhyUsItem, FaqItem } from './types';

// ============================================================================
// CORE BUSINESS INFORMATION (Central Configuration)
// Edit any value here to update across the entire website instantly.
// ============================================================================

export const BUSINESS_NAME = 'RECALL DIGITAL STUDIO';
export const PHONE = '6376708335';
export const WHATSAPP = '6375543665';
export const EMAIL = 'subhashsaran2021@gmail.com';

export const PRIMARY_TAGLINE = 'Capture Moments. Create Memories.';
export const SECONDARY_TAGLINE = 'Professional Photography, Videography & Creative Digital Services.';

export const BUSINESS_TYPE = 'Digital Studio / Photography / Videography / Creative Services';

// Studio Location & Address Placeholders
// (Update with your physical studio address or Google Maps link when ready)
export const BUSINESS_ADDRESS = 'Studio location details provided upon booking or direct enquiry. (Update in businessConfig.ts)';
export const GOOGLE_MAPS_URL = ''; // Add your Google Maps embed or share link here

// Business Operations
export const BUSINESS_HOURS = 'Monday – Sunday: 9:00 AM – 9:00 PM';
export const SERVICE_AREA = 'Available across local & regional locations on request';

// Social Media Links Placeholders (Leave empty or update with your handles)
export const INSTAGRAM_URL = ''; // e.g. "https://instagram.com/recalldigitalstudio"
export const FACEBOOK_URL = '';  // e.g. "https://facebook.com/recalldigitalstudio"
export const YOUTUBE_URL = '';   // e.g. "https://youtube.com/@recalldigitalstudio"

// Default WhatsApp Pre-filled Messages
export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello RECALL DIGITAL STUDIO, I would like to enquire about your photography and digital studio services.';

// ============================================================================
// PACKAGE CONFIGURATION & PRICING
// Adjust prices here - these are starting prices as marked across the website.
// ============================================================================

export const LOW_PACKAGE_PRICE = 999;
export const MEDIUM_PACKAGE_PRICE = 2499;
export const HIGH_PACKAGE_PRICE = 4999;

export const PRICE_DISCLAIMER =
  'Prices may vary depending on event, duration, location and requirements.';

export const PACKAGES: PackageItem[] = [
  {
    id: 'low',
    name: 'Essential Package',
    startingPrice: LOW_PACKAGE_PRICE,
    formattedPrice: `₹${LOW_PACKAGE_PRICE.toLocaleString('en-IN')}`,
    tagline: 'Suitable for basic requirements',
    isPopular: false,
    description: 'A focused, streamlined session designed for quick studio needs and basic event captures.',
    features: [
      'Basic Photography',
      'Basic Photo Selection',
      'Basic Editing',
      'Digital Delivery',
    ],
    ctaText: 'Enquire Now',
  },
  {
    id: 'medium',
    name: 'Professional Package',
    startingPrice: MEDIUM_PACKAGE_PRICE,
    formattedPrice: `₹${MEDIUM_PACKAGE_PRICE.toLocaleString('en-IN')}`,
    tagline: 'Most popular choice for events & portraits',
    isPopular: true,
    description: 'Comprehensive coverage with enhanced post-production and dedicated creative framing.',
    features: [
      'Professional Photography',
      'Better Coverage',
      'Enhanced Photo Editing',
      'Digital Delivery',
      'Selected High-Quality Photos',
    ],
    ctaText: 'Book Now',
  },
  {
    id: 'high',
    name: 'Signature Package',
    startingPrice: HIGH_PACKAGE_PRICE,
    formattedPrice: `₹${HIGH_PACKAGE_PRICE.toLocaleString('en-IN')}`,
    tagline: 'Premium end-to-end creative production',
    isPopular: false,
    description: 'Full-spectrum creative session with extended coverage and master-grade photo enhancement.',
    features: [
      'Premium Photography',
      'Extended Coverage',
      'Advanced Photo Editing',
      'Premium Digital Delivery',
      'High-Quality Final Photos',
      'Personalized Creative Approach',
    ],
    ctaText: 'Book Now',
  },
];

// ============================================================================
// SERVICES CONFIGURATION
// Add, remove or re-order services easily from this list.
// ============================================================================

export const SERVICES: ServiceItem[] = [
  {
    id: 'photography',
    title: 'Photography',
    category: 'Photography',
    description: 'High-clarity still captures tailored for personal, business, and studio occasions.',
    iconName: 'Camera',
    featured: true,
  },
  {
    id: 'videography',
    title: 'Videography',
    category: 'Videography',
    description: 'Cinematic video recording with smooth camera work, audio synchronization, and visual pacing.',
    iconName: 'Video',
    featured: true,
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    category: 'Wedding',
    description: 'Documenting your sacred wedding ceremonies, family moments, and emotional highlights.',
    iconName: 'HeartHandshake',
    featured: true,
  },
  {
    id: 'pre-wedding-photography',
    title: 'Pre-Wedding Photography',
    category: 'Pre-Wedding',
    description: 'Creative couple portraits in curated lighting and scenic outdoor or studio setups.',
    iconName: 'Sparkles',
    featured: true,
  },
  {
    id: 'event-photography',
    title: 'Event Photography',
    category: 'Events',
    description: 'Unobtrusive, prompt documentation for birthdays, anniversaries, corporate and cultural events.',
    iconName: 'CalendarCheck',
    featured: false,
  },
  {
    id: 'portrait-photography',
    title: 'Portrait Photography',
    category: 'Portraits',
    description: 'Professional headshots, studio family portraits, and expressive solo profile captures.',
    iconName: 'UserCheck',
    featured: false,
  },
  {
    id: 'product-photography',
    title: 'Product Photography',
    category: 'Products',
    description: 'Clean, catalog-ready product visuals with precise studio lighting and shadow detail.',
    iconName: 'Package',
    featured: false,
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    category: 'Creative Work',
    description: 'Color correction, skin smoothing, lighting balance, and digital retouching.',
    iconName: 'Sliders',
    featured: false,
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Creative Work',
    description: 'Paced video cuts, cinematic color grading, title integration, and audio mastering.',
    iconName: 'Film',
    featured: false,
  },
  {
    id: 'digital-creative-services',
    title: 'Digital Creative Services',
    category: 'Creative Work',
    description: 'Custom creative digital banners, albums, graphic layouts, and studio media assets.',
    iconName: 'Palette',
    featured: false,
  },
];

// ============================================================================
// PORTFOLIO SHOWCASE
// Clearly marked studio placeholders to replace with actual studio photographs.
// ============================================================================

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Photography',
  'Wedding',
  'Pre-Wedding',
  'Events',
  'Portraits',
  'Products',
  'Creative Work',
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Cinematic Wedding Moments',
    category: 'Wedding',
    description: 'Ceremonial traditions captured with golden ambient highlights and emotional depth.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Wedding Highlights',
  },
  {
    id: 'port-2',
    title: 'Pre-Wedding Sunset Mood',
    category: 'Pre-Wedding',
    description: 'Artistic couple compositions bathed in natural warm golden hour illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Pre-Wedding Artistry',
  },
  {
    id: 'port-3',
    title: 'Studio Portrait & Lighting',
    category: 'Portraits',
    description: 'High-contrast studio portraiture focusing on genuine expression and clean key-lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Studio Headshot',
  },
  {
    id: 'port-4',
    title: 'Traditional Cultural Event',
    category: 'Events',
    description: 'Vibrant celebration coverage emphasizing candid smiles, music, and festive rituals.',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Event Coverage',
  },
  {
    id: 'port-5',
    title: 'Commercial Product Detail',
    category: 'Products',
    description: 'Precision studio lighting showcasing textures, reflective surfaces, and clean backdrops.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Product Catalog',
  },
  {
    id: 'port-6',
    title: 'Cinematic Camera & Lens Production',
    category: 'Photography',
    description: 'Behind-the-scenes precision capturing prime optical glass and studio camera setups.',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Optical Craft',
  },
  {
    id: 'port-7',
    title: 'Fine-Art Creative Color Grade',
    category: 'Creative Work',
    description: 'Digital retouching and split-toning designed for editorial magazine aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Creative Retouch',
  },
  {
    id: 'port-8',
    title: 'Expressive Classical Portrait',
    category: 'Portraits',
    description: 'Dramatic chiaroscuro studio lighting capturing depth, character, and texture.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    placeholderNotice: 'Studio Showcase Placeholder — Replace with your real client photo in businessConfig.ts',
    tag: 'Character Study',
  },
];

// ============================================================================
// WHY CHOOSE US
// Grounded strictly in factual capabilities requested.
// ============================================================================

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'creative-approach',
    title: 'Creative Approach',
    description: 'Innovative angles, balanced framing, and cinematic color palettes tailored to your personality.',
    iconName: 'Sparkles',
  },
  {
    id: 'professional-quality',
    title: 'Professional Quality',
    description: 'Reliable high-definition output with sharp detail, accurate skin tones, and rich contrast.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'modern-presentation',
    title: 'Modern Presentation',
    description: 'Clean, elegant visual delivery formatted perfectly for both mobile sharing and large prints.',
    iconName: 'Layout',
  },
  {
    id: 'personalized-service',
    title: 'Personalized Service',
    description: 'Attentive discussion of your event timeline and specific photo preferences before every shoot.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'affordable-packages',
    title: 'Affordable Packages',
    description: 'Transparent starting tiers from ₹999 ensuring quality studio work stays within your budget.',
    iconName: 'BadgePercent',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description: 'Meticulous curation from lighting setup and frame composition to careful final retouching.',
    iconName: 'Target',
  },
];

// ============================================================================
// FREQUENTLY ASKED QUESTIONS
// (Exact questions and answers provided in user prompt)
// ============================================================================

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Recall Digital Studio provide?',
    answer: 'RECALL DIGITAL STUDIO provides photography, videography and creative digital services. Please contact us for the latest available services.',
  },
  {
    id: 'faq-2',
    question: 'What are your package prices?',
    answer: 'Our packages start from ₹999. Final pricing may vary depending on the service, duration, location and specific requirements.',
  },
  {
    id: 'faq-3',
    question: 'How can I book a service?',
    answer: 'You can submit the booking form or contact us directly through WhatsApp or phone.',
  },
  {
    id: 'faq-4',
    question: 'Can I customize a package?',
    answer: 'Yes. Contact us with your requirements and we can discuss a suitable package.',
  },
  {
    id: 'faq-5',
    question: 'How can I contact Recall Digital Studio?',
    answer: `Call ${PHONE} or WhatsApp ${WHATSAPP}.`,
  },
];

// Helper to generate WhatsApp links
export function generateWhatsAppLink(text: string): string {
  const cleanNumber = WHATSAPP.replace(/\D/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/91${cleanNumber}?text=${encodedText}`;
}

export function generateBookingWhatsAppMessage(data: {
  fullName: string;
  service: string;
  packageLevel: string;
  eventDate: string;
  eventLocation: string;
  message?: string;
}): string {
  return `*New Booking Request - ${BUSINESS_NAME}*
• *Name:* ${data.fullName}
• *Service:* ${data.service}
• *Package:* ${data.packageLevel}
• *Date:* ${data.eventDate}
• *Location:* ${data.eventLocation}
${data.message ? `• *Notes:* ${data.message}` : ''}

Please confirm availability and discuss next steps.`;
}
