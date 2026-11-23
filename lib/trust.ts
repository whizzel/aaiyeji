/**
 * Trust & quality content.
 * No testimonials exist yet — the structure below is ready for approved ones
 * later. Until then the site shows the "Thoughtfully made" values section.
 */

export interface TrustValue {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export const trustValues: TrustValue[] = [
  {
    title: "Designed around your family",
    description:
      "Your names, your rituals, your language — never a generic forwarded template.",
    icon: "HeartHandshake",
  },
  {
    title: "One easy link",
    description:
      "Guests tap once. Everything opens beautifully on any phone, even on slow data.",
    icon: "Link2",
  },
  {
    title: "Details that matter",
    description:
      "Spellings, schedules and venues are reviewed with you before anything goes live.",
    icon: "ListChecks",
  },
  {
    title: "Mobile-first, always",
    description:
      "Designed for the WhatsApp moment — fast, light and lovely on small screens.",
    icon: "Smartphone",
  },
  {
    title: "A clear review process",
    description:
      "You see a preview first. Revisions are included in every package, before delivery.",
    icon: "Eye",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  occasion: string;
  approved: boolean;
}

/** Empty by design. Add only real, approved testimonials here. */
export const testimonials: Testimonial[] = [];
