# Decisões arquiteturais

## ADR-001 — Projeto independente

O MedJourney é um projeto novo e independente. Nenhum código, banco ou estrutura de outro sistema é dependência deste produto.

## ADR-002 — Stack base

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase

## ADR-003 — Três superfícies de produto

Private, Clinic e Hospital compartilham um core, mas possuem experiências próprias.

## ADR-004 — Multi-tenancy desde a base

O isolamento institucional será requisito estrutural antes da entrada de dados reais.

## ADR-005 — Autorização não equivale a profissão

Profissão é apenas uma dimensão. Organização, vínculo, função, unidade, relação com o paciente e permissão explícita podem participar da decisão.

## ADR-006 — Sem schema clínico prematuro

Nenhuma tabela clínica definitiva será criada antes do modelo de domínio ser validado.

## ADR-007 — Main como branch de trabalho atual

Por decisão do proprietário do projeto, o desenvolvimento inicial está sendo realizado diretamente na branch `main`. Commits devem permanecer pequenos, identificáveis e reversíveis.
