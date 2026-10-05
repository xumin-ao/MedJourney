# Arquitetura inicial — MedJourney

## 1. Objetivo

Construir uma plataforma de saúde digital multi-tenant capaz de atender médico particular, clínicas e hospitais sem transformar os três contextos em uma única interface genérica.

## 2. Produtos

### MedJourney Private
Foco no médico particular e na relação longitudinal com sua carteira de pacientes.

### MedJourney Clinic
Foco em clínicas com múltiplos profissionais, recepção, agenda compartilhada e operação multiprofissional.

### MedJourney Hospital
Foco no fluxo assistencial hospitalar, unidades, setores, leitos, equipes e jornadas distintas para médicos, enfermeiros, técnicos e demais profissionais.

## 3. Core compartilhado

O core poderá concentrar capacidades transversais como autenticação, organizações, vínculos profissionais, autorização, auditoria, notificações, documentos, arquivos, preferências e infraestrutura de integração.

Os módulos clínicos serão definidos somente depois do levantamento de requisitos e da modelagem do domínio.

## 4. Multi-tenancy

Toda informação pertencente a uma instituição deverá possuir uma fronteira de organização clara. O desenho definitivo será validado antes da criação das tabelas.

Princípios:

- isolamento entre organizações;
- RLS no Supabase;
- menor privilégio;
- autorização no servidor;
- auditoria para operações sensíveis;
- nenhuma confiança em role enviada pelo cliente.

## 5. Camadas

```text
src/
├── app/          # rotas e layouts
├── components/   # componentes reutilizáveis
├── features/     # módulos de negócio
├── lib/          # integrações e infraestrutura
├── types/        # contratos TypeScript
└── proxy.ts      # renovação da sessão Supabase
```

As pastas de features serão criadas conforme os módulos forem formalmente aprovados.

## 6. Supabase

A integração inicial usa `@supabase/ssr` com clientes separados para browser e servidor. As tabelas clínicas, policies e migrations ainda não serão criadas nesta etapa.

## 7. Regra de desenvolvimento

Nenhuma tabela, coluna, permissão clínica ou workflow crítico deve ser criado por suposição. Primeiro definimos o requisito; depois modelamos; por fim implementamos.
