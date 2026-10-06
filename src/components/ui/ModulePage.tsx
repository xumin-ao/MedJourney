import { EmptyState } from "@/components/ui/EmptyState";

type ModulePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  emptyDescription?: string;
};

export function ModulePage({
  eyebrow,
  title,
  description,
  emptyDescription,
}: ModulePageProps) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087bd1]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[30px] font-medium tracking-[-0.035em] text-[#172033]">
          {title}
        </h1>
        <p className="mt-2 text-[13px] leading-6 text-[#64748b]">
          {description}
        </p>
      </div>

      <EmptyState
        title="Nenhum registro ainda"
        description={
          emptyDescription ??
          "Este módulo está pronto para ser desenvolvido quando definirmos seu fluxo."
        }
      />
    </div>
  );
}
