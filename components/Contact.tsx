'use client';

import { useState } from 'react';
import { SALON_DATA } from '@/data/salonData';
import {
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SALON_DATA.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    '34-A, Raghu Vihar Vistar, Near VT Road Chauraha, Patrkar Road, Jaipur, Rajasthan 302020'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5EFE6]/60 border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C6B32]">
            Location & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] mt-2 mb-4 font-normal">
            Visit Or Connect With Us
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated near VT Road Chauraha on Patrkar Road in Mansarovar, Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Actions (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE4D5] shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E0D7C9] flex items-center justify-center text-[#8C6B32] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Direct Phone
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#141414]">
                      {SALON_DATA.phone}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 text-neutral-400 hover:text-neutral-700 transition-colors rounded-lg hover:bg-neutral-100"
                  aria-label="Copy phone number"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Working Buttons */}
              <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${SALON_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#141414] hover:bg-[#2B2B2B] text-white text-sm font-medium tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-medium tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EDE4D5] shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E0D7C9] flex items-center justify-center text-[#8C6B32] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Salon Address
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#141414] mt-0.5 mb-2">
                      Unisex Salon By Nidhi
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                      {SALON_DATA.address}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="p-2 text-neutral-400 hover:text-neutral-700 transition-colors rounded-lg hover:bg-neutral-100 shrink-0"
                  aria-label="Copy full salon address"
                  title="Copy Address"
                >
                  {copiedAddress ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Working Directions Button */}
              <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#8C6B32] hover:bg-[#785926] text-white text-sm font-medium tracking-wide transition-all shadow-sm active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#E0D7C9] text-xs font-medium text-neutral-700 transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </motion.div>

          {/* Interactive Google Map Frame (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-3 border border-[#EDE4D5] shadow-md overflow-hidden">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-[#F0E8DC]">
                <iframe
                  title="Unisex Salon By Nidhi Location Map"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Card Footer */}
              <div className="p-4 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Near VT Road Chauraha, Jaipur</span>
                </div>
                <a
                  href={SALON_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8C6B32] hover:underline font-medium"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
