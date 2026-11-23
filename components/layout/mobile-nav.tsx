"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navLinks, hasWhatsApp, whatsappLink } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const wa = whatsappLink("Namaste Aaiyeji! I’d like to know more about your digital invitations.");

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-deep/40 backdrop-blur-[2px]"
        onClick={onClose}
        tabIndex={-1}
      />
      <div
        ref={panelRef}
        className="absolute inset-x-3 top-3 rounded-2xl border border-line bg-ivory p-5 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <Logo symbolClassName="h-8 w-8" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-line p-2.5 text-deep transition-colors hover:bg-blush"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-5">
          <ul className="divide-y divide-line/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 font-display text-xl font-semibold text-deep transition-colors hover:text-wine"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-5 flex flex-col gap-3">
          <ButtonLink href="/#enquire" onClick={onClose} className="w-full">
            Create your invite
          </ButtonLink>
          {hasWhatsApp && wa ? (
            <ButtonLink href={wa} variant="outline" onClick={onClose} className="w-full">
              Chat on WhatsApp
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
