import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

export default function TechnicianView() {
  return (
    <div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold text-[var(--accent)]">Perfil profissional</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Visão do técnico de enfermagem</h1>
      <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
        Interface deliberadamente mais objetiva, orientada ao que precisa ser realizado no turno.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <MetricCard label="Tarefas do turno" value="18" detail="12 concluídas" />
        <MetricCard label="Próxima atividade" value="09:30" detail="Leito 411 · atividade programada" tone="attention" />
        <MetricCard label="Pendências" value="2" detail="Precisam de registro" tone="attention" />
      </div>

      <div className="mt-6">
        <Panel
          title="Minha sequência de trabalho"
          description="Exemplo operacional. As tarefas clínicas reais dependerão das regras assistenciais aprovadas."
        >
          <div className="space-y-3">
            {[
              ["08:00", "Leito 403", "Registro concluído", "Concluído"],
              ["08:30", "Leito 407", "Atividade assistencial", "Concluído"],
              ["09:00", "Leito 401", "Cuidado programado", "Em andamento"],
              ["09:30", "Leito 411", "Atividade programada", "Próximo"],
              ["10:00", "Leito 405", "Registro de acompanhamento", "Pendente"],
            ].map(([time, location, activity, status]) => (
              <div key={`${time}-${location}`} className="grid gap-3 rounded-2xl border border-[var(--border)] p-4 sm:grid-cols-[80px_120px_1fr_auto] sm:items-center">
                <span className="font-semibold">{time}</span>
                <span className="text-sm text-[var(--muted)]">{location}</span>
                <span className="text-sm font-medium">{activity}</span>
                <span className="w-fit rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold">{status}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
