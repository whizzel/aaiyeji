import { ArrowUpRight } from "lucide-react";
import { invitationDemos } from "@/lib/invitation-demos";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { MiniInvite } from "@/components/ui/mini-invite";

const previewBg: Record<string, string> = {
  royal: "bg-night",
  floral: "bg-blush/60",
  minimal: "bg-ivory-dim",
};

export function InvitationShowcase() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected invitation experiences"
          title="Made to be opened. Made to be remembered."
          description="Three sample styles, built as real working pages. Open one, tap around, and imagine your names there."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {invitationDemos.map((demo, i) => (
            <Reveal key={demo.slug} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_1px_2px_rgba(53,24,36,0.05),0_12px_32px_rgba(53,24,36,0.06)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(53,24,36,0.06),0_20px_48px_rgba(53,24,36,0.12)]">
                <div className={cn("px-8 py-8", previewBg[demo.theme])}>
                  <MiniInvite
                    variant={demo.theme}
                    className="mx-auto w-full max-w-[15rem] transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-deep">{demo.styleName}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{demo.styleDescription}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-sage">
                    {demo.couple.names} · Sample
                  </p>
                  <ButtonLink href={`/demo/${demo.slug}`} variant="outline" size="sm" className="mt-4 w-full">
                    View live demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink/55">
          Every demo is a real, working invitation page — all names, venues and dates are fictional.
        </p>
      </Container>
    </section>
  );
}
