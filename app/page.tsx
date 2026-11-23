import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/home/hero";
import { InvitationShowcase } from "@/components/home/invitation-showcase";
import { Occasions } from "@/components/home/occasions";
import { Features } from "@/components/home/features";
import { GuestPersonalisation } from "@/components/home/guest-personalisation";
import { Process } from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { Trust } from "@/components/home/trust";
import { Faqs } from "@/components/home/faqs";
import { EnquirySection } from "@/components/home/enquiry-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <InvitationShowcase />
        <Occasions />
        <Features />
        <GuestPersonalisation />
        <Process />
        <Pricing />
        <Trust />
        <Faqs />
        <EnquirySection />
      </main>
      <SiteFooter />
    </>
  );
}
