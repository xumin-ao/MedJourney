import type { ReactNode } from "react";
import { ProductShell } from "@/components/layout/ProductShell";
import { hospitalNavigation } from "@/lib/product-navigation";

export default function HospitalLayout({ children }: { children: ReactNode }) {
  return (
    <ProductShell
      product="MedJourney Hospital"
      eyebrow="Operação assistencial"
      navigation={hospitalNavigation}
    >
      {children}
    </ProductShell>
  );
}
