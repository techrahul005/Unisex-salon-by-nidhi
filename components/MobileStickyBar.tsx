'use client';

import { SALON_DATA } from '@/data/salonData';
import { Phone, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#EDE4D5] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${SALON_DATA.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-neutral-900 text-white font-medium text-xs shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Now</span>
        </a>

        <a
          href={SALON_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-medium text-xs shadow-sm active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
