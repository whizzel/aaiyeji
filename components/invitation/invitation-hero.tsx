import type { InvitationDemo } from "@/lib/invitation-demos";
import { formatLongDate, type CalendarEvent } from "@/lib/utils";
import { ArchMotif, FloralDivider } from "@/components/ui/decor";
import { Countdown } from "@/components/invitation/countdown";
import { ShareActions } from "@/components/invitation/share-actions";
import { MusicControl } from "@/components/invitation/music-control";

export function InvitationHero({
  demo,
  lang,
  guest,
  mainEventISO,
  calendarEvent,
}: {
  demo: InvitationDemo;
  lang: "en" | "regional";
  guest: string | null;
  mainEventISO: string;
  calendarEvent: CalendarEvent;
}) {
  const t = (en: string, regional?: string) => (lang === "regional" && regional ? regional : en);

  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-10 text-center sm:pt-14">
      {demo.theme === "royal" ? (
        <ArchMotif className="pointer-events-none absolute left-1/2 top-2 h-[30rem] -translate-x-1/2 text-[var(--inv-accent)] opacity-[0.13]" />
      ) : null}

      <div className="relative mx-auto max-w-xl">
        {guest ? (
          <p className="mb-6 inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full border border-[var(--inv-line)] bg-[var(--inv-chip)] px-5 py-2.5 text-sm text-[var(--inv-muted)]">
            A warm welcome for
            <strong className="font-display text-base font-semibold italic text-[var(--inv-accent)]">
              {guest}
            </strong>
          </p>
        ) : null}

        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--inv-accent)]">
          {demo.welcome.eyebrow}
        </p>
        <p className="mt-4 font-display text-lg italic text-[var(--inv-muted)]">
          {t(demo.greeting.en, demo.greeting.regional)}
        </p>
        <h1 className="mt-2 font-display text-[2.9rem] font-semibold leading-[1.05] sm:text-6xl">
          {t(demo.couple.names, demo.couple.namesRegional)}
        </h1>
        {demo.couple.namesRegional ? (
          <p className="mt-2 font-devanagari text-base text-[var(--inv-muted)]">
            {lang === "regional" ? demo.couple.names : demo.couple.namesRegional}
          </p>
        ) : null}

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--inv-accent)]">
          {formatLongDate(mainEventISO)} · {demo.venue.name}
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--inv-muted)]">
          {t(demo.message.en, demo.message.regional)}
        </p>
        <p className="mt-4 text-sm font-semibold text-[var(--inv-accent)]">{demo.hashtag}</p>

        <div className="mt-9">
          <Countdown targetISO={mainEventISO} />
        </div>

        <div className="mt-9 flex flex-col items-center gap-4">
          <ShareActions
            title={`${demo.couple.names} — you’re invited`}
            text={`${demo.welcome.line} ${demo.hashtag}`}
            calendarEvent={calendarEvent}
          />
          <MusicControl />
        </div>
      </div>

      {demo.theme === "floral" ? (
        <FloralDivider className="mx-auto mt-12 h-5 w-44 text-[var(--inv-secondary)]" />
      ) : null}
      {demo.theme === "minimal" ? (
        <div aria-hidden="true" className="mx-auto mt-12 h-px w-24 bg-[var(--inv-accent)] opacity-50" />
      ) : null}
    </section>
  );
}
