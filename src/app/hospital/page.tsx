import { MetricCard } from "@/components/ui/MetricCard";
import { Panel } from "@/components/ui/Panel";

export default function HospitalDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-4xl">
        <p className="text-sm font-semibold text-[var(--accent)]">Visão hospitalar</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          O fluxo do paciente como eixo da operação.
        </h1>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Protótipo operacional para demonstrar como gargalos e responsabilidades podem ser apresentados sem transformar a interface em um prontuário genérico.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Pacientes assistidos" value="142" detail="Distribuídos entre unidades" />
        <MetricCard label="Aguardando avaliação" value="8" detail="2 acima da janela operacional" tone="critical" />
        <MetricCard label="Aguardando leito" value="4" detail="Origem: pronto atendimento" tone="attention" />
        <MetricCard label="Altas previstas" value="11" detail="5 com pendências" tone="attention" />
      </div>

      <div id="flow" className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Panel title="Patient Flow Engine" description="Visão conceitual de gargalos ao longo da jornada hospitalar.">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Triagem", "6 pacientes", "Operação normal"],
              ["Avaliação médica", "8 pacientes", "2 em atenção"],
              ["Aguardando exames", "13 pacientes", "Maior fila"],
              ["Aguardando decisão", "5 pacientes", "Resultados disponíveis"],
              ["Aguardando leito", "4 pacientes", "Capacidade limitada"],
              ["Processo de alta", "11 pacientes", "5 pendências"],
            ].map(([stage, total, note]) => (
              <div key={stage} className="rounded-2xl border border-[var(--border)] p-4">
                <p className="font-medium">{stage}</p>
                <p className="mt-2 text-2xl font-semibold">{total}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{note}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Unidades" description="Resumo demonstrativo por área assistencial.">
          <div className="space-y-3">
            {[
              ["Pronto atendimento", "32"],
              ["Clínica médica", "41"],
              ["UTI adulto", "18"],
              ["Pediatria", "21"],
              ["Centro cirúrgico", "8"],
            ].map(([unit, total]) => (
              <div key={unit} className="flex items-center justify-between rounded-2xl bg-[var(--surface)] p-4">
                <span className="text-sm font-medium">{unit}</span>
                <span className="text-sm font-semibold">{total}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
