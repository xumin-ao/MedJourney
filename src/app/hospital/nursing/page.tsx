import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

export default function NursingView() {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold text-[var(--accent)]">Perfil profissional</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Visão de enfermagem</h1>
      <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
        Painel centrado em coordenação do cuidado, pendências assistenciais e acompanhamento da unidade.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <MetricCard label="Pacientes da unidade" value="22" detail="Turno demonstrativo" />
        <MetricCard label="Cuidados pendentes" value="4" detail="Demandam acompanhamento" tone="attention" />
        <MetricCard label="Alertas operacionais" value="2" detail="Requerem avaliação da equipe" tone="critical" />
      </div>
      <div className="mt-6">
        <Panel title="Mapa assistencial">
          <div className="grid gap-3 md:grid-cols-2">
            {["Leito 401 · cuidados em dia", "Leito 402 · revisão pendente", "Leito 403 · parâmetros registrados", "Leito 404 · cuidado programado"].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--border)] p-4 text-sm font-medium">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
