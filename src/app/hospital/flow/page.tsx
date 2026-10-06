import { ModulePage } from "@/components/ui/ModulePage";

export default function HospitalFlowPage() {
  return (
    <ModulePage
      eyebrow="MedJourney Hospital"
      title="Fluxo de pacientes"
      description="Acompanhamento da movimentação do paciente entre etapas e setores."
      emptyDescription="Nenhum fluxo hospitalar foi configurado."
    />
  );
}
