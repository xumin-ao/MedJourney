import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/LoginForm";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/workspace");
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative flex items-center justify-center px-6 py-12 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--foreground)] text-sm font-bold tracking-tight text-white shadow-sm">
                MJ
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">MedJourney</p>
                <p className="text-xs font-medium text-[var(--muted)]">
                  Plataforma de cuidado conectado
                </p>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Acesso seguro
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Bem-vindo de volta.
              </h1>
              <p className="mt-4 max-w-md leading-7 text-[var(--muted)]">
                Acesse seu ambiente MedJourney usando as credenciais fornecidas
                pela sua organização.
              </p>
            </div>

            <LoginForm />

            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="text-xs leading-5 text-[var(--muted)]">
                O MedJourney não oferece cadastro público. Contas profissionais
                são provisionadas de forma controlada para preservar segurança,
                rastreabilidade e acesso adequado às informações.
              </p>
            </div>
          </div>
        </section>

        <section className="relative hidden overflow-hidden bg-[var(--foreground)] text-white lg:flex">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute bottom-[-140px] left-[-80px] h-96 w-96 rounded-full bg-white/[0.03]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-14 xl:p-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                Private · Clinic · Hospital
              </p>
              <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight xl:text-6xl">
                Um ecossistema pensado para cada contexto de cuidado.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                A mesma base tecnológica pode sustentar experiências próprias
                para médicos, clínicas e equipes hospitalares sem transformar
                todos os profissionais no mesmo tipo de usuário.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Private", "Continuidade e carteira clínica"],
                ["Clinic", "Coordenação multiprofissional"],
                ["Hospital", "Fluxo e responsabilidade assistencial"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
