/** What's inside an Aaiyeji invitation — package-aware feature list. */

export type FeatureTier = "All packages" | "Signature & up" | "Royal";

export interface InvitationFeature {
  title: string;
  description: string;
  icon: string; // lucide icon name
  tier: FeatureTier;
}

export const invitationFeatures: InvitationFeature[] = [
  {
    title: "A warm welcome & family greeting",
    description: "An opening moment that welcomes guests and introduces the families before the details begin.",
    icon: "DoorOpen",
    tier: "All packages",
  },
  {
    title: "Function schedule & countdown",
    description: "Every ceremony with its date, time and venue — plus a live countdown to the big day.",
    icon: "CalendarDays",
    tier: "All packages",
  },
  {
    title: "Venue details & map directions",
    description: "The address, a little context, and one tap to open directions in the guest's map app.",
    icon: "MapPin",
    tier: "All packages",
  },
  {
    title: "Easy sharing & WhatsApp preview",
    description: "One beautiful link with a rich preview card when shared on WhatsApp.",
    icon: "Share2",
    tier: "All packages",
  },
  {
    title: "Couple story & photo gallery",
    description: "How it began, told in your words — with a gallery of the moments that matter.",
    icon: "Images",
    tier: "Signature & up",
  },
  {
    title: "RSVP with guest count",
    description: "Guests confirm attendance and headcount, so the family can plan with confidence.",
    icon: "ClipboardCheck",
    tier: "Signature & up",
  },
  {
    title: "Regional-language content",
    description: "English plus one selected regional language, so every elder reads it in their own tongue.",
    icon: "Languages",
    tier: "Signature & up",
  },
  {
    title: "Tap-to-play music",
    description: "A song that means something to you — it starts only when the guest chooses to play it.",
    icon: "Music",
    tier: "Signature & up",
  },
  {
    title: "Personalised family links",
    description: "Up to 300 guest-family links, each opening with that family's name on the welcome.",
    icon: "Users",
    tier: "Royal",
  },
];
