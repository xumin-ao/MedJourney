import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { createClient } from "@/lib/supabase/server";

const environments = [
  {
    href: "/private",
    label: "Private",
    title: "MedJourney Private",
    description: "Ambiente do médico particular e consultório individual.",
  },
  {
    href: "/clinic",
    label: "Clinic",
    title: "MedJourney Clinic",
    description: "Ambiente de clínicas e equipes multiprofissionais.",
  },
  {
    href: "/hospital",
    label: "Hospital",
    title: "MedJourney Hospital",
    description: "Ambiente hospitalar e fluxos assistenciais.",
  },
];

export default async function WorkspacePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const email =
    typeof data.claims.email === "string" ? data.claims.email : "Usuário autenticado";

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-[var(--border)] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Sessão autenticada
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Bem-vindo ao MedJourney.
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">{email}</p>
          </div>
          <LogoutButton />
        </header>

        <section className="py-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ambiente de desenvolvimento
            </h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Nesta fase, todos os ambientes abaixo continuam disponíveis para
              validação. Quando criarmos organizações, vínculos e permissões, o
              MedJourney direcionará cada usuário somente aos contextos
              autorizados.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {environments.map((environment) => (
              <Link
                key={environment.href}
                href={environment.href}
                className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {environment.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{environment.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {environment.description}
                </p>
                <p className="mt-6 text-sm font-semibold">Abrir ambiente →</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
