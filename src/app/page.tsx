import Link from "next/link";

const sectors = [
  {
    key: "private",
    title: "MedJourney Private",
    subtitle: "Médico particular",
    description: "Consultório, agenda, pacientes e acompanhamento clínico.",
  },
  {
    key: "clinic",
    title: "MedJourney Clinic",
    subtitle: "Clínicas",
    description: "Equipe multiprofissional, agendas e operação integrada.",
  },
  {
    key: "hospital",
    title: "MedJourney Hospital",
    subtitle: "Hospitais",
    description: "Fluxo assistencial, unidades e equipes hospitalares.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-12 sm:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[980px] flex-col justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#0f6fd6] text-[15px] font-bold tracking-[-0.02em] text-white shadow-[0_9px_22px_rgba(15,111,214,0.18)]">
            MJ
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#087bd1]">
            MedJourney
          </p>
          <h1 className="mt-4 text-[32px] font-medium tracking-[-0.035em] text-[#172033] sm:text-[38px]">
            Escolha seu ambiente de acesso
          </h1>
          <p className="mx-auto mt-3 max-w-[560px] text-[13px] leading-6 text-[#64748b]">
            Selecione o setor em que você trabalha. Na próxima tela, informe suas
            credenciais para entrar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.key}
              href={`/login?sector=${sector.key}`}
              className="group rounded-[14px] border border-[#e4e9f0] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:border-[#b9dcf8] hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#eaf4ff] text-[12px] font-bold text-[#087bd1]">
                {sector.key === "private" ? "P" : sector.key === "clinic" ? "C" : "H"}
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#087bd1]">
                {sector.subtitle}
              </p>
              <h2 className="mt-2 text-[20px] font-semibold tracking-[-0.025em] text-[#172033]">
                {sector.title}
              </h2>
              <p className="mt-3 min-h-[48px] text-[12px] leading-5 text-[#64748b]">
                {sector.description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-[#eef2f6] pt-4 text-[12px] font-semibold text-[#0f6fd6]">
                <span>Acessar</span>
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] text-[#94a3b8]">
          MedJourney · Acesso profissional
        </p>
      </div>
    </main>
  );
}
