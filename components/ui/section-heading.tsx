import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]",
            align === "center" && "justify-center",
            dark ? "text-gold-soft" : "text-sage"
          )}
        >
          <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-gold/60" : "bg-gold")} />
          {eyebrow}
          <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-gold/60" : "bg-gold")} />
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-[1.12] sm:text-4xl md:text-[2.75rem]",
          dark ? "text-ivory" : "text-deep"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-ivory/75" : "text-ink/75")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
