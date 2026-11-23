import { MapPin, ArrowUpRight } from "lucide-react";
import type { InvitationDemo } from "@/lib/invitation-demos";
import { mapsLink } from "@/lib/utils";

export function VenueCard({ venue }: { venue: InvitationDemo["venue"] }) {
  return (
    <section aria-labelledby="venue-heading" className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-[var(--inv-line)] bg-[var(--inv-surface)] p-6 text-center sm:p-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--inv-line)] bg-[var(--inv-chip)]">
          <MapPin className="h-5 w-5 text-[var(--inv-accent)]" aria-hidden="true" />
        </span>
        <h2 id="venue-heading" className="mt-4 font-display text-2xl font-semibold">
          {venue.name}
        </h2>
        <p className="mt-1.5 text-sm text-[var(--inv-muted)]">{venue.address}</p>
        <a
          href={mapsLink(venue.mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--inv-accent-strong)] px-6 py-3 text-sm font-semibold text-[var(--inv-bg)] transition-opacity hover:opacity-90"
        >
          Open in Maps
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <p className="mt-4 text-xs text-[var(--inv-muted)]">
          Illustrative venue for this sample — your invitation links to your real location.
        </p>
      </div>
    </section>
  );
}
