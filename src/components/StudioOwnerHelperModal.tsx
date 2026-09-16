import React, { useState, useEffect } from 'react';
import { X, Settings, FileCode, Check, RefreshCw, Trash2, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import {
  BUSINESS_NAME,
  PHONE,
  WHATSAPP,
  EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  LOW_PACKAGE_PRICE,
  MEDIUM_PACKAGE_PRICE,
  HIGH_PACKAGE_PRICE,
  SERVICES,
  PACKAGES,
  PORTFOLIO_ITEMS,
} from '../businessConfig';
import { BookingSubmission } from '../types';

interface StudioOwnerHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioOwnerHelperModal: React.FC<StudioOwnerHelperModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'config' | 'submissions'>('config');
  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = JSON.parse(
          localStorage.getItem('recall_studio_bookings') || '[]'
        );
        setSubmissions(stored);
      } catch {
        setSubmissions([]);
      }
    }
  }, [isOpen]);

  const clearSubmissions = () => {
    if (confirm('Clear local test booking submissions?')) {
      localStorage.removeItem('recall_studio_bookings');
      setSubmissions([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="studio-owner-helper-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#111118] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#151522]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">
                Studio Management &amp; Configuration Guide
              </h3>
              <p className="text-xs text-[#9090a2]">
                Centralized config active at <code className="text-[#edd382]">src/businessConfig.ts</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center border-b border-white/10 px-6 bg-[#0f0f15]">
          <button
            onClick={() => setActiveTab('config')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 cursor-pointer transition-colors ${
              activeTab === 'config'
                ? 'border-[#d4af37] text-white'
                : 'border-transparent text-[#808092] hover:text-white'
            }`}
          >
            Active Config Values
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 cursor-pointer transition-colors flex items-center gap-2 ${
              activeTab === 'submissions'
                ? 'border-[#d4af37] text-white'
                : 'border-transparent text-[#808092] hover:text-white'
            }`}
          >
            <span>Saved Enquiries</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px] text-white">
              {submissions.length}
            </span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'config' ? (
            <div className="space-y-6 text-xs text-[#c5c5d5]">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <p className="font-semibold text-white text-sm flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#d4af37]" />
                  Centralized Architecture Overview
                </p>
                <p className="text-[#a0a0b2] leading-relaxed">
                  All business data is organized cleanly in a single source of truth.
                  Modifying any parameter in <code className="text-[#edd382]">src/businessConfig.ts</code> instantly reflects everywhere: Hero, Contact, Footer, WhatsApp links, Pricing cards, and Schema.org metadata.
                </p>
              </div>

              {/* Quick Parameter Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#888898] block text-[10px] uppercase">Business Name</span>
                  <span className="text-white font-semibold text-sm">{BUSINESS_NAME}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#888898] block text-[10px] uppercase">Phone &amp; WhatsApp</span>
                  <span className="text-white font-semibold text-sm">{PHONE} / {WHATSAPP}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#888898] block text-[10px] uppercase">Email</span>
                  <span className="text-white font-semibold text-sm">{EMAIL}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[#888898] block text-[10px] uppercase">Starting Prices</span>
                  <span className="text-white font-semibold text-sm">
                    ₹{LOW_PACKAGE_PRICE} / ₹{MEDIUM_PACKAGE_PRICE} / ₹{HIGH_PACKAGE_PRICE}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-[#888898] block text-[10px] uppercase">Available Services ({SERVICES.length})</span>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES.map((s) => (
                    <span key={s.id} className="px-2.5 py-1 rounded bg-white/5 text-[#dcdce5] text-[11px]">
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-[#888898] block text-[10px] uppercase">Portfolio Items ({PORTFOLIO_ITEMS.length})</span>
                <p className="text-[11px] text-[#9a9ab0]">
                  Portfolio placeholders are clearly tagged with <code className="text-[#edd382]">placeholderNotice</code>. Replace them by adding your photos into <code className="text-[#edd382]">PORTFOLIO_ITEMS</code>.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#a0a0b2]">
                  Enquiries submitted through the frontend booking form:
                </p>
                {submissions.length > 0 && (
                  <button
                    onClick={clearSubmissions}
                    className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Submissions</span>
                  </button>
                )}
              </div>

              {submissions.length === 0 ? (
                <div className="text-center py-12 bg-black/30 rounded-xl border border-white/5 p-6">
                  <p className="text-sm text-[#7e7e90]">No booking requests submitted in this browser yet.</p>
                  <p className="text-xs text-[#555566] mt-1">Submit a test enquiry from the booking form to see it appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-4 rounded-xl bg-[#14141e] border border-white/10 text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="font-bold text-white text-sm">
                          {sub.data.fullName}
                        </span>
                        <span className="text-[10px] text-[#7a7a8c]">
                          {new Date(sub.timestamp).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#9e9eb0]">
                        <div><strong className="text-white">Phone:</strong> +91 {sub.data.mobileNumber}</div>
                        <div><strong className="text-white">Service:</strong> {sub.data.service}</div>
                        <div><strong className="text-white">Package:</strong> {sub.data.packageLevel}</div>
                        <div><strong className="text-white">Date:</strong> {sub.data.eventDate}</div>
                      </div>
                      <div className="text-[11px] text-[#9e9eb0]">
                        <strong className="text-white">Location:</strong> {sub.data.eventLocation}
                      </div>
                      {sub.data.message && (
                        <div className="p-2 rounded bg-black/40 text-[11px] text-[#b0b0c0]">
                          <strong className="text-white">Note:</strong> {sub.data.message}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0f0f15] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wider uppercase cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
