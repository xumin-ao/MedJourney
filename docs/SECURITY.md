# Segurança e privacidade — princípios de engenharia

O MedJourney lidará com informações sensíveis. Segurança não será um módulo posterior; será requisito arquitetural.

## Princípios

- isolamento multi-tenant;
- menor privilégio;
- negação por padrão;
- autenticação forte;
- autorização no servidor e no banco;
- RLS para dados pertencentes a organizações;
- auditoria de ações sensíveis;
- logs sem exposição desnecessária de dados clínicos;
- segredos apenas em variáveis de ambiente seguras;
- revisão humana para qualquer recurso de IA com impacto assistencial;
- backups, recuperação e retenção definidos antes de produção.

## Dados de demonstração

Durante o desenvolvimento visual, usar exclusivamente dados fictícios.

## Ambientes

Separar desenvolvimento, homologação e produção. Credenciais e bancos de produção nunca devem ser usados para testes locais.

## Antes do primeiro dado real

Devem estar definidos:
- modelo de consentimento e bases legais aplicáveis;
- matriz de acesso;
- auditoria;
- política de retenção;
- resposta a incidentes;
- rotinas de backup/restauração;
- requisitos regulatórios e institucionais.
