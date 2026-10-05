import Link from "next/link";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/auth/LogoutButton";

type NavigationItem = {
  href: string;
  label: string;
};

type ProductShellProps = {
  product: string;
  eyebrow: string;
  navigation: NavigationItem[];
  children: ReactNode;
};

export function ProductShell({
  product,
  eyebrow,
  navigation,
  children,
}: ProductShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-[var(--border)] bg-white lg:flex lg:flex-col">
        <div className="border-b border-[var(--border)] px-7 py-7">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            MedJourney
          </Link>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            {product}
          </p>
        </div>

        <nav className="flex-1 space-y-1 p-4" aria-label={`Navegação ${product}`}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-[10px] px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[#eaf4ff] hover:text-[#07599f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="m-4 rounded-[12px] border border-[var(--border)] bg-[#f8fafc] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Protótipo
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
            Dados demonstrativos. Nenhum prontuário real está conectado.
          </p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[#f5f7fb]/95 backdrop-blur">
          <div className="flex min-h-20 items-center justify-between gap-4 px-6 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                {eyebrow}
              </p>
              <p className="mt-1 font-medium text-[var(--foreground)]">{product}</p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-[10px] border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-[#f8fafc]"
              >
                Trocar ambiente
              </Link>
              <LogoutButton />
            </div>
          </div>

          <nav
            className="flex gap-2 overflow-x-auto border-t border-[var(--border)] px-4 py-3 lg:hidden"
            aria-label={`Navegação móvel ${product}`}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-[9px] bg-[#eaf4ff] px-3 py-2 text-xs font-semibold text-[#07599f]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="px-6 py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
