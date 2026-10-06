import { ModulePage } from "@/components/ui/ModulePage";

export default function HospitalPatientsPage() {
  return (
    <ModulePage
      eyebrow="MedJourney Hospital"
      title="Pacientes"
      description="Visão dos pacientes acompanhados dentro do ambiente hospitalar."
      emptyDescription="Nenhum paciente hospitalar foi cadastrado."
    />
  );
}
