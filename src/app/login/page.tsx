import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[var(--background)] lg:grid-cols-[1.05fr_0.95fr]">
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="text-xl font-semibold tracking-tight">MedJourney</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Acesso seguro
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Entre na sua área de trabalho.</h1>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Esta tela é somente visual nesta fase. A autenticação será conectada ao Supabase depois da definição formal de organizações e perfis.
          </p>

          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium">E-mail</span>
              <input
                type="email"
                disabled
                placeholder="nome@instituicao.com.br"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 outline-none disabled:cursor-not-allowed disabled:opacity-70"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Senha</span>
              <input
                type="password"
                disabled
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 outline-none disabled:cursor-not-allowed disabled:opacity-70"
              />
            </label>
            <button
              type="button"
              disabled
              className="w-full rounded-2xl bg-[var(--accent)] px-4 py-3.5 font-semibold text-white opacity-70"
            >
              Autenticação ainda não conectada
            </button>
          </form>
        </div>
      </section>

      <section className="hidden items-center bg-[var(--foreground)] p-12 text-white lg:flex">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Um core. Três contextos.</p>
          <h2 className="mt-5 text-5xl font-semibold tracking-tight">
            A interface certa para cada ambiente de cuidado.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Médico particular, clínica multiprofissional e hospital compartilham tecnologia, sem compartilhar uma experiência genérica.
          </p>
        </div>
      </section>
    </main>
  );
}
