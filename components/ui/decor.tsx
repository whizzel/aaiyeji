import { cn } from "@/lib/utils";

/**
 * Decorative brand motifs, drawn inline so they inherit currentColor.
 * Masters live in brand-assets/patterns/. Purely decorative: aria-hidden.
 */

export function ArchMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 520" className={className} aria-hidden="true" focusable="false" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 500 V250 C40 190 70 150 120 120 C165 93 185 70 200 34 C215 70 235 93 280 120 C330 150 360 190 360 250 V500" strokeWidth="2" />
        <path d="M62 500 V255 C62 205 88 170 132 143 C172 119 190 98 200 70 C210 98 228 119 268 143 C312 170 338 205 338 255 V500" strokeWidth="1.2" />
        <path d="M200 34 V14" strokeWidth="1.6" />
        <circle cx="200" cy="10" r="3.4" strokeWidth="1.4" />
        <path d="M30 250 H72 M328 250 H370" strokeWidth="1.4" />
        <path d="M34 262 H68 M332 262 H366" strokeWidth="1" />
        <path d="M20 500 H380" strokeWidth="2" />
        <path d="M34 510 H366" strokeWidth="1.2" />
        <path d="M96 176 V236" strokeWidth="1" />
        <circle cx="96" cy="242" r="4" strokeWidth="1.2" />
        <circle cx="96" cy="254" r="3" strokeWidth="1" />
        <path d="M304 176 V236" strokeWidth="1" />
        <circle cx="304" cy="242" r="4" strokeWidth="1.2" />
        <circle cx="304" cy="254" r="3" strokeWidth="1" />
        <path d="M200 430 C192 419 192 405 200 392 C208 405 208 419 200 430 Z" strokeWidth="1.6" />
        <path d="M200 430 C186 428 176 419 174 405 C188 407 197 416 200 430 Z" strokeWidth="1.3" />
        <path d="M200 430 C214 428 224 419 226 405 C212 407 203 416 200 430 Z" strokeWidth="1.3" />
        <path d="M186 438 H214" strokeWidth="1.2" />
        <path d="M40 500 C52 492 60 492 72 500" strokeWidth="1" />
        <path d="M328 500 C340 492 348 492 360 500" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function FloralDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" className={className} aria-hidden="true" focusable="false" fill="none">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12 H92" />
        <path d="M92 12 C98 12 102 9 104 5" />
        <path d="M70 12 C74 8 80 8 84 12 C80 16 74 16 70 12 Z" />
        <circle cx="14" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <path d="M232 12 H148" />
        <path d="M148 12 C142 12 138 9 136 5" />
        <path d="M170 12 C166 8 160 8 156 12 C160 16 166 16 170 12 Z" />
        <circle cx="226" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <path d="M120 19 C116.4 14.4 116.4 8.6 120 3.5 C123.6 8.6 123.6 14.4 120 19 Z" />
        <path d="M120 19 C114.4 18.2 110.6 14.4 109.6 9.2 C115.2 10 119 13.8 120 19 Z" />
        <path d="M120 19 C125.6 18.2 129.4 14.4 130.4 9.2 C124.8 10 121 13.8 120 19 Z" />
        <path d="M113 21.5 H127" strokeWidth="1.1" />
      </g>
    </svg>
  );
}

/** Tiny lotus bud used as a bullet/finial. */
export function LotusBud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("shrink-0", className)} aria-hidden="true" focusable="false" fill="none">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20 C9 16.2 9 11.4 12 7 C15 11.4 15 16.2 12 20 Z" />
        <path d="M12 20 C7.4 19.3 4.3 16.2 3.5 11.9 C8.1 12.6 11.2 15.7 12 20 Z" />
        <path d="M12 20 C16.6 19.3 19.7 16.2 20.5 11.9 C15.9 12.6 12.8 15.7 12 20 Z" />
      </g>
    </svg>
  );
}
