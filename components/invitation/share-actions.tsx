"use client";

import { useState } from "react";
import { Share2, Link2, CalendarPlus, Check } from "lucide-react";
import { buildIcs, downloadTextFile, copyText, type CalendarEvent } from "@/lib/utils";

/**
 * Share (Web Share API → copy-link fallback) and add-to-calendar (.ics download).
 * Works entirely client-side; no data leaves the device except via the guest's
 * own share action.
 */
export function ShareActions({
  title,
  text,
  calendarEvent,
}: {
  title: string;
  text: string;
  calendarEvent: CalendarEvent;
}) {
  const [feedback, setFeedback] = useState<string | null>(null);

  const flash = (msg: string) => {
    setFeedback(msg);
    window.setTimeout(() => setFeedback(null), 2600);
  };

  const currentUrl = () => window.location.href;

  const onShare = async () => {
    const url = currentUrl();
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* user cancelled or share failed — fall back to copy */
      }
    }
    const ok = await copyText(url);
    flash(ok ? "Link copied — paste it anywhere." : "Couldn’t copy automatically. Long-press the address bar to copy.");
  };

  const onCopy = async () => {
    const ok = await copyText(currentUrl());
    flash(ok ? "Link copied." : "Couldn’t copy automatically. Long-press the address bar to copy.");
  };

  const onCalendar = () => {
    const ics = buildIcs(calendarEvent);
    downloadTextFile(`${calendarEvent.uid}.ics`, ics, "text/calendar;charset=utf-8");
    flash("Calendar file downloaded — open it to add the event.");
  };

  const buttonClasses =
    "inline-flex items-center gap-2 rounded-full border border-[var(--inv-line)] px-4 py-2.5 text-sm font-medium text-[var(--inv-text)] transition-colors hover:bg-[var(--inv-chip)]";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap justify-center gap-2.5">
        <button type="button" onClick={onShare} className={buttonClasses}>
          <Share2 className="h-4 w-4 text-[var(--inv-accent)]" aria-hidden="true" />
          Share invitation
        </button>
        <button type="button" onClick={onCopy} className={buttonClasses}>
          <Link2 className="h-4 w-4 text-[var(--inv-accent)]" aria-hidden="true" />
          Copy link
        </button>
        <button type="button" onClick={onCalendar} className={buttonClasses}>
          <CalendarPlus className="h-4 w-4 text-[var(--inv-accent)]" aria-hidden="true" />
          Add to calendar
        </button>
      </div>
      <p aria-live="polite" className="flex min-h-5 items-center gap-1.5 text-xs text-[var(--inv-muted)]">
        {feedback ? (
          <>
            <Check className="h-3.5 w-3.5 text-[var(--inv-accent)]" aria-hidden="true" />
            {feedback}
          </>
        ) : null}
      </p>
    </div>
  );
}
