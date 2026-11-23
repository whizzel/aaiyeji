import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { FloralDivider } from "@/components/ui/decor";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <Logo />
      <FloralDivider className="mt-8 h-5 w-44 text-gold" />
      <h1 className="mt-6 font-display text-4xl font-semibold text-deep sm:text-5xl">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
        The link may be old or mistyped. Let’s get you back to the celebration.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to Aaiyeji</ButtonLink>
        <ButtonLink href="/#work" variant="outline">
          Explore invitation styles
        </ButtonLink>
      </div>
    </Container>
  );
}
