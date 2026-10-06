type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Nenhum dado cadastrado",
  description = "Este ambiente está pronto para receber os primeiros módulos do MedJourney.",
}: EmptyStateProps) {
  return (
    <section className="rounded-[14px] border border-[#e4e9f0] bg-white px-6 py-10 text-center shadow-[0_2px_8px_rgba(15,23,42,0.03)] sm:px-10">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#eaf4ff] text-[13px] font-bold text-[#087bd1]">
        MJ
      </div>
      <h2 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-[#172033]">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-[520px] text-[12px] leading-5 text-[#64748b]">
        {description}
      </p>
    </section>
  );
}
