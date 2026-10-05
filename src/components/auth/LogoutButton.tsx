"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    setIsSigningOut(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className="rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSigningOut ? "Saindo..." : "Sair"}
    </button>
  );
}
