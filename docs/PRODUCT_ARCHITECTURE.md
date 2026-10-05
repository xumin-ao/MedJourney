# Arquitetura de produto — MedJourney

## Visão

O MedJourney é um ecossistema com um core compartilhado e três superfícies de produto. A separação é de experiência e domínio operacional, não apenas de aparência.

## MedJourney Private

Usuário central: médico particular.

Objetivos:
- organizar a carteira clínica;
- enxergar retornos e pendências;
- acompanhar longitudinalmente o paciente;
- preparar consultas;
- reduzir perda de seguimento.

A interface deve privilegiar poucos elementos por tela e decisões do próprio médico.

## MedJourney Clinic

Usuários centrais: médicos, profissionais assistenciais, recepção e gestão.

Objetivos:
- coordenar agendas e recursos;
- acompanhar o fluxo diário;
- permitir colaboração multiprofissional;
- reduzir falhas de comunicação entre atendimento e operação.

A interface deve combinar visão assistencial com capacidade operacional.

## MedJourney Hospital

Usuários centrais: equipes assistenciais e gestão hospitalar.

Objetivos:
- acompanhar o paciente entre setores;
- distribuir responsabilidade por unidade e turno;
- evidenciar gargalos operacionais;
- apresentar experiências específicas por profissão;
- manter rastreabilidade de eventos e ações.

## Core compartilhado

Capacidades candidatas ao core:
- identidade e autenticação;
- organizações e vínculos;
- autorização;
- auditoria;
- notificações;
- arquivos e documentos;
- preferências;
- integrações.

"Core compartilhado" não significa acesso compartilhado a dados entre instituições.

## Regra de produto

Uma funcionalidade só deve entrar no core se for transversal e puder ser isolada por organização e permissão. Fluxos clínicos específicos permanecem nos módulos de cada produto.
