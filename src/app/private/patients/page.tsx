import { ModulePage } from "@/components/ui/ModulePage";

export default function PrivatePatientsPage() {
  return (
    <ModulePage
      eyebrow="MedJourney Private"
      title="Pacientes"
      description="Carteira de pacientes do médico particular."
      emptyDescription="Nenhum paciente foi cadastrado neste ambiente."
    />
  );
}
