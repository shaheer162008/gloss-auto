/** Easy-to-update business details for Gloss Auto */
export const site = {
  name: "Gloss Auto",
  tagline: "Mobile Car Detailing",
  phoneDisplay: "+61 432 677 437",
  phoneTel: "tel:+61432677437",
  email: "glossautoqld@gmail.com",
  emailMailto: "mailto:glossautoqld@gmail.com",
  bookingUrl: "https://squareup.com/appointments/book/LNQB1AMB9307D",
  serviceArea: "Moreton Bay & Surrounds",
  locationHint: "Burpengary QLD & surrounds",
  logoSrc: "/gloss-auto.png",
  heroImage: "/images/hero-alt.jpg",
  socials: {
    instagram: "https://www.instagram.com/glossautocareqld/",
    tiktok: "https://www.tiktok.com/@gloss.auto.qld",
    facebook: "https://www.facebook.com/profile.php?id=61574307178621",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "exterior",
    name: "Exterior Detail",
    price: 115,
    description:
      "Wash, decontaminate, and protect your paint, finished at your place.",
    details: [
      "Hand wash & dry",
      "Wheel & tyre clean",
      "Window clean",
      "Paint-safe products",
    ],
    icon: "/icons/exterior.svg",
  },
  {
    slug: "interior",
    name: "Interior Detail",
    price: 115,
    description:
      "Deep clean, vacuum, and refresh every surface inside the cabin.",
    details: [
      "Full vacuum",
      "Dashboard & console wipe",
      "Door cards & plastics",
      "Fresh, clean finish",
    ],
    icon: "/icons/interior.svg",
  },
  {
    slug: "full",
    name: "Full Detail",
    price: 210,
    description: "Inside & out. The complete reset your car deserves.",
    details: [
      "Everything in Exterior",
      "Everything in Interior",
      "Best value package",
      "Ready to turn heads",
    ],
    icon: "/icons/full.svg",
    badge: "Most Popular",
  },
  {
    slug: "cut-polish",
    name: "Cut & Polish",
    price: 250,
    description: "Paint correction to restore gloss, clarity, and depth.",
    details: [
      "Machine polish",
      "Swirl & haze reduction",
      "Gloss enhancement",
      "Quote based on condition",
    ],
    icon: "/icons/paint.svg",
  },
] as const;

export const trustPoints = [
  {
    title: "Affordable",
    text: "Premium results without the dealership price tag.",
    icon: "/icons/exterior.svg",
  },
  {
    title: "Reliable",
    text: "On time, thorough, and consistent every visit.",
    icon: "/icons/phone.svg",
  },
  {
    title: "High-quality",
    text: "Pro-grade products and careful hand finishing.",
    icon: "/icons/paint.svg",
  },
  {
    title: "Mobile",
    text: "We come to your door: home, work, or wherever you park.",
    icon: "/icons/location.svg",
  },
] as const;

export const aboutHighlights = [
  {
    title: "We come to you",
    text: "No drop-offs. No waiting rooms. We detail at your home, workplace, or preferred location across Moreton Bay & surrounds.",
  },
  {
    title: "Built for busy owners",
    text: "Book around your schedule. Call, DM, or send a quick message and we will confirm a time that works.",
  },
  {
    title: "Finish you can see",
    text: "From everyday washes to cut & polish paint correction, every job is done carefully with quality products.",
  },
] as const;

/** Placeholder gallery until real Gloss Auto job photos are added */
/** Instagram reels embedded on the Work page and homepage preview */
export const workReels = [
  "https://www.instagram.com/reel/DbIb74XT7kQ/",
  "https://www.instagram.com/reel/DbCO9F9TYaO/",
  "https://www.instagram.com/reel/Da1t7ZpTaoY/",
  "https://www.instagram.com/reel/Da1smAzzPdj/",
  "https://www.instagram.com/reel/DaxQRcdTfEV/",
  "https://www.instagram.com/reel/DawIaODTX-0/",
  "https://www.instagram.com/reel/DawG6kJT4dn/",
  "https://www.instagram.com/reel/Daq-pwpTcxa/",
  "https://www.instagram.com/reel/DaetwIZzzo2/",
  "https://www.instagram.com/reel/DabGar4zWBr/",
  "https://www.instagram.com/reel/DYBsEmZz4u6/",
  "https://www.instagram.com/reel/DX1DyWXznMX/",
] as const;

/** Placeholder gallery until real Gloss Auto job photos are added */
export const workGallery = [
  {
    src: "/images/work-1.jpg",
    title: "Exterior wash & finish",
    caption: "Clean lines and a sharp wet look.",
  },
  {
    src: "/images/work-2.jpg",
    title: "Hand detailing care",
    caption: "Careful product work, panel by panel.",
  },
  {
    src: "/images/work-3.jpg",
    title: "Interior refresh",
    caption: "Cabin cleaned, wiped, and reset.",
  },
  {
    src: "/images/work-4.jpg",
    title: "Showroom gloss",
    caption: "Paint that catches the light again.",
  },
  {
    src: "/images/work-5.jpg",
    title: "Street ready",
    caption: "Finished at your location, ready to drive.",
  },
  {
    src: "/images/work-6.jpg",
    title: "Premium polish look",
    caption: "Depth and clarity brought back.",
  },
] as const;
