import { EmptyState } from "@/components/ui/EmptyState";

export default function HospitalDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087bd1]">
          MedJourney Hospital
        </p>
        <h1 className="mt-3 text-[30px] font-medium tracking-[-0.035em] text-[#172033]">
          Início
        </h1>
        <p className="mt-2 text-[13px] leading-6 text-[#64748b]">
          Ambiente hospitalar.
        </p>
      </div>

      <EmptyState
        description="Ainda não existem pacientes, unidades, equipes, fluxos ou outros registros neste ambiente."
      />
    </div>
  );
}
