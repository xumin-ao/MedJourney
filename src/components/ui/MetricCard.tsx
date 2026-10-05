type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  tone?: "default" | "attention" | "critical";
};

export function MetricCard({
  label,
  value,
  detail,
  tone = "default",
}: MetricCardProps) {
  const toneClass =
    tone === "critical"
      ? "border-[var(--danger-border)] bg-[var(--danger-surface)]"
      : tone === "attention"
        ? "border-[var(--warning-border)] bg-[var(--warning-surface)]"
        : "border-[var(--border)] bg-white";

  return (
    <article className={`rounded-3xl border p-6 shadow-sm ${toneClass}`}>
      <p className="text-sm font-medium text-[var(--muted)]">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{detail}</p>
    </article>
  );
}
