/** Validation helpers shared by the enquiry form and demo RSVP. */

export function isNonEmpty(value: string, min = 2): boolean {
  return value.trim().length >= min;
}

/** Normalise a phone/WhatsApp number to digits only. */
export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

/** Accept 10–15 digits (Indian mobile or international format). */
export function isValidWhatsAppNumber(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 15;
}

/** Optional date in dd/mm/yyyy format. */
export function isValidOptionalDate(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(trimmed);
  if (!match) return false;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  return (
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= 31 &&
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export interface EnquiryValues {
  name: string;
  whatsapp: string;
  occasion: string;
  eventDate: string;
  pkg: string;
  notes: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!isNonEmpty(values.name)) {
    errors.name = "Please tell us your name so we know who we’re talking to.";
  }
  if (!values.whatsapp.trim()) {
    errors.whatsapp = "A WhatsApp number helps us reach you quickly.";
  } else if (!isValidWhatsAppNumber(values.whatsapp)) {
    errors.whatsapp = "That doesn’t look like a valid number — please use 10–15 digits with country code if outside India.";
  }
  if (!values.occasion) {
    errors.occasion = "Please choose the occasion you’re celebrating.";
  }
  if (!isValidOptionalDate(values.eventDate)) {
    errors.eventDate = "Please use a valid date in dd/mm/yyyy format, or leave it empty.";
  }
  return errors;
}

/** Compose the prefilled enquiry message from form values. */
export function buildEnquiryMessage(values: EnquiryValues, packageLabel: string): string {
  const lines = [
    "Namaste Aaiyeji! I’d like to create a digital invitation.",
    "",
    `Name: ${values.name.trim()}`,
    `WhatsApp: ${values.whatsapp.trim()}`,
    `Occasion: ${values.occasion}`,
  ];
  if (values.eventDate) lines.push(`Event date: ${values.eventDate}`);
  lines.push(`Preferred package: ${packageLabel}`);
  if (values.notes.trim()) lines.push(`Style / notes: ${values.notes.trim()}`);
  return lines.join("\n");
}
