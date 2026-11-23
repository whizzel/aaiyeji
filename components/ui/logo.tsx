import { cn } from "@/lib/utils";

/**
 * Aaiyeji logo system (initial concept — see brand-assets/README.md).
 * The symbol mirrors brand-assets/logo/aaiyeji-symbol.svg; the wordmark is
 * rendered as styled HTML for crispness at every size.
 */

export function AaiyejiSymbol({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const outer = tone === "dark" ? "var(--aaiyeji-gold-soft)" : "var(--aaiyeji-wine)";
  const inner = "var(--aaiyeji-gold)";
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 57 V30 C12 17 21 8.5 32 6 C43 8.5 52 17 52 30 V57" stroke={outer} strokeWidth="2.6" />
        <path d="M19 57 V31 C19 21 25.5 14.5 32 12.5 C38.5 14.5 45 21 45 31 V57" stroke={inner} strokeWidth="1.6" />
        <path d="M8 57 H56" stroke={outer} strokeWidth="2.6" />
        <path d="M32 47 C29.4 43.6 29.4 39.4 32 35.5 C34.6 39.4 34.6 43.6 32 47 Z" stroke={inner} strokeWidth="1.6" />
        <path d="M32 47 C27.8 46.4 24.9 43.6 24.2 39.6 C28.4 40.2 31.2 43 32 47 Z" stroke={inner} strokeWidth="1.4" />
        <path d="M32 47 C36.2 46.4 39.1 43.6 39.8 39.6 C35.6 40.2 32.8 43 32 47 Z" stroke={inner} strokeWidth="1.4" />
        <circle cx="32" cy="22.5" r="1.7" fill={inner} stroke="none" />
      </g>
    </svg>
  );
}

export function Logo({
  tone = "light",
  className,
  symbolClassName = "h-9 w-9",
}: {
  tone?: "light" | "dark";
  className?: string;
  symbolClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AaiyejiSymbol tone={tone} className={symbolClassName} />
      <span
        className={cn(
          "font-display text-[1.35rem] font-semibold leading-none tracking-[0.24em]",
          tone === "dark" ? "text-ivory" : "text-wine"
        )}
      >
        AAIYEJI
      </span>
    </span>
  );
}
