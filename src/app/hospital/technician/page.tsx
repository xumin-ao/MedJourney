import { EmptyState } from "@/components/ui/EmptyState";

export default function TechnicianView() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087bd1]">
          MedJourney Hospital
        </p>
        <h1 className="mt-3 text-[30px] font-medium tracking-[-0.035em] text-[#172033]">
          Área técnica
        </h1>
      </div>

      <EmptyState description="A área técnica ainda não possui módulos ou registros configurados." />
    </div>
  );
}
