import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/LoginForm";
import { createClient } from "@/lib/supabase/server";

const sectorConfig = {
  private: {
    name: "MedJourney Private",
    label: "Médico particular",
    destination: "/private",
    headline: "Sua rotina clínica, organizada.",
    description:
      "Pacientes, agenda e acompanhamento longitudinal em uma experiência simples e direta.",
  },
  clinic: {
    name: "MedJourney Clinic",
    label: "Clínicas",
    destination: "/clinic",
    headline: "Sua clínica, conectada.",
    description:
      "Equipe, agendas e operação multiprofissional reunidas em um único ambiente.",
  },
  hospital: {
    name: "MedJourney Hospital",
    label: "Hospitais",
    destination: "/hospital",
    headline: "O cuidado acompanha o paciente.",
    description:
      "Fluxos, unidades e equipes assistenciais com uma visão organizada da jornada hospitalar.",
  },
} as const;

type SectorKey = keyof typeof sectorConfig;

type LoginPageProps = {
  searchParams: Promise<{
    sector?: string | string[];
  }>;
};

function isSectorKey(value: string | undefined): value is SectorKey {
  return value === "private" || value === "clinic" || value === "hospital";
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const rawSector = Array.isArray(params.sector) ? params.sector[0] : params.sector;

  if (!isSectorKey(rawSector)) {
    redirect("/");
  }

  const sector = sectorConfig[rawSector];
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect(sector.destination);
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-[58%_42%]">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#06152d] text-white lg:flex">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div className="absolute -left-24 -top-28 h-64 w-64 rounded-full bg-[#0b2a5c] opacity-70 blur-sm" />
        <div className="absolute -bottom-40 right-[-5%] h-[520px] w-[520px] rounded-full bg-[#0a4aa0] opacity-60 blur-[2px]" />
        <div className="absolute bottom-[-190px] right-[12%] h-[420px] w-[420px] rounded-full bg-[#1262bd] opacity-25 blur-3xl" />

        <div className="relative z-10 flex w-full items-center justify-center px-14 py-12 xl:px-20">
          <div className="w-full max-w-[560px]">
            <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-7 py-5 shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#0f6fd6] text-[13px] font-bold text-white">
                MJ
              </div>
              <div>
                <p className="text-[20px] font-semibold tracking-[-0.03em] text-[#172033]">
                  MedJourney
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#087bd1]">
                  {sector.label}
                </p>
              </div>
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#75b8ff]">
              {sector.name}
            </p>
            <h1 className="mt-6 max-w-[520px] text-5xl font-medium leading-[1.04] tracking-[-0.045em] text-white xl:text-[58px]">
              {sector.headline}
            </h1>
            <p className="mt-6 max-w-[470px] text-[17px] leading-7 text-[#d8e6fb]">
              {sector.description}
            </p>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
        <div className="w-full max-w-[430px]">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold text-[#64748b] transition hover:text-[#087bd1]"
          >
            <span aria-hidden="true">←</span>
            Trocar ambiente
          </Link>

          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087bd1]">
              {sector.name} · Acesso
            </p>
            <h2 className="mt-5 text-[30px] font-medium tracking-[-0.035em] text-[#172033]">
              Bem-vindo de volta
            </h2>
            <p className="mt-2 text-[13px] text-[#64748b]">
              Informe seu usuário e senha para entrar.
            </p>
          </div>

          <LoginForm destination={sector.destination} productName={sector.name} />

          <p className="mt-5 text-center text-[10px] text-[#94a3b8]">
            MedJourney · Acesso profissional
          </p>
        </div>
      </section>
    </main>
  );
}
