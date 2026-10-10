'use client';

import { useState } from 'react';
import { SALON_SERVICES } from '@/data/salonData';
import { MessageCircle, X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
}: BookingModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || SALON_SERVICES[0].id
  );
  const [preferredDate, setPreferredDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState<string>('Afternoon');
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const activeServiceObj = SALON_SERVICES.find((s) => s.id === selectedService);
  const serviceName = activeServiceObj ? activeServiceObj.title : 'General Inquiry';

  const generateWhatsAppMessage = () => {
    let msg = `Hello Unisex Salon By Nidhi,\n`;
    msg += `I would like to book an appointment for: *${serviceName}*.\n`;
    if (clientName.trim()) {
      msg += `Name: ${clientName.trim()}\n`;
    }
    if (preferredDate) {
      msg += `Preferred Date: ${preferredDate}\n`;
    }
    if (preferredTime) {
      msg += `Preferred Time: ${preferredTime}\n`;
    }
    if (notes.trim()) {
      msg += `Note: ${notes.trim()}\n`;
    }
    msg += `Please let me know your available slots. Thank you!`;
    return encodeURIComponent(msg);
  };

  const whatsappHref = `https://wa.me/919887181819?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] text-[#1A1A1A] rounded-3xl shadow-2xl border border-[#EDE4D5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-[#EDE4D5] bg-[#F5EFE6]/70">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#A07A3B]">
              Appointment Request
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#141414]">
              Book via WhatsApp
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-neutral-600 hover:text-black flex items-center justify-center transition-colors border border-[#EDE4D5]"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-neutral-600 mb-2">
              Select Desired Service
            </label>
            <div className="grid grid-cols-2 gap-2">
              {SALON_SERVICES.map((s) => {
                const isSelected = selectedService === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                        : 'border-[#E0D7C9] bg-white hover:border-neutral-400 text-neutral-800'
                    }`}
                  >
                    <div className="font-medium">{s.title}</div>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 mt-1 self-end text-[#C5A059]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name Field (optional) */}
          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-neutral-600 mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Priya Sharma / Rahul"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED4C4] bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
            />
          </div>

          {/* Preferred Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-wide uppercase text-neutral-600 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#A07A3B]" />
                Preferred Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#DED4C4] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide uppercase text-neutral-600 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A07A3B]" />
                Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#DED4C4] bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
              >
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 PM - 5 PM)</option>
                <option value="Evening (5:00 PM - 8:30 PM)">Evening (5 PM - 8:30 PM)</option>
                <option value="Any Available Time">Any Available Time</option>
              </select>
            </div>
          </div>

          {/* Special request / Note */}
          <div>
            <label className="block text-xs font-semibold tracking-wide uppercase text-neutral-600 mb-1.5">
              Note or Custom Request (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Need haircut + beard styling, or party styling"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-[#DED4C4] bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50"
            />
          </div>

          <p className="text-[12px] text-neutral-500 bg-white/70 p-3 rounded-xl border border-[#EDE4D5]">
            💬 Clicking below opens WhatsApp directly with your requested details pre-filled. You can message directly to confirm timing.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-3 bg-[#F5EFE6]/70 border-t border-[#EDE4D5] flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3.5 rounded-2xl bg-white border border-[#DED4C4] text-neutral-700 hover:text-black hover:bg-neutral-50 text-sm font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
