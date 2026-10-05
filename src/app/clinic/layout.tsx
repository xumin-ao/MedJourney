import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ProductShell } from "@/components/layout/ProductShell";
import { clinicNavigation } from "@/lib/product-navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ClinicLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/login?sector=clinic");
  }

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
