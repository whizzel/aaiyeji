/**
 * Central site configuration.
 * Contact details come ONLY from environment variables — never invent them.
 * See .env.example for the expected formats.
 */

const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/** Country code + digits only (10–15 digits). Empty when not configured. */
const whatsappNumber = rawWhatsapp.replace(/\D/g, "");

export const siteConfig = {
  name: "Aaiyeji",
  wordmark: "AAIYEJI",
  tagline: "A beautiful way to say, you’re invited.",
  supportingLine: "Your story. Your celebration. One beautiful link.",
  description:
    "Aaiyeji is a digital invitation studio creating personalised invitation websites for weddings and life’s special celebrations — every detail, every feeling, in one beautiful link.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  whatsappNumber: whatsappNumber.length >= 10 && whatsappNumber.length <= 15 ? whatsappNumber : "",
  contactEmail: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim(),
  instagramUrl: (process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "").trim(),
} as const;

export const hasWhatsApp = siteConfig.whatsappNumber.length > 0;
export const hasEmail = siteConfig.contactEmail.length > 0;

/** Build a wa.me link with an optional prefilled message. Returns null when unconfigured. */
export function whatsappLink(message?: string): string | null {
  if (!hasWhatsApp) return null;
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Build a mailto draft. Returns null when unconfigured. */
export function mailtoLink(subject: string, body: string): string | null {
  if (!hasEmail) return null;
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const navLinks = [
  { label: "Our Work", href: "/#work" },
  { label: "Occasions", href: "/#occasions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Packages", href: "/#packages" },
  { label: "FAQs", href: "/#faqs" },
] as const;
