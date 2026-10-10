'use client';

import { SALON_DATA } from '@/data/salonData';
import { MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF7F2]/90 border-b border-[#EDE4D5]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Salon Name Only */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label={SALON_DATA.name}
        >
          <span className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal tracking-tight text-[#141414] group-hover:text-[#A07A3B] transition-colors">
            {SALON_DATA.name}
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-neutral-500 font-sans -mt-0.5">
            Jaipur • Rajasthan
          </span>
        </a>

        {/* WhatsApp Booking Button */}
        <div className="flex items-center gap-3">
          <a
            href={SALON_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#2A2A2A] text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow active:scale-95"
            aria-label="Book on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span className="hidden xs:inline">WhatsApp Booking</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
