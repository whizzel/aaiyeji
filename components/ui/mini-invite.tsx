import { cn } from "@/lib/utils";
import { FloralDivider } from "@/components/ui/decor";

/**
 * Coded mini invitation previews used in the hero, showcase and spotlight.
 * These are decorative snapshots of the real demo pages — aria-hidden,
 * with the surrounding copy describing them. All content is fictional.
 */

export type MiniInviteVariant = "royal" | "floral" | "minimal" | "personalised";

export function MiniInvite({
  variant,
  className,
}: {
  variant: MiniInviteVariant;
  className?: string;
}) {
  if (variant === "royal") {
    return (
      <div aria-hidden="true" className={cn("rounded-[1.4rem] border border-gold/40 bg-night p-3 text-center", className)}>
        <div className="rounded-[1.05rem] border border-gold/25 px-4 py-5">
          <p className="font-devanagari text-[11px] text-gold-soft">शुभ विवाह</p>
          <p className="mt-2 font-display text-xl font-semibold italic leading-tight text-ivory">
            Aarohi <span className="text-gold-soft">&</span> Vihaan
          </p>
          <div className="mx-auto my-3 h-px w-14 bg-gold/50" />
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-soft">
            12 · 02 · 2027
          </p>
          <p className="mt-1 text-[10px] text-ivory/60">Jaipur, Rajasthan</p>
          <span className="mt-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-semibold text-gold-soft">
            Open invitation
          </span>
        </div>
      </div>
    );
  }

  if (variant === "floral") {
    return (
      <div aria-hidden="true" className={cn("overflow-hidden rounded-[1.4rem] border border-line bg-paper text-center shadow-sm", className)}>
        <div className="bg-blush px-4 pb-2 pt-4">
          <FloralDivider className="mx-auto h-4 w-28 text-sage" />
        </div>
        <div className="px-4 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sage">
            You’re invited
          </p>
          <p className="mt-1.5 font-display text-xl font-semibold italic leading-tight text-deep">
            Meera <span className="text-wine">&</span> Arjun
          </p>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/60">
            20 December 2026
          </p>
          <p className="mt-1 text-[10px] text-ink/50">The Fernhouse Gardens, Pune</p>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div aria-hidden="true" className={cn("rounded-[1.4rem] border border-line bg-paper px-5 py-6 text-center shadow-sm", className)}>
        <div className="mx-auto mb-4 h-px w-10 bg-wine/60" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-ink/70">
          Sara & Kabir
        </p>
        <p className="mt-3 font-display text-2xl font-medium text-deep">24 . 01 . 2027</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ink/50">Assagao · Goa</p>
        <div className="mx-auto mt-4 h-1.5 w-1.5 rounded-full bg-wine" />
      </div>
    );
  }

  // personalised — Royal guest-link illustration
  return (
    <div aria-hidden="true" className={cn("rounded-[1.4rem] border border-gold/40 bg-wine p-3 text-center", className)}>
      <div className="rounded-[1.05rem] border border-gold/30 px-4 py-5">
        <svg viewBox="0 0 64 40" className="mx-auto h-7 w-12 text-gold-soft" fill="none" aria-hidden="true">
          <path d="M8 38 V20 C8 10 18 4 32 2 C46 4 56 10 56 20 V38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 38 H60" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-ivory/70">A warm welcome for</p>
        <p className="mt-1 font-display text-lg font-semibold italic text-gold-soft">The Sharma family</p>
        <p className="mt-2 text-[10px] text-ivory/60">Aarohi & Vihaan · 12 Feb 2027</p>
        <span className="mt-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-semibold text-gold-soft">
          Your personal link
        </span>
      </div>
    </div>
  );
}
