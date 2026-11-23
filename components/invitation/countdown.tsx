"use client";

import { useEffect, useState } from "react";

/**
 * Live countdown to the demo's main event.
 * Renders a neutral placeholder until mounted (no hydration mismatch),
 * and a graceful message once the date has passed.
 */
export function Countdown({ targetISO }: { targetISO: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const target = new Date(targetISO).getTime();
  const diff = now === null ? null : target - now;

  if (diff !== null && diff <= 0) {
    return (
      <div className="mx-auto max-w-sm rounded-xl border border-[var(--inv-line)] bg-[var(--inv-chip)] px-5 py-4 text-center">
        <p className="font-display text-xl font-semibold text-[var(--inv-accent)]">
          The celebration has arrived.
        </p>
        <p className="mt-1 text-xs text-[var(--inv-muted)]">
          This sample date has passed — your live invitation counts down to your real day.
        </p>
      </div>
    );
  }

  const units: Array<{ label: string; value: number }> =
    diff === null
      ? [
          { label: "Days", value: 0 },
          { label: "Hours", value: 0 },
          { label: "Minutes", value: 0 },
          { label: "Seconds", value: 0 },
        ]
      : [
          { label: "Days", value: Math.floor(diff / 86400000) },
          { label: "Hours", value: Math.floor(diff / 3600000) % 24 },
          { label: "Minutes", value: Math.floor(diff / 60000) % 60 },
          { label: "Seconds", value: Math.floor(diff / 1000) % 60 },
        ];

  return (
    <div className="mx-auto grid max-w-sm grid-cols-4 gap-2" role="timer" aria-label="Countdown to the celebration">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-lg border border-[var(--inv-line)] bg-[var(--inv-chip)] px-1 py-3 text-center"
        >
          <p className="font-display text-2xl font-semibold tabular-nums text-[var(--inv-accent)] sm:text-3xl">
            {diff === null ? "–" : unit.value}
          </p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--inv-muted)]">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
