'use client';

import { SALON_SERVICES } from '@/data/salonData';
import {
  Scissors,
  Sparkles,
  Palette,
  Smile,
  HeartHandshake,
  UserCheck,
  ArrowRight,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'haircut-styling': <Scissors className="w-5 h-5 text-[#8C6B32]" />,
  'hair-treatments': <Sparkles className="w-5 h-5 text-[#8C6B32]" />,
  'hair-colouring': <Palette className="w-5 h-5 text-[#8C6B32]" />,
  'facial-skincare': <Smile className="w-5 h-5 text-[#8C6B32]" />,
  'makeup': <HeartHandshake className="w-5 h-5 text-[#8C6B32]" />,
  'mens-grooming': <UserCheck className="w-5 h-5 text-[#8C6B32]" />,
};

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F5EFE6]/50 border-t border-b border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C6B32]">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] mt-2 mb-4 font-normal">
            Services & Treatments
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Thoughtfully tailored hair styling, beauty, and grooming solutions delivered with dedicated care and attention.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E8DECf] hover:border-[#8C6B32]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DECf] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {serviceIcons[service.id]}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-medium text-[#141414] mb-2.5 group-hover:text-[#8C6B32] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 pt-3 border-t border-neutral-100">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-[#8C6B32] mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-neutral-100 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#141414] text-neutral-800 hover:text-white border border-[#E8DECf] hover:border-[#141414] text-xs font-medium transition-all group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note: No unverified pricing */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            Pricing depends on hair length, density, and tailored treatment requirements. Contact us on WhatsApp or call for a personalized consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
