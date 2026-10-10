'use client';

import { SALON_DATA } from '@/data/salonData';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-neutral-300 pt-16 pb-24 sm:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-wide">
              {SALON_DATA.name}
            </h3>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {SALON_DATA.description}
            </p>
            <div className="pt-2 text-xs text-[#C5A059] uppercase tracking-widest font-mono">
              Jaipur • Rajasthan
            </div>
          </div>

          {/* Direct Contact info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Salon Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
              <span>{SALON_DATA.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-neutral-300 pt-1">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <a href={`tel:${SALON_DATA.phoneRaw}`} className="hover:text-white transition-colors">
                {SALON_DATA.phone}
              </a>
            </div>
          </div>

          {/* Quick Action buttons */}
          <div className="md:col-span-3 flex flex-col justify-start gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Connect Directly
            </h4>
            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${SALON_DATA.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call Us</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Unisex Salon By Nidhi. All rights reserved.</p>
          <p className="text-neutral-500">
            34-A, Raghu Vihar Vistar, Near VT Road Chauraha, Jaipur
          </p>
        </div>
      </div>
    </footer>
  );
}
