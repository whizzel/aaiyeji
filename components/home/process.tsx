import { Clock } from "lucide-react";
import { deliveryNote } from "@/lib/pricing";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Tell us your story",
    description:
      "Share names, dates, functions, venues, language and photos through a simple brief.",
  },
  {
    title: "Choose your direction",
    description:
      "Pick a style or share a reference. We personalise the design around your family.",
  },
  {
    title: "Review your preview",
    description:
      "Check names, spellings, schedules and details. Revisions follow your selected package.",
  },
  {
    title: "Share your invitation",
    description:
      "Receive your live link and send it to family and guests — one tap on WhatsApp.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From your story to their screen."
          description="A calm, guided process — you always know what happens next."
        />
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-6 hidden border-t border-dashed border-gold/60 lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <li className="relative flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory font-display text-xl font-semibold text-wine shadow-sm">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-deep">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <p className="mx-auto mt-12 flex max-w-xl items-start justify-center gap-2 text-center text-sm text-ink/60">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          {deliveryNote}
        </p>
      </Container>
    </section>
  );
}
