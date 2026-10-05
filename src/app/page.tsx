import Link from "next/link";

const products = [
  {
    name: "Private",
    title: "MedJourney Private",
    description:
      "Uma experiência centrada no médico particular, sua carteira clínica, agenda e continuidade do cuidado.",
    href: "/private",
  },
  {
    name: "Clinic",
    title: "MedJourney Clinic",
    description:
      "Operação multiprofissional com visão de agendas, equipes, pacientes e capacidade da clínica.",
    href: "/clinic",
  },
  {
    name: "Hospital",
    title: "MedJourney Hospital",
    description:
      "Fluxo hospitalar com experiências específicas para médicos, enfermagem, técnicos e gestão.",
    href: "/hospital",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--muted)] shadow-sm">
              MedJourney · Fundação V1
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              A jornada do paciente muda. A interface também.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Um core tecnológico compartilhado com experiências próprias para
              consultório particular, clínica multiprofissional e hospital.
            </p>
          </div>

          <Link
            href="/login"
            className="w-fit rounded-2xl bg-[var(--foreground)] px-5 py-3 font-semibold text-white shadow-sm"
          >
            Ver acesso
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {product.name}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{product.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {product.description}
              </p>
              <p className="mt-7 text-sm font-semibold">
                Explorar protótipo <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)] md:grid-cols-3">
          <p><strong className="text-[var(--foreground)]">Sem dados reais.</strong><br />Todo conteúdo atual é demonstrativo.</p>
          <p><strong className="text-[var(--foreground)]">Sem schema clínico.</strong><br />O banco será modelado após validação.</p>
          <p><strong className="text-[var(--foreground)]">Arquitetura separada.</strong><br />Private, Clinic e Hospital não são a mesma tela com outro nome.</p>
        </div>
      </section>
    </main>
  );
}
