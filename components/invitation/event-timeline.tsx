import { MapPin } from "lucide-react";
import type { InvitationDemo } from "@/lib/invitation-demos";
import { formatLongDate, formatEventWhen } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function EventTimeline({
  demo,
  lang,
}: {
  demo: InvitationDemo;
  lang: "en" | "regional";
}) {
  const t = (en: string, regional?: string) => (lang === "regional" && regional ? regional : en);

  return (
    <section aria-labelledby="events-heading" className="mx-auto max-w-2xl">
      <h2 id="events-heading" className="text-center font-display text-3xl font-semibold">
        The celebrations
      </h2>
      <p className="mt-2 text-center text-sm text-[var(--inv-muted)]">
        Every function, with its own moment.
      </p>
      <ol className="mt-8 space-y-4">
        {demo.events.map((event, i) => {
          const isMain = event.id === demo.mainEventId;
          return (
            <li
              key={event.id}
              className={cn(
                "relative rounded-xl border bg-[var(--inv-surface)] p-5 sm:p-6",
                isMain ? "border-[var(--inv-accent-strong)]" : "border-[var(--inv-line)]"
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--inv-line)] font-display text-base font-semibold text-[var(--inv-accent)]"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug">
                      {t(event.name, event.nameRegional)}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--inv-accent)]">
                      {formatLongDate(event.dateISO)}
                    </p>
                  </div>
                </div>
                {isMain ? (
                  <span className="rounded-full bg-[var(--inv-chip)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--inv-accent)]">
                    {t("The main day", "मुख्य दिन")}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--inv-muted)]">{event.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[var(--inv-muted)]">
                <span className="font-medium text-[var(--inv-text)]">{event.timeLabel}</span>
                <span>{formatEventWhen(event.dateISO)}</span>
                {event.location ? (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[var(--inv-accent)]" aria-hidden="true" />
                    {event.location}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
