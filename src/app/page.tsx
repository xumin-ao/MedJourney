const products = [
  {
    name: "Private",
    title: "MedJourney Private",
    description:
      "Para médico particular e consultório individual, com foco na jornada longitudinal do paciente.",
  },
  {
    name: "Clinic",
    title: "MedJourney Clinic",
    description:
      "Para clínicas multiprofissionais, com agendas, equipes, pacientes e operação integrada.",
  },
  {
    name: "Hospital",
    title: "MedJourney Hospital",
    description:
      "Para hospitais e unidades assistenciais, com fluxos específicos por profissão e setor.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-14 max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--muted)] shadow-sm">
            Fundação do ecossistema MedJourney
          </span>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Uma plataforma para acompanhar a jornada do paciente.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Um único core tecnológico, com experiências diferentes para médico
            particular, clínicas e hospitais.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {product.name}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{product.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)]">
          Projeto iniciado do zero. O próximo marco é a definição formal do
          domínio, das organizações, dos perfis profissionais e do modelo de
          autorização antes da criação das tabelas clínicas.
        </div>
      </section>
    </main>
  );
}
