# MedJourney

Plataforma de saúde digital criada do zero para gestão da jornada do paciente em três contextos:

- **MedJourney Private** — médico particular e consultório individual.
- **MedJourney Clinic** — clínicas multiprofissionais.
- **MedJourney Hospital** — hospitais, unidades assistenciais e equipes multidisciplinares.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase (PostgreSQL, Auth, RLS e Storage)

## Princípios

1. Segurança e privacidade por padrão.
2. Arquitetura multi-tenant desde a fundação.
3. Interfaces diferentes por contexto e perfil profissional.
4. Auditoria e rastreabilidade para ações sensíveis.
5. Separação entre domínio, autenticação, dados e apresentação.
6. Crescimento modular sem misturar Private, Clinic e Hospital.

## Estado atual

Fundação técnica inicial. O banco clínico ainda não foi modelado e nenhuma tabela de domínio foi criada.

## Documentação

- `docs/ARCHITECTURE.md`
- `docs/ROADMAP.md`

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha as credenciais do projeto Supabase quando ele for criado.

Nunca envie chaves privadas ou credenciais para o GitHub.
