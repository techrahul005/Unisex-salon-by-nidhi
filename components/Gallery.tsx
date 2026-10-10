'use client';

import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/salonData';
import SalonImage from './SalonImage';
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
  const [items] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? items.length - 1 : prev - 1) : 0
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev === items.length - 1 ? 0 : prev + 1) : 0
    );
  };

  const activePhoto = activeLightboxIndex !== null ? items[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EDE4D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8C6B32]">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] mt-2 mb-4 font-normal">
            Inside The Salon
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Real snapshots from Unisex Salon By Nidhi. Authentic styling stations, professional equipment, and client care in Jaipur.
          </p>
        </div>

        {/* 4 Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#EDE4D5] hover:border-[#C5A059]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[3/4] w-full bg-[#F5EFE6] overflow-hidden">
                {item.url && (
                  <SalonImage
                    src={item.url}
                    alt={item.title || `Unisex Salon By Nidhi photo ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    objectPosition="center center"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Verified Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#EDE4D5] text-[10px] font-semibold tracking-wider text-neutral-800 flex items-center gap-1 shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-[#A07A3B]" />
                  <span>Real Photo</span>
                </div>

                {/* Click to Expand Button Overlay */}
                <button
                  onClick={() => openLightbox(index)}
                  type="button"
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                  aria-label={`View ${item.title} full size`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Footer Caption */}
              <div className="p-5 bg-white flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono tracking-wider text-[#A07A3B] uppercase">
                      Photo 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      0{index + 1}/04
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#141414] group-hover:text-[#8C6B32] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            type="button"
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activePhoto.url && (
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-950/80">
                <SalonImage
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
            )}

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white px-4">
              <h4 className="font-serif text-lg font-normal text-white">
                {activePhoto.title}
              </h4>
              <p className="text-xs text-neutral-300 mt-1 max-w-md mx-auto">
                {activePhoto.caption}
              </p>
              <span className="text-[11px] font-mono text-neutral-400 mt-1 inline-block">
                Photo {activeLightboxIndex + 1} of {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
