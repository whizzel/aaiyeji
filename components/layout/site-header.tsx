"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navLinks, hasWhatsApp, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = whatsappLink("Namaste Aaiyeji! I’d like to know more about your digital invitations.");

  return (
    <>
      {/* Announcement strip — a restrained brand statement, no fake urgency */}
      <div className="bg-deep px-4 py-2 text-center">
        <p className="text-[11px] font-medium tracking-[0.14em] text-ivory/85 sm:text-xs">
          Thoughtfully crafted digital invitations for life’s most meaningful celebrations.
        </p>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-ivory/92 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-line shadow-[0_8px_24px_rgba(53,24,36,0.06)]" : "border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="Aaiyeji — home" className="shrink-0">
            <Logo symbolClassName="h-8 w-8 sm:h-9 sm:w-9" />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ink/75 transition-colors hover:text-wine"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            {hasWhatsApp && wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="hidden rounded-full border border-sage/50 p-2.5 text-sage transition-colors hover:bg-sage/10 lg:inline-flex"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            ) : null}
            <span className="hidden sm:inline-flex">
              <ButtonLink href="/#enquire" size="sm">
                Create your invite
              </ButtonLink>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="rounded-full border border-line p-2.5 text-deep transition-colors hover:bg-blush md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <div id="mobile-menu">
        <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
