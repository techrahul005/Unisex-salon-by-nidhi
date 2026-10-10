import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#faf7f2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Unisex Salon By Nidhi | Jaipur, Rajasthan',
  description:
    'Discover professional hair styling, beauty treatments, and grooming services at Unisex Salon By Nidhi in Jaipur, Rajasthan. Book an appointment today.',
  keywords: [
    'Unisex Salon By Nidhi',
    'Salon in Jaipur',
    'Haircut Jaipur',
    'Beauty Parlour Jaipur',
    'VT Road Salon Jaipur',
    'Patrkar Road Salon',
    'Bridal Makeup Jaipur',
    'Hair Treatment Jaipur',
  ],
  authors: [{ name: 'Unisex Salon By Nidhi' }],
  openGraph: {
    title: 'Unisex Salon By Nidhi | Jaipur, Rajasthan',
    description:
      'Discover professional hair styling, beauty treatments, and grooming services at Unisex Salon By Nidhi in Jaipur, Rajasthan.',
    url: 'https://unisexsalonbynidhi.com',
    siteName: 'Unisex Salon By Nidhi',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXNh2SIy-Rzhh29cepwOcwnwDUK0IT47aAePCgZYeYUScbd56UbP6Z4D8uBEF0baWCcqtKXCmTrLUBo7dw7KFQVuSRLkbb7UTrmtAHEL_KjZkPvsn4bJpS_zvlKMPiQr22Hs-w2w=s680-w680-h510-rw',
        width: 680,
        height: 510,
        alt: 'Unisex Salon By Nidhi - Interior & Styling Space',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unisex Salon By Nidhi | Jaipur, Rajasthan',
    description:
      'Professional hair styling, beauty treatments, and grooming services at Unisex Salon By Nidhi, Jaipur.',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXNh2SIy-Rzhh29cepwOcwnwDUK0IT47aAePCgZYeYUScbd56UbP6Z4D8uBEF0baWCcqtKXCmTrLUBo7dw7KFQVuSRLkbb7UTrmtAHEL_KjZkPvsn4bJpS_zvlKMPiQr22Hs-w2w=s680-w680-h510-rw',
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Unisex Salon By Nidhi',
  image:
    'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXNh2SIy-Rzhh29cepwOcwnwDUK0IT47aAePCgZYeYUScbd56UbP6Z4D8uBEF0baWCcqtKXCmTrLUBo7dw7KFQVuSRLkbb7UTrmtAHEL_KjZkPvsn4bJpS_zvlKMPiQr22Hs-w2w=s680-w680-h510-rw',
  telephone: '+919887181819',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '34-A, Raghu Vihar Vistar, Near VT Road Chauraha, Patrkar Road',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302020',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '26.8530',
    longitude: '75.7600',
  },
  url: 'https://unisexsalonbynidhi.com',
  priceRange: '₹₹',
  servesCuisine: undefined,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#FAF7F2] text-[#1A1A1A] antialiased min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
