# MedJourney

Plataforma de saúde digital criada do zero para gestão da jornada do paciente.

## Produtos

- **MedJourney Private** — médico particular e consultório individual.
- **MedJourney Clinic** — clínicas multiprofissionais.
- **MedJourney Hospital** — hospitais, unidades assistenciais e equipes multidisciplinares.

O princípio central é compartilhar infraestrutura sem transformar contextos assistenciais diferentes em uma única interface genérica.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase (PostgreSQL, Auth, RLS e Storage)

## Protótipos atuais

- `/private`
- `/clinic`
- `/hospital`
- `/hospital/physician`
- `/hospital/nursing`
- `/hospital/technician`
- `/login`

Todos usam dados fictícios. A autenticação e o banco clínico ainda não estão conectados.

## Princípios

1. Segurança e privacidade por padrão.
2. Arquitetura multi-tenant desde a fundação.
3. Interfaces diferentes por contexto e perfil profissional.
4. Auditoria e rastreabilidade para ações sensíveis.
5. Separação entre domínio, autenticação, dados e apresentação.
6. Crescimento modular sem misturar Private, Clinic e Hospital.
7. Nenhum schema clínico criado por suposição.

## Documentação

- `docs/ARCHITECTURE.md`
- `docs/PRODUCT_ARCHITECTURE.md`
- `docs/PERMISSIONS.md`
- `docs/FLOWS.md`
- `docs/SECURITY.md`
- `docs/MVP.md`
- `docs/ROADMAP.md`

## Desenvolvimento local

Depois de clonar o repositório:

```bash
npm install
npm run dev
```

Para checagens:

```bash
npm run typecheck
npm run lint
npm run build
```

## Supabase

Copie `.env.example` para `.env.local` e preencha as credenciais somente quando o projeto Supabase do MedJourney for criado.

Nunca envie chaves privadas, tokens ou credenciais para o GitHub.
