export interface SalonService {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  url: string | null; // null if slot is awaiting photo URL from owner
  caption?: string;
}

export const SALON_DATA = {
  name: 'Unisex Salon By Nidhi',
  tagline: 'Your Beauty, Our Passion',
  description:
    'Discover professional hair styling, beauty treatments, and grooming services at Unisex Salon By Nidhi.',
  phone: '+91 98871 81819',
  phoneRaw: '+919887181819',
  address:
    '34-A, Raghu Vihar Vistar, Near VT Road Chauraha, Patrkar Road, Jaipur, Rajasthan 302020',
  city: 'Jaipur',
  state: 'Rajasthan',
  pincode: '302020',
  whatsappUrl: 'https://wa.me/919887181819',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=34-A,+Raghu+Vihar+Vistar,+Near+VT+Road+Chauraha,+Patrkar+Road,+Jaipur,+Rajasthan+302020',
  heroImage:
    'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXNh2SIy-Rzhh29cepwOcwnwDUK0IT47aAePCgZYeYUScbd56UbP6Z4D8uBEF0baWCcqtKXCmTrLUBo7dw7KFQVuSRLkbb7UTrmtAHEL_KjZkPvsn4bJpS_zvlKMPiQr22Hs-w2w=s680-w680-h510-rw',
};

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'haircut-styling',
    title: 'Haircut & Styling',
    shortDescription:
      'Personalized precision cuts, blow-dry finishes, and contemporary styling tailored to your face shape and personal aesthetic.',
    iconName: 'Scissors',
    details: [
      'Precision hair cutting for women & men',
      'Blow-dry & signature heat styling',
      'Texture consultation & recommendations',
    ],
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    shortDescription:
      'Revitalizing therapies designed to restore shine, deeply nourish follicles, repair damage, and strengthen hair.',
    iconName: 'Sparkles',
    details: [
      'Deep conditioning spa rituals',
      'Keratin & protein nourishment therapy',
      'Scalp detox & moisture replenishment',
    ],
  },
  {
    id: 'hair-colouring',
    title: 'Hair Colouring',
    shortDescription:
      'Professional shades and highlights crafted to enhance your hair texture with rich, luminous color dimension.',
    iconName: 'Palette',
    details: [
      'Global hair color & root touch-ups',
      'Highlights, streaks & balayage tones',
      'Gentle formulation & post-color care',
    ],
  },
  {
    id: 'facial-skincare',
    title: 'Facial & Skincare',
    shortDescription:
      'Customized therapeutic facials and clarifying treatments for a healthy, refreshed, and radiant complexion.',
    iconName: 'Smile',
    details: [
      'Deep pore cleansing & gentle exfoliation',
      'Hydrating glow facials & skin rejuvenation',
      'Calming massage & herbal skin masks',
    ],
  },
  {
    id: 'makeup',
    title: 'Makeup',
    shortDescription:
      'Flawless makeup artistry for festive celebrations, parties, weddings, and special events.',
    iconName: 'HeartHandshake',
    details: [
      'Party & evening glam looks',
      'Subtle natural & engagement makeup',
      'Skin-prepping & long-wear setting',
    ],
  },
  {
    id: 'mens-grooming',
    title: "Men's Grooming",
    shortDescription:
      'Dedicated styling and grooming for gentlemen including sharp hair trims, beard sculpting, and clean finishes.',
    iconName: 'UserCheck',
    details: [
      'Modern fade & classic gentleman cuts',
      'Beard shaping, trimming & styling',
      'Relaxing hair wash & head massage',
    ],
  },
];

/**
 * Gallery Configuration
 * - 4 verified real salon photos provided by the owner
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Hair Styling & Treatment',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhWtOtjFCw8G5M0cJk73gJzN1utJLOSQ9QxxSflz7f3ddtneno3EajCDu0FC05jcbly_bGr7RJ2_-pOGZVgn144QlRqN1zvOwcRZa63T32kF4VXIiNcVxfwvrIXqChZCDDc5bgAw=w243-h406-n-k-no-nu',
    caption: 'Dedicated styling and hair care treatments in progress at the workstation.',
  },
  {
    id: 'gallery-2',
    title: 'Styling Chairs & Stations',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZ8pLFnwIBEiR8vfvpUgt8gHUopAwRdDq5HRp98RnhUDtB9AYZr5jNXc6zZLExK4cfZI1XEmvHcVtIiEnaHOqC1FhUO_Y2uhbAxQlV2elXVGOEPL7B1bKjuNQuv7ibBjb0ih0=w243-h406-n-k-no-nu',
    caption: 'Comfortable salon chairs and illuminated mirror stations designed for clients.',
  },
  {
    id: 'gallery-3',
    title: 'Hair Care & Client Experience',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QkjH5vpWbECiFEFtqL21uOBSsu75HEX61dLHW6WuZXd727MyXKUCbMSURgIkjGYE3K9CofLL3euMilgAvcQay7FfWx5RhG3E9R7C6jqrJvSSuamg1whNj13ttlLj3RZkgND4zp=w243-h304-n-k-no-nu',
    caption: 'Personalized hair styling and beauty services delivered with care.',
  },
  {
    id: 'gallery-4',
    title: 'Salon Interior & Equipment',
    url: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBiZCRsKmoYXL9xzfL1vcMS0gQEjcN2bkg_G8S9Ke_fRXklh8rEn3Upy1J_MK9mrHNkak-T2MnwYQurAumFWfGVxtEp8nwnP6aAUG1H3x1-CHaVAPxoUK509t3sukGDo-5PNGI=w243-h406-n-k-no-nu',
    caption: 'Fully equipped styling area with modern grooming tools and products.',
  },
];
