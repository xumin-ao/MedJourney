import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedJourney",
  description:
    "Plataforma de gestão da jornada do paciente para consultórios, clínicas e hospitais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
