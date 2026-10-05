"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type LoginFormProps = {
  destination: string;
  productName: string;
};

function getFriendlyAuthError(message: string) {
  const normalized = message.toLowerCase();

  if (
    normalized.includes("invalid login credentials") ||
    normalized.includes("invalid credentials")
  ) {
    return "E-mail ou senha inválidos.";
  }

  if (normalized.includes("email not confirmed")) {
    return "Seu e-mail ainda não foi confirmado.";
  }

  if (normalized.includes("too many requests")) {
    return "Muitas tentativas em pouco tempo. Aguarde um momento e tente novamente.";
  }

  return "Não foi possível entrar agora. Verifique seus dados e tente novamente.";
}

export function LoginForm({ destination, productName }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      setError("Informe seu e-mail e sua senha.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

      if (loginError) {
        setError(getFriendlyAuthError(loginError.message));
        return;
      }

      router.replace(destination);
      router.refresh();
    } catch {
      setError("Não foi possível conectar ao serviço de autenticação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[11px] font-semibold text-[#475569]"
        >
          Usuário
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="seu@email.com"
          required
          autoComplete="username"
          disabled={loading}
          className="h-11 w-full rounded-[9px] border border-[#dbe2eb] bg-white px-3.5 text-[12px] text-[#172033] outline-none transition focus:border-[#087bd1] focus:ring-4 focus:ring-[#d8edff] disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-[11px] font-semibold text-[#475569]"
        >
          Senha
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
            required
            autoComplete="current-password"
            disabled={loading}
            className="h-11 w-full rounded-[9px] border border-[#dbe2eb] bg-white px-3.5 pr-11 text-[12px] text-[#172033] outline-none transition focus:border-[#087bd1] focus:ring-4 focus:ring-[#d8edff] disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="button"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setShowPassword((value) => !value)}
            disabled={loading}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-[#94a3b8] transition hover:text-[#475569] disabled:opacity-50"
          >
            {showPassword ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3l18 18" />
                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5.2 0 8.7 5 9.8 7a17.3 17.3 0 0 1-3.2 3.8" />
                <path d="M6.1 6.1A16 16 0 0 0 2.2 11c1.1 2 4.6 7 9.8 7 1.2 0 2.3-.2 3.3-.6" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.2 12s3.6-7 9.8-7 9.8 7 9.8 7-3.6 7-9.8 7-9.8-7-9.8-7Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {error ? (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-[9px] border border-[#fecdd3] bg-[#fff1f2] px-3.5 py-3 text-[12px] text-[#be123c]"
        >
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="flex h-11 w-full items-center justify-center rounded-[9px] bg-[#0f6fd6] px-4 text-[13px] font-semibold text-white shadow-[0_9px_22px_rgba(15,111,214,0.18)] transition hover:bg-[#0b62bf] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Entrando..." : `Entrar no ${productName} →`}
      </button>
    </form>
  );
}
