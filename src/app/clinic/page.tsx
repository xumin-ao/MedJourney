import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

export default function ClinicDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold text-[var(--accent)]">Visão da clínica</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Pessoas, agendas e cuidado em uma operação única.
        </h1>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          A interface da clínica prioriza capacidade, fluxo de atendimento e coordenação entre profissionais.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Atendimentos hoje" value="38" detail="6 profissionais em agenda" />
        <MetricCard label="Pacientes aguardando" value="5" detail="Maior espera: 18 min" tone="attention" />
        <MetricCard label="Salas em uso" value="7/9" detail="2 disponíveis agora" />
        <MetricCard label="Pendências operacionais" value="3" detail="Documentação e confirmações" tone="attention" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Panel title="Operação de hoje" description="Leitura consolidada da recepção e assistência.">
          <div id="operation" className="space-y-3">
            {[
              ["Cardiologia", "12 atendimentos", "2 aguardando"],
              ["Endocrinologia", "9 atendimentos", "No horário"],
              ["Pediatria", "11 atendimentos", "1 encaixe"],
              ["Nutrição", "6 atendimentos", "No horário"],
            ].map(([name, total, status]) => (
              <div key={name} className="flex items-center justify-between rounded-2xl bg-[var(--surface)] p-4">
                <div><p className="font-medium">{name}</p><p className="mt-1 text-sm text-[var(--muted)]">{total}</p></div>
                <span className="text-sm font-medium">{status}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Equipe em atendimento" description="Exemplo de visão gerencial, sem dados reais.">
          <div id="team" className="grid gap-3 sm:grid-cols-2">
            {["Dra. Marina · Cardiologia", "Dr. Rafael · Pediatria", "Enf. Luiza · Procedimentos", "Carla · Nutrição"].map((person) => (
              <div key={person} className="rounded-2xl border border-[var(--border)] p-4 text-sm font-medium">{person}</div>
            ))}
          </div>
          <div id="agenda" className="mt-5 rounded-2xl border border-dashed border-[var(--border-strong)] p-4 text-sm leading-6 text-[var(--muted)]">
            A agenda compartilhada será modelada depois da definição formal de regras de atendimento, recursos e permissões.
          </div>
        </Panel>
      </div>
    </div>
  );
}
