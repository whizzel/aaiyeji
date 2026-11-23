import { ArrowRight, Clock, IndianRupee, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ArchMotif, FloralDivider } from "@/components/ui/decor";
import { MiniInvite } from "@/components/ui/mini-invite";
import { cn } from "@/lib/utils";

/**
 * Hero — the signature first impression.
 * The phone previews are coded product snapshots (fictional demo content),
 * not screenshots, so they stay crisp and weightless.
 */

function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[2.2rem] border border-deep/20 bg-deep p-1.5 shadow-[0_24px_60px_rgba(53,24,36,0.22)]", className)}>
      <div className="overflow-hidden rounded-[1.85rem]">{children}</div>
    </div>
  );
}

function RoyalScreen() {
  return (
    <div aria-hidden="true" className="bg-night px-4 pb-5 pt-6 text-center">
      <svg viewBox="0 0 64 40" className="mx-auto h-8 w-14 text-gold" fill="none">
        <path d="M8 38 V20 C8 10 18 4 32 2 C46 4 56 10 56 20 V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 38 V21 C14 13 22 7.5 32 6 C42 7.5 50 13 50 21 V38" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        <path d="M4 38 H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="mt-2 font-devanagari text-[11px] text-gold-soft">शुभ विवाह</p>
      <p className="mt-1.5 font-display text-[1.35rem] font-semibold italic leading-tight text-ivory">
        Aarohi <span className="text-gold-soft">&</span> Vihaan
      </p>
      <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.3em] text-gold-soft">12 · 02 · 2027</p>
      <div className="mx-auto my-3 h-px w-16 bg-gold/40" />
      <div className="rounded-lg border border-gold/30 bg-gold/10 px-2 py-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-ivory/60">Counting down to the wedding</p>
        <p className="mt-0.5 font-display text-sm font-semibold text-gold-soft">Jaipur · Rajasthan</p>
      </div>
      <ul className="mt-3 space-y-1.5 text-left">
        {[
          ["Haldi", "10 Feb"],
          ["Sangeet", "11 Feb"],
          ["Wedding", "12 Feb"],
        ].map(([name, date]) => (
          <li key={name} className="flex items-center justify-between rounded-md border border-gold/20 px-2.5 py-1.5">
            <span className="text-[10px] text-ivory/85">{name}</span>
            <span className="text-[9px] tracking-[0.14em] text-gold-soft">{date}</span>
          </li>
        ))}
      </ul>
      <span className="mt-3 inline-block rounded-full bg-gold px-4 py-1.5 text-[10px] font-bold text-night">
        RSVP · Demo
      </span>
    </div>
  );
}

function FloralScreen() {
  return (
    <div aria-hidden="true" className="bg-ivory px-4 pb-5 pt-6 text-center">
      <FloralDivider className="mx-auto h-4 w-24 text-sage" />
      <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.26em] text-sage">You’re invited</p>
      <p className="mt-1.5 font-display text-[1.3rem] font-semibold italic leading-tight text-deep">
        Meera <span className="text-wine">&</span> Arjun
      </p>
      <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-ink/55">20 December 2026</p>
      <p className="mt-1 text-[9px] text-ink/45">The Fernhouse Gardens, Pune</p>
      <div className="mx-auto my-3 h-px w-14 bg-line" />
      <div className="rounded-lg bg-blush/70 px-2 py-2">
        <p className="font-devanagari text-[11px] text-wine">मीरा आणि अर्जुन</p>
        <p className="mt-0.5 text-[9px] text-ink/55">English · मराठी</p>
      </div>
      <span className="mt-3 inline-block rounded-full border border-sage/50 px-4 py-1.5 text-[10px] font-semibold text-sage">
        Open invitation
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory bg-grain">
      <ArchMotif className="pointer-events-none absolute -right-28 -top-16 hidden h-[38rem] text-gold/25 md:block" />
      <Container className="relative grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-sage">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Aaiyeji · Digital Invitation Studio
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] text-deep sm:text-6xl lg:text-[4.1rem]">
            A beautiful way to say, <em className="italic text-wine">you’re invited.</em>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
            Personalised invitation websites for weddings and life’s special celebrations.
            Every detail, every feeling, in one beautiful link.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#work" size="lg">
              Explore invitation styles
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#enquire" variant="outline" size="lg">
              Create my invitation
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-ink/70">
            <li className="flex items-center gap-1.5">
              <IndianRupee className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              From ₹999
            </li>
            <li className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              24–72 hour delivery
            </li>
            <li className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Made for WhatsApp sharing
            </li>
          </ul>
          <p className="mt-2 text-xs text-ink/50">
            Delivery timing begins once all details and assets are received and confirmed.
          </p>
        </div>

        {/* Invitation preview composition */}
        <div className="relative mx-auto h-[26.5rem] w-full max-w-[21rem] sm:h-[29rem] sm:max-w-[24rem] lg:h-[32rem] lg:max-w-[28rem]">
          <PhoneFrame className="absolute left-0 top-10 w-40 -rotate-6 sm:w-48 lg:w-52">
            <FloralScreen />
          </PhoneFrame>
          <PhoneFrame className="absolute right-0 top-0 z-10 w-44 rotate-2 sm:w-52 lg:w-60">
            <RoyalScreen />
          </PhoneFrame>
          <MiniInvite
            variant="personalised"
            className="absolute -bottom-2 left-2 z-20 w-40 -rotate-3 shadow-[0_18px_44px_rgba(53,24,36,0.28)] sm:w-44"
          />
          <p className="sr-only">
            Preview of three Aaiyeji sample invitations: a royal heritage wedding, a garden
            wedding, and a personalised family welcome. All names are fictional.
          </p>
        </div>
      </Container>
      <FloralDivider className="mx-auto mb-8 h-5 w-48 text-gold/70" />
    </section>
  );
}
