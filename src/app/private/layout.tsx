import type { ReactNode } from "react";
import { ProductShell } from "@/components/layout/ProductShell";
import { privateNavigation } from "@/lib/product-navigation";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <ProductShell
      product="MedJourney Private"
      eyebrow="Consultório individual"
      navigation={privateNavigation}
    >
      {children}
    </ProductShell>
  );
}
