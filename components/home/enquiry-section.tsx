"use client";

import { useEffect, useState } from "react";
import { Send, MessageCircle, Mail, Copy, Check, AlertCircle } from "lucide-react";
import { siteConfig, hasWhatsApp, hasEmail, whatsappLink, mailtoLink } from "@/lib/site-config";
import { packages, getPackage } from "@/lib/pricing";
import { occasionOptions } from "@/lib/occasions";
import {
  validateEnquiry,
  buildEnquiryMessage,
  type EnquiryValues,
  type EnquiryErrors,
} from "@/lib/validation";
import { copyText } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button, ButtonLink } from "@/components/ui/button";
import { FloralDivider } from "@/components/ui/decor";

const initialValues: EnquiryValues = {
  name: "",
  whatsapp: "",
  occasion: "",
  eventDate: "",
  pkg: "",
  notes: "",
};

type Status = "idle" | "whatsapp" | "email" | "unconfigured";

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-deep">
        {label}
        {required ? (
          <span className="ml-1 text-wine" aria-hidden="true">
            *
          </span>
        ) : null}
        {optional ? <span className="ml-1.5 text-xs font-normal text-ink/45">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1.5 flex items-start gap-1.5 text-xs font-medium text-wine">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-line bg-ivory/60 px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:border-wine focus:bg-paper focus:outline-none";

export function EnquirySection() {
  const [values, setValues] = useState<EnquiryValues>(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [waFallback, setWaFallback] = useState<string | null>(null);

  // Preselect a package from ?package=… or from a pricing-card click.
  useEffect(() => {
    const apply = (id: string) => {
      if (getPackage(id)) setValues((v) => ({ ...v, pkg: id }));
    };
    const fromUrl = new URLSearchParams(window.location.search).get("package");
    if (fromUrl) apply(fromUrl);
    const onSelect = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener("aaiyeji:select-package", onSelect);
    return () => window.removeEventListener("aaiyeji:select-package", onSelect);
  }, []);

  const set = (key: keyof EnquiryValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const packageLabel = (() => {
    const pkg = getPackage(values.pkg);
    return pkg ? `${pkg.name} (${pkg.priceLabel})` : "Help me choose";
  })();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateEnquiry(values);
    setErrors(errs);
    const firstError = Object.keys(errs)[0];
    if (firstError) {
      document.getElementById(`enquiry-${firstError}`)?.focus();
      return;
    }
    const msg = buildEnquiryMessage(values, packageLabel);
    setMessage(msg);
    setCopied(false);

    if (hasWhatsApp) {
      const url = whatsappLink(msg);
      if (url) {
        const win = window.open(url, "_blank", "noopener");
        setWaFallback(win ? null : url);
        setStatus("whatsapp");
        return;
      }
    }
    if (hasEmail) {
      const url = mailtoLink(`Invitation enquiry — ${values.name.trim()}`, msg);
      if (url) {
        window.location.href = url;
        setStatus("email");
        return;
      }
    }
    setStatus("unconfigured");
  };

  const onCopy = async () => {
    const ok = await copyText(message);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  const wa = whatsappLink("Namaste Aaiyeji! I’d like to create a digital invitation.");

  return (
    <section id="enquire" className="bg-blush/45 bg-grain py-16 sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-sage">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            Begin your invitation
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] text-deep sm:text-4xl md:text-[2.75rem]">
            Let’s make your invitation feel like <em className="italic text-wine">yours.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/75">
            Tell us a little about your celebration. We’ll come back with ideas, a clear timeline
            and a quote — before you commit to anything.
          </p>

          <ol className="mt-8 space-y-4">
            {[
              "We read your brief and understand the celebration.",
              "We suggest a style and the right package for it.",
              "We confirm the quote and timeline before booking.",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-ink/75">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold bg-paper font-display text-sm font-semibold text-wine">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            {hasWhatsApp && wa ? (
              <ButtonLink href={wa} variant="outline">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            ) : null}
            {hasEmail ? (
              <ButtonLink href={`mailto:${siteConfig.contactEmail}`} variant="ghost">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contactEmail}
              </ButtonLink>
            ) : null}
          </div>
          <FloralDivider className="mt-10 h-4 w-36 text-gold" />
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          aria-label="Invitation enquiry"
          className="rounded-2xl border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(53,24,36,0.05),0_16px_44px_rgba(53,24,36,0.08)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" htmlFor="enquiry-name" required error={errors.name}>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Pranav Kulkarni"
                value={values.name}
                onChange={set("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                className={inputClasses}
              />
            </Field>
            <Field label="WhatsApp number" htmlFor="enquiry-whatsapp" required error={errors.whatsapp}>
              <input
                id="enquiry-whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="e.g. 98XXXXXXXX"
                value={values.whatsapp}
                onChange={set("whatsapp")}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? "enquiry-whatsapp-error" : undefined}
                className={inputClasses}
              />
            </Field>
            <Field label="Occasion" htmlFor="enquiry-occasion" required error={errors.occasion}>
              <select
                id="enquiry-occasion"
                name="occasion"
                value={values.occasion}
                onChange={set("occasion")}
                aria-invalid={Boolean(errors.occasion)}
                aria-describedby={errors.occasion ? "enquiry-occasion-error" : undefined}
                className={inputClasses}
              >
                <option value="">Choose the occasion…</option>
                {occasionOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </Field>
            <Field label="Event date" htmlFor="enquiry-eventDate" optional error={errors.eventDate}>
              <input
                id="enquiry-eventDate"
                name="eventDate"
                type="date"
                value={values.eventDate}
                onChange={set("eventDate")}
                aria-invalid={Boolean(errors.eventDate)}
                aria-describedby={errors.eventDate ? "enquiry-eventDate-error" : undefined}
                className={inputClasses}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Preferred package" htmlFor="enquiry-pkg">
                <select id="enquiry-pkg" name="pkg" value={values.pkg} onChange={set("pkg")} className={inputClasses}>
                  <option value="">Help me choose</option>
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.priceLabel}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Preferred style or notes" htmlFor="enquiry-notes" optional>
                <textarea
                  id="enquiry-notes"
                  name="notes"
                  rows={3}
                  placeholder="A theme you love, a reference, the languages you’d like, anything at all…"
                  value={values.notes}
                  onChange={set("notes")}
                  className={inputClasses}
                />
              </Field>
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full">
            <Send className="h-4 w-4" aria-hidden="true" />
            Send my enquiry
          </Button>

          <p className="mt-3 text-center text-xs leading-relaxed text-ink/50">
            This form opens WhatsApp or email with your message prefilled — you press send there.
            Nothing is stored on this website.
          </p>

          <div aria-live="polite">
            {status === "whatsapp" ? (
              <div role="status" className="mt-5 rounded-xl border border-sage/50 bg-sage/10 p-4 text-sm text-deep">
                <p className="flex items-start gap-2 font-semibold">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  WhatsApp opened with your enquiry prefilled.
                </p>
                <p className="mt-1 pl-6 text-ink/70">Press send in WhatsApp to reach us.</p>
                {waFallback ? (
                  <p className="mt-2 pl-6">
                    <a href={waFallback} target="_blank" rel="noopener noreferrer" className="font-medium text-wine underline-offset-4 hover:underline">
                      Open WhatsApp manually →
                    </a>
                  </p>
                ) : null}
              </div>
            ) : null}

            {status === "email" ? (
              <div role="status" className="mt-5 rounded-xl border border-sage/50 bg-sage/10 p-4 text-sm text-deep">
                <p className="flex items-start gap-2 font-semibold">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  Your email app should open with the enquiry draft.
                </p>
                <p className="mt-1 pl-6 text-ink/70">Press send there to reach us.</p>
              </div>
            ) : null}

            {status === "unconfigured" ? (
              <div role="status" className="mt-5 rounded-xl border border-gold/60 bg-gold/10 p-4 text-sm text-deep">
                <p className="flex items-start gap-2 font-semibold">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  Enquiry sending isn’t configured on this site yet.
                </p>
                <p className="mt-1 pl-6 text-ink/70">
                  Your enquiry hasn’t been sent. Copy it below and share it with the Aaiyeji team
                  through their official channel.
                </p>
                <pre className="mt-3 max-h-44 overflow-auto whitespace-pre-wrap rounded-lg border border-line bg-ivory p-3 font-body text-xs leading-relaxed text-ink/80">
                  {message}
                </pre>
                <Button type="button" variant="outline" size="sm" className="mt-3" onClick={onCopy}>
                  {copied ? <Check className="h-4 w-4 text-sage" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  {copied ? "Copied to clipboard" : "Copy my enquiry"}
                </Button>
              </div>
            ) : null}
          </div>
        </form>
      </Container>
    </section>
  );
}
