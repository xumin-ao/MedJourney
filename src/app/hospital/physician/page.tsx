import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

export default function PhysicianView() {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold text-[var(--accent)]">Perfil profissional</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Visão médica</h1>
      <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
        Informação orientada a decisão clínica, pacientes sob responsabilidade e itens que exigem revisão.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <MetricCard label="Meus pacientes" value="14" detail="5 unidades assistenciais" />
        <MetricCard label="Resultados novos" value="3" detail="Aguardando revisão" tone="attention" />
        <MetricCard label="Possíveis altas" value="4" detail="Com critérios operacionais pendentes" />
      </div>
      <div className="mt-6">
        <Panel title="Prioridades do turno">
          <div className="space-y-3 text-sm">
            {["Reavaliar paciente após resultado disponível", "Revisar solicitação de interconsulta", "Avaliar critérios para alta"].map((item) => (
              <div key={item} className="rounded-2xl bg-[var(--surface)] p-4 font-medium">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
