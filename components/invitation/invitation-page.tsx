"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { InvitationDemo } from "@/lib/invitation-demos";
import { getMainEvent } from "@/lib/invitation-demos";
import { cn, type CalendarEvent } from "@/lib/utils";
import { AaiyejiSymbol } from "@/components/ui/logo";
import { ArchMotif, FloralDivider } from "@/components/ui/decor";
import { Reveal } from "@/components/ui/reveal";
import { InvitationHero } from "@/components/invitation/invitation-hero";
import { EventTimeline } from "@/components/invitation/event-timeline";
import { VenueCard } from "@/components/invitation/venue-card";
import { RsvpDemo } from "@/components/invitation/rsvp-demo";
import { ShareActions } from "@/components/invitation/share-actions";

/**
 * The shared invitation template. One typed record (InvitationDemo) drives
 * the whole page; the theme class supplies each style's art direction.
 * The welcome gate is a single, keyboard-accessible tap — never a scroll hijack.
 */
export function InvitationPage({ demo }: { demo: InvitationDemo }) {
  const [opened, setOpened] = useState(false);
  const [lang, setLang] = useState<"en" | "regional">("en");
  const [guest, setGuest] = useState<string | null>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const hasRegional = Boolean(demo.greeting.regional);
  const mainEvent = getMainEvent(demo);
  const t = (en: string, regional?: string) => (lang === "regional" && regional ? regional : en);

  // Personalised family greeting via ?to=… (Royal guest-link demonstration).
  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to");
    if (to && to.trim()) setGuest(to.trim().slice(0, 60));
  }, []);

  // Lock scroll behind the welcome gate; focus the open button for keyboard users.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    if (!opened) openButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const calendarEvent: CalendarEvent = {
    uid: `aaiyeji-${demo.slug}-${mainEvent.id}`,
    title: `${demo.couple.names} — ${mainEvent.name}`,
    description: `${mainEvent.description} (Aaiyeji sample invitation — fictional details.)`,
    location: `${demo.venue.name}, ${demo.venue.address}`,
    startISO: mainEvent.dateISO,
    durationHours: 5,
  };

  const actionButtonClasses =
    demo.theme === "royal"
      ? "bg-gold text-night hover:bg-gold-soft"
      : "bg-wine text-ivory hover:bg-wine-soft";

  const symbolTone = demo.theme === "royal" ? "dark" : "light";

  return (
    <div className={cn(`theme-${demo.theme}`, "min-h-screen bg-[var(--inv-bg)] text-[var(--inv-text)]")}>
      {/* Invitation content — inert while the welcome gate is up */}
      <div inert={!opened}>
        {/* Top bar */}
        <div className="border-b border-[var(--inv-line)]">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-3.5">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-medium text-[var(--inv-muted)] transition-colors hover:text-[var(--inv-text)]"
            >
              <AaiyejiSymbol tone={symbolTone} className="h-6 w-6" />
              Aaiyeji sample invitation
            </Link>
            {hasRegional ? (
              <div
                role="group"
                aria-label="Invitation language"
                className="flex rounded-full border border-[var(--inv-line)] p-0.5"
              >
                <button
                  type="button"
                  aria-pressed={lang === "en"}
                  onClick={() => setLang("en")}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    lang === "en" ? "bg-[var(--inv-chip)] text-[var(--inv-text)]" : "text-[var(--inv-muted)]"
                  )}
                >
                  English
                </button>
                <button
                  type="button"
                  aria-pressed={lang === "regional"}
                  onClick={() => setLang("regional")}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 font-devanagari text-xs font-semibold transition-colors",
                    lang === "regional" ? "bg-[var(--inv-chip)] text-[var(--inv-text)]" : "text-[var(--inv-muted)]"
                  )}
                >
                  {demo.greeting.languageLabel}
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <main id="main">
          <InvitationHero
            demo={demo}
            lang={lang}
            guest={guest}
            mainEventISO={mainEvent.dateISO}
            calendarEvent={calendarEvent}
          />

          <div className="mx-auto max-w-3xl space-y-16 px-5 pb-16 sm:space-y-20">
            {/* Families */}
            <Reveal>
              <section aria-labelledby="families-heading" className="text-center">
                <h2 id="families-heading" className="font-display text-3xl font-semibold">
                  Our families
                </h2>
                <p className="mt-2 text-sm text-[var(--inv-muted)]">
                  The people who made this journey ours.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {demo.families.map((side) => (
                    <div
                      key={side.label}
                      className="rounded-xl border border-[var(--inv-line)] bg-[var(--inv-surface)] p-5 text-left"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--inv-accent)]">
                        {t(side.label, side.labelRegional)}
                      </p>
                      <p className="mt-2.5 font-display text-lg font-semibold leading-snug">{side.names[0]}</p>
                      {side.names[1] ? (
                        <p className="mt-1 text-xs text-[var(--inv-muted)]">{side.names[1]}</p>
                      ) : null}
                      {side.note ? (
                        <p className="mt-2.5 text-xs italic leading-relaxed text-[var(--inv-muted)]">{side.note}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Story + gallery */}
            <Reveal>
              <section aria-labelledby="story-heading">
                <h2 id="story-heading" className="text-center font-display text-3xl font-semibold">
                  {t(demo.story.title, demo.story.titleRegional)}
                </h2>
                <div className="mx-auto mt-5 max-w-xl space-y-3 text-center text-[15px] leading-relaxed text-[var(--inv-muted)]">
                  {demo.story.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {demo.gallery.map((item) => (
                    <figure key={item.src}>
                      {/* Original SVG artwork served as-is; next/image optimisation adds nothing for vectors. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={500}
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-xl border border-[var(--inv-line)] object-cover"
                      />
                      <figcaption className="mt-2 text-center text-xs text-[var(--inv-muted)]">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <EventTimeline demo={demo} lang={lang} />
            </Reveal>

            <Reveal>
              <VenueCard venue={demo.venue} />
            </Reveal>

            <Reveal>
              <RsvpDemo
                events={demo.events.map((e) => ({ id: e.id, name: t(e.name, e.nameRegional) }))}
                coupleNames={demo.couple.names}
              />
            </Reveal>

            {/* Closing */}
            <Reveal>
              <section className="text-center">
                {demo.theme === "minimal" ? (
                  <div aria-hidden="true" className="mx-auto mb-8 h-px w-24 bg-[var(--inv-accent)] opacity-50" />
                ) : (
                  <FloralDivider className="mx-auto mb-8 h-5 w-44 text-[var(--inv-accent)]" />
                )}
                <p className="font-display text-2xl font-medium italic sm:text-3xl">
                  We can’t wait to celebrate with you.
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--inv-accent)]">{demo.hashtag}</p>
                <div className="mt-7">
                  <ShareActions
                    title={`${demo.couple.names} — you’re invited`}
                    text={`${demo.welcome.line} ${demo.hashtag}`}
                    calendarEvent={calendarEvent}
                  />
                </div>
              </section>
            </Reveal>
          </div>
        </main>

        {/* Demo footer */}
        <footer className="border-t border-[var(--inv-line)]">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-10 text-center">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Aaiyeji — home">
              <AaiyejiSymbol tone={symbolTone} className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-[0.22em]">AAIYEJI</span>
            </Link>
            <p className="text-sm text-[var(--inv-muted)]">
              Crafted by Aaiyeji — a beautiful way to say, you’re invited.
            </p>
            <Link
              href="/#enquire"
              className={cn("rounded-full px-6 py-3 text-sm font-semibold transition-colors", actionButtonClasses)}
            >
              Create your own invitation
            </Link>
            <p className="max-w-md text-xs leading-relaxed text-[var(--inv-muted)]">
              Aaiyeji sample invitation — all names, venues and dates are fictional. The RSVP is a
              demonstration; no responses are sent or stored.
            </p>
          </div>
        </footer>
      </div>

      {/* Welcome gate */}
      {!opened ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Welcome — open the invitation"
          className="fixed inset-0 z-50 overflow-y-auto bg-[var(--inv-bg)]"
        >
          <div className="flex min-h-full items-center justify-center p-6">
            <div className="w-full max-w-md text-center">
              {demo.theme === "royal" ? (
                <ArchMotif className="mx-auto h-40 text-[var(--inv-accent)] opacity-80" />
              ) : demo.theme === "floral" ? (
                <FloralDivider className="mx-auto h-6 w-52 text-[var(--inv-secondary)]" />
              ) : (
                <div aria-hidden="true" className="mx-auto h-px w-24 bg-[var(--inv-accent)] opacity-60" />
              )}

              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--inv-accent)]">
                {demo.welcome.eyebrow}
              </p>
              <p className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                {demo.couple.names}
              </p>
              {demo.couple.namesRegional ? (
                <p className="mt-2 font-devanagari text-lg text-[var(--inv-muted)]">
                  {demo.couple.namesRegional}
                </p>
              ) : null}

              {guest ? (
                <p className="mx-auto mt-5 inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full border border-[var(--inv-line)] bg-[var(--inv-chip)] px-5 py-2.5 text-sm text-[var(--inv-muted)]">
                  A warm welcome for
                  <strong className="font-display text-base font-semibold italic text-[var(--inv-accent)]">
                    {guest}
                  </strong>
                </p>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-[var(--inv-muted)]">{demo.welcome.line}</p>
              )}
              {demo.welcome.lineRegional ? (
                <p className="mt-2 font-devanagari text-sm leading-relaxed text-[var(--inv-muted)]">
                  {demo.welcome.lineRegional}
                </p>
              ) : null}

              <button
                ref={openButtonRef}
                type="button"
                onClick={() => setOpened(true)}
                className={cn(
                  "mt-8 rounded-full px-9 py-3.5 text-base font-semibold transition-colors",
                  actionButtonClasses
                )}
              >
                Open the invitation
              </button>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--inv-muted)]">
                Aaiyeji sample invitation
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
