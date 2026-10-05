import type { ReactNode } from "react";
import { ProductShell } from "@/components/layout/ProductShell";
import { clinicNavigation } from "@/lib/product-navigation";

export default function ClinicLayout({ children }: { children: ReactNode }) {
  return (
    <ProductShell
      product="MedJourney Clinic"
      eyebrow="Operação multiprofissional"
      navigation={clinicNavigation}
    >
      {children}
    </ProductShell>
  );
}
