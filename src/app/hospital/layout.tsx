import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ProductShell } from "@/components/layout/ProductShell";
import { hospitalNavigation } from "@/lib/product-navigation";
import { createClient } from "@/lib/supabase/server";

export default async function HospitalLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/login?sector=hospital");
  }

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
