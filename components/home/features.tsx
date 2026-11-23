import {
  DoorOpen,
  CalendarDays,
  MapPin,
  Share2,
  Images,
  ClipboardCheck,
  Languages,
  Music,
  Users,
  Clock,
  Play,
  Check,
  type LucideIcon,
} from "lucide-react";
import { invitationFeatures, type FeatureTier } from "@/lib/features";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { FloralDivider } from "@/components/ui/decor";

const iconMap: Record<string, LucideIcon> = {
  DoorOpen,
  CalendarDays,
  MapPin,
  Share2,
  Images,
  ClipboardCheck,
  Languages,
  Music,
  Users,
};

const tierStyles: Record<FeatureTier, string> = {
  "All packages": "border-sage/40 text-sage",
  "Signature & up": "border-wine/25 bg-wine/5 text-wine",
  Royal: "border-gold/60 bg-gold/10 text-deep",
};

/** A coded fragment of the guest experience — illustrative, not live data. */
function InvitationFragment() {
  return (
    <div aria-hidden="true" className="rounded-[1.6rem] border border-gold/40 bg-night p-3 shadow-[0_24px_60px_rgba(53,24,36,0.25)]">
      <div className="rounded-[1.25rem] border border-gold/25 p-5">
        <p className="text-center font-devanagari text-xs text-gold-soft">शुभ विवाह</p>
        <p className="mt-1 text-center font-display text-2xl font-semibold italic text-ivory">
          Aarohi <span className="text-gold-soft">&</span> Vihaan
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2.5">
          <Clock className="h-4 w-4 text-gold-soft" />
          <span className="text-xs font-medium text-ivory/85">Countdown to 12 Feb 2027 · 7:30 pm</span>
        </div>
        <ul className="mt-4 space-y-2">
          {[
            ["Sangeet", "11 Feb · 7:30 pm", "Darbar lawn"],
            ["The Wedding", "12 Feb · 7:30 pm", "Mandap garden"],
          ].map(([name, when, where]) => (
            <li key={name} className="rounded-lg border border-gold/20 px-3 py-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ivory">{name}</span>
                <span className="text-[11px] tracking-wide text-gold-soft">{when}</span>
              </div>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ivory/60">
                <MapPin className="h-3 w-3" /> {where} · Open map
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-gold/20 px-3 py-2.5">
          <span className="flex items-center gap-2 text-xs text-ivory/85">
            <ClipboardCheck className="h-4 w-4 text-gold-soft" /> RSVP · Sharma family
          </span>
          <span className="flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold-soft">
            <Check className="h-3 w-3" /> 4 guests
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-[10px] font-medium text-ivory/80">
            <Play className="h-3 w-3 text-gold-soft" /> Tap to play music
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-[10px] font-medium text-ivory/80">
            <Languages className="h-3 w-3 text-gold-soft" /> English · हिन्दी
          </span>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="What’s inside"
            title="Everything a guest needs. Nothing they don’t."
            description="One link carries the whole celebration — from the first welcome to the last dance."
          />
          <ul className="mt-9 space-y-5">
            {invitationFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? DoorOpen;
              return (
                <li key={feature.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-blush/40 text-wine">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-semibold text-deep">{feature.title}</h3>
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em]",
                          tierStyles[feature.tier]
                        )}
                      >
                        {feature.tier}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{feature.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-7 text-sm text-ink/55">
            Features vary by package —{" "}
            <a href="#packages" className="font-medium text-wine underline-offset-4 hover:underline">
              see what’s included
            </a>
            .
          </p>
        </div>

        <Reveal className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] bg-blush/50 p-6 sm:p-9">
            <InvitationFragment />
            <FloralDivider className="mx-auto mt-6 h-4 w-36 text-gold" />
            <p className="mt-3 text-center text-xs text-ink/55">
              An illustrative glimpse of the guest experience.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
