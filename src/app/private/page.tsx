import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

const patients = [
  ["Maria Silva", "Retorno em 3 dias", "Acompanhamento"],
  ["Carlos Souza", "Exame recebido", "Revisar resultado"],
  ["Ana Costa", "Hoje, 16:30", "Consulta"],
  ["Pedro Alves", "Há 42 dias", "Retorno atrasado"],
];

export default function PrivateDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold text-[var(--accent)]">Visão do médico</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Sua prática clínica, organizada pela jornada do paciente.
        </h1>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Protótipo da experiência para médico particular. Os dados abaixo são
          exclusivamente demonstrativos.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Consultas hoje" value="7" detail="Próxima às 14:20" />
        <MetricCard label="Resultados para revisar" value="3" detail="Novos desde ontem" tone="attention" />
        <MetricCard label="Retornos atrasados" value="4" detail="Pacientes fora da janela planejada" tone="critical" />
        <MetricCard label="Pacientes ativos" value="286" detail="Carteira clínica acompanhada" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Panel
          title="Radar de pacientes"
          description="Prioriza o que precisa da atenção do médico sem substituir julgamento clínico."
        >
          <div id="patients" className="divide-y divide-[var(--border)]">
            {patients.map(([name, timing, status]) => (
              <div key={name} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{timing}</p>
                </div>
                <span className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Resumo do dia" description="Uma leitura rápida antes de iniciar os atendimentos.">
          <div id="agenda" className="space-y-4">
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <p className="text-sm font-semibold">14:20 · Retorno</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Revisar exames e evolução do tratamento.</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <p className="text-sm font-semibold">16:30 · Primeira consulta</p>
              <p className="mt-1 text-sm text-[var(--muted)]">Cadastro e histórico ainda incompletos.</p>
            </div>
          </div>
        </Panel>
      </div>

      <div id="journey" className="mt-6">
        <Panel title="Jornada clínica" description="Exemplo de timeline longitudinal de um paciente.">
          <div className="grid gap-4 md:grid-cols-4">
            {["Consulta", "Exames", "Resultado recebido", "Retorno programado"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-[var(--border)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">Etapa {index + 1}</p>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
