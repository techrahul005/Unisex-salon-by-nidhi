'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1A1A]">
      {/* 1. Header: Salon name & WhatsApp booking button only */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero / About Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section */}
        <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 4. Gallery Section */}
        <Gallery />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking Assistant Modal */}
      <BookingModal
        key={selectedServiceId || 'default'}
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
