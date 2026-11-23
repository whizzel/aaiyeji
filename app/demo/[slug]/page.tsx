import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { invitationDemos, getInvitationDemo } from "@/lib/invitation-demos";
import { InvitationPage } from "@/components/invitation/invitation-page";

export function generateStaticParams() {
  return invitationDemos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = getInvitationDemo(slug);
  if (!demo) return {};
  return {
    title: demo.seo.title,
    description: demo.seo.description,
    alternates: { canonical: `/demo/${demo.slug}` },
    // Sample content with fictional people — keep it out of search results,
    // while remaining fully shareable via WhatsApp and direct links.
    robots: { index: false, follow: true },
    openGraph: {
      title: `${demo.seo.title} · Aaiyeji sample invitation`,
      description: demo.seo.description,
      url: `/demo/${demo.slug}`,
    },
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getInvitationDemo(slug);
  if (!demo) notFound();
  return <InvitationPage demo={demo} />;
}
