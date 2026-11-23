/**
 * Aaiyeji packages — the single source of truth for pricing.
 * Facts come from the team's 60-day business plan. Edit here, not in components.
 * Do not invent discounts, guarantees or tax claims.
 */

export type PackageId = "essential" | "signature" | "royal";

export interface AaiyejiPackage {
  id: PackageId;
  name: string;
  price: number;
  priceLabel: string;
  tagline: string;
  deliveryHours: 24 | 48 | 72;
  revisions: number;
  featured?: boolean;
  features: string[];
}

export const packages: AaiyejiPackage[] = [
  {
    id: "essential",
    name: "Essential",
    price: 999,
    priceLabel: "₹999",
    tagline: "A beautiful start, ready in a day.",
    deliveryHours: 24,
    revisions: 1,
    features: [
      "Choice of ready-made templates",
      "Couple/family names, date, venue & map link",
      "Function schedule and countdown",
      "WhatsApp preview card",
      "Brand subdomain link",
      "24-hour delivery · 1 revision",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: 1999,
    priceLabel: "₹1,999",
    tagline: "Your theme, your story, your language.",
    deliveryHours: 48,
    revisions: 2,
    featured: true,
    features: [
      "Everything in Essential",
      "Custom design based on your chosen theme",
      "Multiple functions — haldi, mehendi, sangeet, wedding & reception",
      "RSVP with guest count",
      "Couple story and photo gallery",
      "Background music, played only when the guest taps play",
      "English plus one selected regional language",
      "48-hour delivery · 2 revisions",
    ],
  },
  {
    id: "royal",
    name: "Royal",
    price: 3999,
    priceLabel: "₹3,999",
    tagline: "A personal welcome for every family.",
    deliveryHours: 72,
    revisions: 3,
    features: [
      "Everything in Signature",
      "Personalised link per guest family — up to 300 family links",
      "AI-assisted couple illustration",
      "RSVP dashboard and export",
      "Custom-domain option (domain cost additional)",
      "72-hour delivery · 3 revisions",
    ],
  },
];

export interface AddOn {
  name: string;
  priceLabel: string;
  note: string;
}

export const addOns: AddOn[] = [
  {
    name: "Same-day rush delivery",
    priceLabel: "₹499",
    note: "Only when capacity allows — we confirm before you book.",
  },
  {
    name: "Extra revision round",
    priceLabel: "₹199",
    note: "Any package, whenever you need another pass.",
  },
  {
    name: "Extra guest-family links",
    priceLabel: "₹299 / 100",
    note: "Beyond the 300 included · Royal only.",
  },
  {
    name: "Keep the site live after 60 days",
    priceLabel: "₹299 / year",
    note: "Your invitation stays open as a keepsake.",
  },
];

export const taxNote =
  "Final quote and applicable taxes, if any, will be confirmed before booking.";

export const deliveryNote =
  "Delivery timing begins after all required details and assets are received and confirmed.";

export function getPackage(id: string): AaiyejiPackage | undefined {
  return packages.find((p) => p.id === id);
}
