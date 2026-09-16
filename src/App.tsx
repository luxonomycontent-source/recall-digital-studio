import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileQuickBar } from './components/MobileQuickBar';
import { StudioOwnerHelperModal } from './components/StudioOwnerHelperModal';
import { Settings } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  const scrollToBooking = (service?: string, pkg?: string) => {
    if (service) setSelectedService(service);
    if (pkg) setSelectedPackage(pkg);

    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#e0e0ea] flex flex-col relative selection:bg-[#d4af37]/25 selection:text-[#f7e6b5]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={(service, pkg) => scrollToBooking(service, pkg)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* About RECALL DIGITAL STUDIO */}
        <About />

        {/* Studio Services */}
        <Services
          onSelectServiceForBooking={(serviceTitle) =>
            scrollToBooking(serviceTitle, undefined)
          }
        />

        {/* Pricing / Packages */}
        <Packages
          onSelectPackageForBooking={(packageName) =>
            scrollToBooking(undefined, packageName)
          }
        />

        {/* Studio Portfolio & Showcase */}
        <Portfolio
          onEnquireFromPortfolio={(categoryName) =>
            scrollToBooking(categoryName, undefined)
          }
        />

        {/* Why Choose Recall Digital Studio */}
        <WhyUs />

        {/* Booking Form with Validation & WhatsApp Integration */}
        <BookingForm
          initialService={selectedService}
          initialPackage={selectedPackage}
        />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Information & Channels */}
        <Contact />
      </main>

      {/* Studio Owner Config Helper Bar & Button (Discreet & Professional) */}
      <div className="bg-[#08080b] border-t border-white/5 py-2 px-4 text-center">
        <button
          onClick={() => setIsOwnerModalOpen(true)}
          id="open-owner-config-btn"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#717182] hover:text-[#d4af37] transition-colors cursor-pointer"
        >
          <Settings className="w-3 h-3 text-[#d4af37]" />
          <span>Studio Owner: View Active Configuration &amp; Booking Submissions</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenBooking={() => scrollToBooking()} />

      {/* Studio Owner Helper Modal */}
      <StudioOwnerHelperModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
      />
    </div>
  );
}
