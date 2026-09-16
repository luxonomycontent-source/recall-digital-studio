export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  startingPrice?: number;
  featured?: boolean;
}

export interface PackageItem {
  id: 'low' | 'medium' | 'high';
  name: string;
  startingPrice: number;
  formattedPrice: string;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Photography' | 'Wedding' | 'Pre-Wedding' | 'Events' | 'Portraits' | 'Products' | 'Creative Work';
  description: string;
  imageUrl: string;
  placeholderNotice: string;
  tag: string;
  dateOrSpec?: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  service: string;
  packageLevel: string;
  eventDate: string;
  eventLocation: string;
  message: string;
}

export interface BookingSubmission {
  id: string;
  timestamp: string;
  data: BookingFormData;
  status: 'pending' | 'reviewed';
}
