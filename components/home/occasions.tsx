import {
  Heart,
  Gem,
  CalendarHeart,
  Home,
  Baby,
  Flower2,
  Cake,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";
import { occasions } from "@/lib/occasions";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Gem,
  CalendarHeart,
  Home,
  Baby,
  Flower2,
  Cake,
  PartyPopper,
};

export function Occasions() {
  return (
    <section id="occasions" className="bg-ivory-dim bg-grain py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Occasions"
          title="One thoughtful invitation for every kind of celebration."
          description="Weddings are where we began — but every meaningful gathering deserves a beautiful welcome."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion, i) => {
            const Icon = iconMap[occasion.icon] ?? Heart;
            return (
              <Reveal key={occasion.id} delay={(i % 4) * 70}>
                <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-5 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(53,24,36,0.08)]">
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-blush/50 text-wine">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {occasion.madeToOrder ? (
                      <span className="rounded-full border border-sage/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sage">
                        Made to order
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-deep">
                    {occasion.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{occasion.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-ink/55">
          “Made to order” means we design it around your celebration, on enquiry.
        </p>
      </Container>
    </section>
  );
}
