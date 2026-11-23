"use client";

import { useState } from "react";
import { Music, Pause } from "lucide-react";

/**
 * Music control — visual demonstration only.
 * No audio file is bundled with the demos (nothing licensed is available yet),
 * so this control explains the real feature instead of faking playback.
 * In a live invitation, music starts ONLY after the guest taps play — never autoplay.
 */
export function MusicControl() {
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={() => setShowNote((v) => !v)}
        aria-expanded={showNote}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--inv-line)] px-4 py-2.5 text-sm font-medium text-[var(--inv-text)] transition-colors hover:bg-[var(--inv-chip)]"
      >
        {showNote ? (
          <Pause className="h-4 w-4 text-[var(--inv-accent)]" aria-hidden="true" />
        ) : (
          <Music className="h-4 w-4 text-[var(--inv-accent)]" aria-hidden="true" />
        )}
        Music
        <span className="rounded-full bg-[var(--inv-chip)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--inv-muted)]">
          Demo
        </span>
      </button>
      {showNote ? (
        <p className="max-w-xs text-center text-xs leading-relaxed text-[var(--inv-muted)]">
          In your live invitation, a song you love plays only when a guest taps play — never
          automatically. This sample doesn’t bundle audio.
        </p>
      ) : null}
    </div>
  );
}
