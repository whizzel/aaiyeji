import { HeartHandshake, Link2, ListChecks, Smartphone, Eye, ArrowRight, type LucideIcon } from "lucide-react";
import { trustValues, testimonials } from "@/lib/trust";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Link2,
  ListChecks,
  Smartphone,
  Eye,
};

export function Trust() {
  const approvedTestimonials = testimonials.filter((t) => t.approved);

  return (
    <section id="trust" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our promise"
          title="Thoughtfully made, detail by detail."
          description="No loud claims — just the care we put into every invitation that carries a family’s name."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustValues.map((value, i) => {
            const Icon = iconMap[value.icon] ?? HeartHandshake;
            return (
              <Reveal key={value.title} delay={(i % 3) * 80}>
                <article className="flex h-full gap-4 rounded-xl border border-line bg-paper p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-blush/40 text-wine">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-deep">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{value.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={160}>
            <a
              href="#work"
              className="flex h-full items-center justify-between gap-4 rounded-xl border border-wine/25 bg-wine p-5 text-ivory transition-colors hover:bg-wine-soft"
            >
              <div>
                <h3 className="font-display text-lg font-semibold">See the work for yourself</h3>
                <p className="mt-1 text-sm text-ivory/75">Open a live demo — that’s our best reference.</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        {/* Ready for real, approved testimonials — none are shown until they exist. */}
        {approvedTestimonials.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {approvedTestimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-line bg-paper p-6">
                <blockquote className="font-display text-lg italic leading-relaxed text-deep">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-ink/60">
                  {t.name} · {t.occasion}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
