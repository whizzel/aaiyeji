import { Check, Clock, PenLine } from "lucide-react";
import { packages, addOns, taxNote, deliveryNote } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PackageCta } from "@/components/home/package-cta";

export function Pricing() {
  return (
    <section id="packages" className="bg-ivory-dim bg-grain py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Packages"
          title="Simple packages. Thoughtfully priced."
          description="One invitation website, one clear price. Choose how personal you want it to feel."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, i) => {
            const featured = Boolean(pkg.featured);
            return (
              <Reveal key={pkg.id} delay={i * 90} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl p-7",
                    featured
                      ? "border border-gold/60 bg-deep text-ivory shadow-[0_24px_60px_rgba(53,24,36,0.28)] ring-1 ring-gold/40 ring-offset-4 ring-offset-ivory-dim lg:-my-3 lg:py-10"
                      : "border border-line bg-paper shadow-[0_1px_2px_rgba(53,24,36,0.05),0_12px_32px_rgba(53,24,36,0.06)]"
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-night">
                      Recommended
                    </span>
                  ) : null}

                  <h3 className={cn("font-display text-2xl font-semibold", featured ? "text-ivory" : "text-deep")}>
                    {pkg.name}
                  </h3>
                  <p className={cn("mt-1 text-sm", featured ? "text-ivory/65" : "text-ink/60")}>{pkg.tagline}</p>

                  <p className="mt-5 flex items-baseline gap-2">
                    <span className={cn("font-display text-5xl font-semibold", featured ? "text-gold-soft" : "text-wine")}>
                      {pkg.priceLabel}
                    </span>
                    <span className={cn("text-xs", featured ? "text-ivory/55" : "text-ink/50")}>
                      per invitation
                    </span>
                  </p>

                  <div
                    className={cn(
                      "mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium",
                      featured ? "text-ivory/75" : "text-ink/70"
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <Clock className={cn("h-3.5 w-3.5", featured ? "text-gold-soft" : "text-gold")} aria-hidden="true" />
                      {pkg.deliveryHours}-hour delivery
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PenLine className={cn("h-3.5 w-3.5", featured ? "text-gold-soft" : "text-gold")} aria-hidden="true" />
                      {pkg.revisions} {pkg.revisions === 1 ? "revision" : "revisions"}
                    </span>
                  </div>

                  <ul className={cn("mt-6 flex-1 space-y-2.5 border-t pt-6", featured ? "border-gold/25" : "border-line")}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug">
                        <Check
                          className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-gold-soft" : "text-sage")}
                          aria-hidden="true"
                        />
                        <span className={featured ? "text-ivory/85" : "text-ink/80"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <PackageCta packageId={pkg.id} packageName={pkg.name} featured={featured} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Add-ons */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper">
            <h3 className="border-b border-line bg-blush/40 px-6 py-4 font-display text-xl font-semibold text-deep">
              Optional add-ons
            </h3>
            <ul className="divide-y divide-line/70">
              {addOns.map((addOn) => (
                <li key={addOn.name} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-deep">{addOn.name}</p>
                    <p className="mt-0.5 text-xs text-ink/55">{addOn.note}</p>
                  </div>
                  <p className="font-display text-lg font-semibold text-wine">{addOn.priceLabel}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 max-w-2xl space-y-1.5 text-center text-xs leading-relaxed text-ink/55">
          <p>{taxNote}</p>
          <p>{deliveryNote}</p>
        </div>
      </Container>
    </section>
  );
}
