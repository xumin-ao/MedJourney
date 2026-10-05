import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ProductShell } from "@/components/layout/ProductShell";
import { privateNavigation } from "@/lib/product-navigation";
import { createClient } from "@/lib/supabase/server";

export default async function PrivateLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/login?sector=private");
  }

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
