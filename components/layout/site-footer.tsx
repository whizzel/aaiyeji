import Link from "next/link";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { siteConfig, navLinks, hasWhatsApp, hasEmail, whatsappLink } from "@/lib/site-config";
import { occasions } from "@/lib/occasions";
import { invitationDemos } from "@/lib/invitation-demos";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { FloralDivider } from "@/components/ui/decor";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = whatsappLink("Namaste Aaiyeji! I’d like to know more about your digital invitations.");

  return (
    <footer className="on-dark bg-deep text-ivory">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              A digital invitation studio. Personalised invitation websites for weddings and
              life’s special celebrations — one beautiful link, made for sharing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {hasWhatsApp && wa ? (
                <ButtonLink href={wa} variant="light" size="sm">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </ButtonLink>
              ) : null}
              {hasEmail ? (
                <ButtonLink href={`mailto:${siteConfig.contactEmail}`} variant="outline" size="sm" className="border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email us
                </ButtonLink>
              ) : null}
              {!hasWhatsApp && !hasEmail ? (
                <ButtonLink href="/#enquire" variant="light" size="sm">
                  Create your invite
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <nav aria-label="Footer — explore">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#enquire" className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                  Create your invite
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer — occasions">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">Occasions</h2>
            <ul className="mt-4 space-y-2.5">
              {occasions.slice(0, 6).map((o) => (
                <li key={o.id}>
                  <Link href="/#occasions" className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — live demos">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-soft">Live demos</h2>
            <ul className="mt-4 space-y-2.5">
              {invitationDemos.map((demo) => (
                <li key={demo.slug}>
                  <Link href={`/demo/${demo.slug}`} className="text-sm text-ivory/75 transition-colors hover:text-ivory">
                    {demo.styleName}
                  </Link>
                </li>
              ))}
            </ul>
            {siteConfig.instagramUrl ? (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-ivory/75 transition-colors hover:text-ivory"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            ) : null}
          </nav>
        </div>

        <FloralDivider className="mx-auto mt-12 h-5 w-48 text-gold/60" />

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs text-ivory/55 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} Aaiyeji. Crafted with care, detail by detail.</p>
          <p>Sample invitations use fictional names, venues and dates.</p>
        </div>
      </Container>
    </footer>
  );
}
