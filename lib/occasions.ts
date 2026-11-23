/**
 * Occasions Aaiyeji designs for. Data-driven so new occasions are a one-line edit.
 * `madeToOrder` marks occasions designed on enquiry rather than from a ready template.
 */

export interface Occasion {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name, mapped in components/home/occasions.tsx
  madeToOrder?: boolean;
}

export const occasions: Occasion[] = [
  {
    id: "wedding",
    title: "Weddings",
    description:
      "From haldi to reception — every function, every ritual, in one elegant link the whole family can open.",
    icon: "Heart",
  },
  {
    id: "engagement",
    title: "Engagement, roka & sagai",
    description:
      "A sweet first announcement for the ring ceremony and the two families joining together.",
    icon: "Gem",
  },
  {
    id: "anniversary",
    title: "Anniversaries & milestones",
    description:
      "Celebrate the years together with a warm evening invitation that feels like the couple.",
    icon: "CalendarHeart",
  },
  {
    id: "housewarming",
    title: "Griha pravesh / housewarming",
    description:
      "Welcome guests to your new home with the puja schedule and an address that opens on any phone.",
    icon: "Home",
    madeToOrder: true,
  },
  {
    id: "baby-shower",
    title: "Godh bharai / baby shower",
    description:
      "A gentle, joyful invite for the mom-to-be and her circle — soft colours, sweet details.",
    icon: "Baby",
    madeToOrder: true,
  },
  {
    id: "naamkaran",
    title: "Naamkaran / naming ceremony",
    description:
      "Introduce the little one’s name with a keepsake invitation the family will love revisiting.",
    icon: "Flower2",
    madeToOrder: true,
  },
  {
    id: "birthday",
    title: "Milestone birthdays & gatherings",
    description:
      "First birthdays to golden jubilees — one thoughtful link for the whole family.",
    icon: "Cake",
    madeToOrder: true,
  },
  {
    id: "other",
    title: "Other meaningful celebrations",
    description:
      "Something else in mind? Tell us about it — we design for moments that matter.",
    icon: "PartyPopper",
    madeToOrder: true,
  },
];

/** Options for the enquiry form select. */
export const occasionOptions = occasions.map((o) => o.title);
