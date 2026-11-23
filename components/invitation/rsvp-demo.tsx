"use client";

import { useState } from "react";
import { ClipboardCheck, Check, AlertCircle } from "lucide-react";
import { isNonEmpty } from "@/lib/validation";
import { cn } from "@/lib/utils";

/**
 * Demo RSVP — explicitly a demonstration.
 * Nothing is sent, stored or persisted; state lives only in this component.
 */
export function RsvpDemo({
  events,
  coupleNames,
}: {
  events: Array<{ id: string; name: string }>;
  coupleNames: string;
}) {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState("2");
  const [selected, setSelected] = useState<string[]>(events.map((e) => e.id));
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleEvent = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNonEmpty(name)) {
      setError("Please add a name to preview the RSVP.");
      document.getElementById("rsvp-name")?.focus();
      return;
    }
    if (!attending) {
      setError("Please choose whether you’re attending.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setAttending("");
    setGuests("2");
    setSelected(events.map((e) => e.id));
  };

  const inputClasses =
    "w-full rounded-xl border border-[var(--inv-line)] bg-[var(--inv-surface)] px-4 py-3 text-[15px] text-[var(--inv-text)] placeholder:text-[var(--inv-muted)] focus:border-[var(--inv-accent-strong)] focus:outline-none";

  return (
    <section aria-labelledby="rsvp-heading" className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-[var(--inv-line)] bg-[var(--inv-surface)] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="rsvp-heading" className="flex items-center gap-2 font-display text-2xl font-semibold">
            <ClipboardCheck className="h-5 w-5 text-[var(--inv-accent)]" aria-hidden="true" />
            RSVP
          </h2>
          <span className="rounded-full border border-[var(--inv-line)] bg-[var(--inv-chip)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--inv-muted)]">
            Demonstration
          </span>
        </div>
        <p className="mt-2 text-sm text-[var(--inv-muted)]">
          This is a preview of the guest experience. Nothing is sent or stored.
        </p>

        {submitted ? (
          <div className="mt-6" role="status">
            <div className="rounded-xl border border-[var(--inv-line)] bg-[var(--inv-chip)] p-5">
              <p className="flex items-start gap-2 font-semibold">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--inv-accent)]" aria-hidden="true" />
                Demo RSVP — no response has been sent.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--inv-muted)]">
                You previewed: <strong className="text-[var(--inv-text)]">{name.trim()}</strong>,{" "}
                {attending === "yes" ? "joyfully attending" : "regretfully declining"}
                {attending === "yes" ? ` with ${guests} ${guests === "1" ? "guest" : "guests"}` : ""}
                {attending === "yes" && selected.length > 0
                  ? `, joining ${selected.length} of ${events.length} functions`
                  : ""}
                . In a live Aaiyeji invitation, responses reach {coupleNames}’s family directly —
                with a dashboard and export on Royal.
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-4 rounded-full border border-[var(--inv-line)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--inv-chip)]"
            >
              Try the demo again
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
            <div>
              <label htmlFor="rsvp-name" className="mb-1.5 block text-sm font-semibold">
                Your name <span className="text-[var(--inv-accent)]" aria-hidden="true">*</span>
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(null);
                }}
                placeholder="e.g. The Sharma family"
                aria-invalid={Boolean(error && !isNonEmpty(name))}
                className={inputClasses}
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Will you join us?</legend>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { value: "yes" as const, label: "Joyfully attending" },
                  { value: "no" as const, label: "Regretfully declining" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                      attending === option.value
                        ? "border-[var(--inv-accent-strong)] bg-[var(--inv-chip)]"
                        : "border-[var(--inv-line)] hover:bg-[var(--inv-chip)]"
                    )}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={option.value}
                      checked={attending === option.value}
                      onChange={() => {
                        setAttending(option.value);
                        setError(null);
                      }}
                      className="h-4 w-4 accent-[var(--inv-accent-strong)]"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {attending === "yes" ? (
              <>
                <div>
                  <label htmlFor="rsvp-guests" className="mb-1.5 block text-sm font-semibold">
                    Number of guests
                  </label>
                  <select id="rsvp-guests" value={guests} onChange={(e) => setGuests(e.target.value)} className={inputClasses}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold">Which functions will you join?</legend>
                  <div className="flex flex-wrap gap-2">
                    {events.map((event) => {
                      const checked = selected.includes(event.id);
                      return (
                        <label
                          key={event.id}
                          className={cn(
                            "flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                            checked
                              ? "border-[var(--inv-accent-strong)] bg-[var(--inv-chip)]"
                              : "border-[var(--inv-line)] hover:bg-[var(--inv-chip)]"
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleEvent(event.id)}
                            className="h-3.5 w-3.5 accent-[var(--inv-accent-strong)]"
                          />
                          {event.name}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </>
            ) : null}

            {error ? (
              <p className="flex items-start gap-1.5 text-sm font-medium text-[var(--inv-accent)]" role="alert">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-full bg-[var(--inv-accent-strong)] px-6 py-3.5 text-[15px] font-semibold text-[var(--inv-bg)] transition-opacity hover:opacity-90"
            >
              Preview my RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
