import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { MiniInvite } from "@/components/ui/mini-invite";
import { FloralDivider } from "@/components/ui/decor";

export function GuestPersonalisation() {
  return (
    <section id="personalisation" className="on-dark bg-deep py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-soft">
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
            The Royal experience
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] text-ivory sm:text-4xl md:text-[2.75rem]">
            Every guest feels <em className="italic text-gold-soft">personally</em> invited.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory/75">
            With Royal, each guest family receives their own link. It opens with their name on
            the welcome — “A warm welcome for the Sharma family” — before the celebration
            unfolds. A small detail that feels like a folded-hand greeting at the door.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-ivory/75">
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Up to 300 personalised guest-family links included.
            </li>
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Each link carries the family’s name on the welcome moment.
            </li>
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Extra links beyond 300: ₹299 per additional 100.
            </li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="/demo/royal?to=Sharma%20Family" variant="light">
              Open the personalised demo
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <Reveal>
          <div className="rounded-[2rem] border border-gold/25 bg-night/60 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <figure>
                <MiniInvite variant="royal" className="w-full" />
                <figcaption className="mt-3 text-center text-xs text-ivory/60">
                  The standard link
                </figcaption>
              </figure>
              <figure>
                <MiniInvite variant="personalised" className="w-full" />
                <figcaption className="mt-3 text-center text-xs text-gold-soft">
                  A family’s own link
                </figcaption>
              </figure>
            </div>
            <FloralDivider className="mx-auto mt-6 h-4 w-36 text-gold/60" />
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-ivory/45">
              Illustrative sample · fictional names
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
