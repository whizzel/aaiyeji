"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "What exactly is a digital invitation website?",
    a: "A personal webpage for your celebration. Instead of a card or a video file, guests receive one link that opens a beautiful invitation — the welcome, your story, every function’s schedule, venue maps, countdown and RSVP — on any phone, with no app to install.",
  },
  {
    q: "Is it a video invitation or a website?",
    a: "It’s an interactive website, not a video. Guests can tap through functions, open directions, listen to music if they choose, and RSVP. Everything loads quickly, even on mobile data.",
  },
  {
    q: "How do guests open it?",
    a: "You share the link — usually on WhatsApp. Guests tap it and the invitation opens in their phone’s browser. No login, no download, no app. Older family members simply tap and read.",
  },
  {
    q: "Can we add multiple wedding functions?",
    a: "Yes. Signature and Royal include multiple functions — haldi, mehendi, sangeet, wedding and reception — each with its own date, time, description and venue. Essential includes a function schedule for simpler celebrations.",
  },
  {
    q: "Can guests RSVP?",
    a: "Signature and Royal include RSVP with guest count, so you know who’s coming and how many. Royal adds an RSVP dashboard and export, making it easy for the family to track and plan.",
  },
  {
    q: "Can we use Marathi, Hindi, Gujarati, Punjabi or another regional language?",
    a: "Yes. Signature and Royal include English plus one selected regional language. Marathi, Hindi, Gujarati and Punjabi are common choices; tell us what your family speaks and we’ll confirm the script and wording with you before design.",
  },
  {
    q: "Can every family receive a personalised link?",
    a: "Yes — that’s the Royal package. Up to 300 guest-family links are included, each opening with that family’s name on the welcome. Beyond 300, extra links are ₹299 per additional 100.",
  },
  {
    q: "How long does delivery take?",
    a: "Essential is delivered in 24 hours, Signature in 48 hours and Royal in 72 hours. Timing begins after all required details and assets are received and confirmed. Same-day rush delivery (₹499) is available only when our capacity allows — we confirm before you book.",
  },
  {
    q: "How many revisions are included?",
    a: "Essential includes 1 revision round, Signature 2 and Royal 3. If you need another pass, an extra revision round is ₹199 on any package.",
  },
  {
    q: "Can we add music?",
    a: "Signature and Royal include background music that starts only when the guest taps play — it never autoplays. Share a track you have the rights to use and we’ll set it up gently in the background.",
  },
  {
    q: "Can the invitation remain live after the wedding?",
    a: "Your invitation stays live through the celebration and for 60 days after the wedding. To keep it open longer as a keepsake, the add-on is ₹299 per year.",
  },
  {
    q: "Do you also make invitations for non-wedding occasions?",
    a: "Absolutely — engagement and roka, anniversaries, griha pravesh, godh bharai, naamkaran, milestone birthdays and other meaningful gatherings. Several of these are made to order; tell us about yours and we’ll design around it.",
  },
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-ivory-dim bg-grain py-16 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions, answered honestly."
          description="The things families usually ask before booking — no fine print surprises."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className={cn(i > 0 && "border-t border-line/70")}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-blush/30 sm:px-6"
                  >
                    <span className="font-display text-lg font-semibold leading-snug text-deep">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                        open && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={cn("faq-panel", open && "open")}
                >
                  <div>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink/75 sm:px-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
