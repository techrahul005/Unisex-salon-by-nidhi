'use client';

import { SALON_DATA } from '@/data/salonData';
import SalonImage from './SalonImage';
import { MessageCircle, Phone, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F5EFE6]">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EDE4D5]/70 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#EDE4D5]/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Salon Branding & Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill / Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE4D5]/80 border border-[#DDD3C2] text-xs font-medium text-neutral-800 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#A07A3B]" />
              <span className="tracking-wide">Jaipur&apos;s Premium Unisex Salon Experience</span>
            </div>

            {/* Main Required Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141414] leading-[1.12] tracking-tight font-normal mb-6">
              Your Beauty, <br />
              <span className="italic text-[#8C6B32] font-normal">Our Passion</span>
            </h1>

            {/* Main Required Description */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed mb-8 font-light">
              Discover professional hair styling, beauty treatments, and grooming services at{' '}
              <strong className="font-semibold text-neutral-900">Unisex Salon By Nidhi</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#141414] text-white hover:bg-[#2B2B2B] font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>Book Appointment</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              <a
                href={`tel:${SALON_DATA.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/90 hover:bg-white text-neutral-800 border border-[#E0D7C9] hover:border-neutral-400 font-medium text-sm sm:text-base transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#A07A3B]" />
                <span>Call +91 98871 81819</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 pt-8 border-t border-[#EDE4D5] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white border border-[#E0D7C9] flex items-center justify-center text-[#A07A3B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">Hygiene First</div>
                  <div className="text-[11px] text-neutral-500">Sanitized workstations</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white border border-[#E0D7C9] flex items-center justify-center text-[#A07A3B] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">Unisex Care</div>
                  <div className="text-[11px] text-neutral-500">Women & Men styling</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-full bg-white border border-[#E0D7C9] flex items-center justify-center text-[#A07A3B] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">VT Road Area</div>
                  <div className="text-[11px] text-neutral-500">Mansarovar, Jaipur</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Salon Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Behind */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#E3D7C5] to-transparent -rotate-1 opacity-80" />
              
              {/* Photo Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl border border-[#EDE4D5]">
                <div className="aspect-[4/3] sm:aspect-[4/3] w-full relative">
                  {/* Tested object-position: 'center top' (0%) brings the image downward into frame so the complete shop signboard with 'Unisex Salon By Nidhi' and the entire storefront entrance are both clearly visible (as tested, center 65% or center 70% pushes the image upward and cuts off the signboard). */}
                  <SalonImage
                    src={SALON_DATA.heroImage}
                    alt="Unisex Salon By Nidhi - Shop Signboard and Storefront in Jaipur"
                    fill
                    priority
                    objectPosition="center top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="w-full h-full"
                  />
                </div>

                {/* Photo Caption Badge */}
                <div className="p-4 sm:p-5 bg-white/95 backdrop-blur-sm border-t border-[#F0E8DC] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-medium text-neutral-900">
                      Unisex Salon By Nidhi
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Complete storefront &amp; shop signboard • Jaipur
                    </p>
                  </div>
                  <a
                    href={SALON_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
