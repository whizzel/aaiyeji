"use client";

import { buttonClasses } from "@/components/ui/button";
import type { PackageId } from "@/lib/pricing";

/**
 * Pricing CTA — scrolls to the enquiry form and preselects the package.
 * The href keeps the deep link shareable; the custom event updates the form
 * instantly when the visitor is already on the homepage.
 */
export function PackageCta({
  packageId,
  packageName,
  featured,
}: {
  packageId: PackageId;
  packageName: string;
  featured?: boolean;
}) {
  return (
    <a
      href={`/?package=${packageId}#enquire`}
      className={buttonClasses(featured ? "light" : "primary", "md", "w-full")}
      onClick={() => {
        window.dispatchEvent(new CustomEvent("aaiyeji:select-package", { detail: packageId }));
      }}
    >
      Start with {packageName}
    </a>
  );
}
