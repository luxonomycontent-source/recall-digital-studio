import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  MapPin,
  Mail,
  Phone as PhoneIcon,
  User,
} from 'lucide-react';
import {
  SERVICES,
  PACKAGES,
  WHATSAPP,
  generateWhatsAppLink,
  generateBookingWhatsAppMessage,
} from '../businessConfig';
import { BookingFormData, BookingSubmission } from '../types';

interface BookingFormProps {
  initialService?: string;
  initialPackage?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  initialPackage = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    service: initialService || (SERVICES[0]?.title || 'Photography'),
    packageLevel: initialPackage || (PACKAGES[1]?.name || 'Professional Package'),
    eventDate: '',
    eventLocation: '',
    message: '',
  });

  // Keep synced if parent changes initial props
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageLevel: initialPackage }));
    }
  }, [initialPackage]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Indian Mobile Number validation (10 digits starting with 6-9)
    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (!indianMobileRegex.test(cleanPhone)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Service selection
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    // Event Date validation
    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required.';
    }

    // Event Location
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = 'Event location/city is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save locally for owner review & future backend / Firebase synchronization
    try {
      const submission: BookingSubmission = {
        id: 'booking_' + Date.now(),
        timestamp: new Date().toISOString(),
        data: { ...formData },
        status: 'pending',
      };
      const existingSubmissions = JSON.parse(
        localStorage.getItem('recall_studio_bookings') || '[]'
      );
      existingSubmissions.unshift(submission);
      localStorage.setItem(
        'recall_studio_bookings',
        JSON.stringify(existingSubmissions)
      );
    } catch (err) {
      console.warn('Storage sync note:', err);
    }

    // Simulate swift network verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppBooking = () => {
    if (!validate()) return;

    const message = generateBookingWhatsAppMessage({
      fullName: formData.fullName,
      service: formData.service,
      packageLevel: formData.packageLevel,
      eventDate: formData.eventDate,
      eventLocation: formData.eventLocation,
      message: formData.message,
    });

    const url = generateWhatsAppLink(message);
    window.open(url, '_blank');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      service: SERVICES[0]?.title || 'Photography',
      packageLevel: PACKAGES[1]?.name || 'Professional Package',
      eventDate: '',
      eventLocation: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="booking" className="py-24 bg-[#09090d] relative overflow-hidden">
      {/* Cinematic Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#d4af37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Date</span>
          </div>
          <h2
            id="booking-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight leading-tight mb-4"
          >
            Schedule a Studio Session
          </h2>
          <p className="text-sm sm:text-base text-[#a2a2b3] leading-relaxed">
            Fill out the booking details below or book directly via WhatsApp. We will promptly check our production calendar and confirm your date.
          </p>
        </div>

        {/* Booking Card */}
        <div className="rounded-3xl bg-[#111118] border border-white/10 shadow-2xl p-6 sm:p-10 relative">
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          {isSubmitted ? (
            /* Success State */
            <div id="booking-success-message" className="text-center py-12 px-4 animate-fade-in space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto shadow-lg shadow-[#d4af37]/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif-luxury font-bold text-white tracking-wide">
                  Enquiry Received
                </h3>
                <p className="text-base text-[#dcdce8] max-w-lg mx-auto font-medium">
                  Thank you! Your enquiry has been submitted. We will contact you shortly.
                </p>
                <p className="text-xs text-[#8c8c9e] max-w-md mx-auto pt-2">
                  Our team will review your requested date ({formData.eventDate}) for {formData.service} and get in touch at {formData.mobileNumber}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleResetForm}
                  id="book-another-session-btn"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/10 cursor-pointer"
                >
                  Submit Another Enquiry
                </button>

                <button
                  onClick={handleWhatsAppBooking}
                  id="whatsapp-followup-btn"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-semibold tracking-wider uppercase border border-[#25D366]/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow up on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#717182]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Subhash Saran"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#171722] text-white text-sm border focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile Number (Indian) */}
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Mobile Number <span className="text-[#d4af37]">* (10 digits)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#717182]">
                      <PhoneIcon className="w-4 h-4" />
                    </div>
                    <span className="absolute inset-y-0 left-9 flex items-center text-xs font-bold text-[#8a8a9e]">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      maxLength={10}
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        const numericOnly = e.target.value.replace(/\D/g, '');
                        setFormData({ ...formData, mobileNumber: numericOnly });
                      }}
                      placeholder="6376708335"
                      className={`w-full pl-18 pr-4 py-3 rounded-xl bg-[#171722] text-white text-sm border focus:outline-none transition-colors ${
                        errors.mobileNumber
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Email Address <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#717182]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#171722] text-white text-sm border focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Required Service <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#171722] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#111118] text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Package Level */}
                <div>
                  <label
                    htmlFor="packageLevel"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Preferred Package Tier
                  </label>
                  <select
                    id="packageLevel"
                    name="packageLevel"
                    value={formData.packageLevel}
                    onChange={(e) => setFormData({ ...formData, packageLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#171722] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors"
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.name} className="bg-[#111118] text-white">
                        {pkg.name} ({pkg.formattedPrice}+)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                  >
                    Event / Session Date <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#171722] text-white text-sm border focus:outline-none transition-colors ${
                      errors.eventDate
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.eventDate && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.eventDate}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Event Location */}
              <div>
                <label
                  htmlFor="eventLocation"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                >
                  Event Venue / City Location <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#717182]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    placeholder="e.g. Studio, Home, or Banquet Hall in City"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#171722] text-white text-sm border focus:outline-none transition-colors ${
                      errors.eventLocation
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/10 focus:border-[#d4af37]'
                    }`}
                  />
                </div>
                {errors.eventLocation && (
                  <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.eventLocation}</span>
                  </p>
                )}
              </div>

              {/* Specific Requirements / Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#b8b8cb] mb-2"
                >
                  Session Details &amp; Special Requirements (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about expected hours, ceremony details, lighting requests or preferred styles..."
                  className="w-full px-4 py-3 rounded-xl bg-[#171722] text-white text-sm border border-white/10 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                {/* Primary Button */}
                <button
                  type="submit"
                  id="send-booking-request-btn"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#edd382] via-[#d4af37] to-[#b8972f] hover:from-[#f5df9e] hover:to-[#c5a037] shadow-xl shadow-[#d4af37]/20 transition-all duration-300 hover:shadow-[#d4af37]/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Booking Request'}</span>
                </button>

                {/* Direct WhatsApp Booking Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  id="book-via-whatsapp-btn"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#78788a]">
                  No upfront payment required to enquire. We review your date availability first.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
