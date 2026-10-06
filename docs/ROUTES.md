# Mapa inicial de rotas

As rotas abaixo representam a estrutura atual do MedJourney. A autenticação já está conectada ao Supabase, mas a autorização por organização, vínculo e permissão ainda será implementada.

## Entrada

- `/` — seleção do ecossistema.
- `/login?sector=private` — login do MedJourney Private.
- `/login?sector=clinic` — login do MedJourney Clinic.
- `/login?sector=hospital` — login do MedJourney Hospital.

## Private

- `/private` — início.
- `/private/patients` — pacientes.
- `/private/schedule` — agenda.
- `/private/encounters` — consultas.
- `/private/journey` — jornada clínica.

## Clinic

- `/clinic` — início.
- `/clinic/patients` — pacientes.
- `/clinic/schedule` — agenda.
- `/clinic/team` — equipe.
- `/clinic/operations` — operação.

## Hospital

- `/hospital` — início.
- `/hospital/patients` — pacientes.
- `/hospital/flow` — fluxo de pacientes.
- `/hospital/units` — unidades.
- `/hospital/physician` — área médica.
- `/hospital/nursing` — enfermagem.
- `/hospital/technician` — técnicos de enfermagem.

## Regra atual

As páginas existem como estrutura vazia para que cada módulo seja desenvolvido e validado separadamente. Nenhum dado clínico demonstrativo é usado.

A próxima evolução de segurança será resolver o acesso por organização, vínculo profissional e permissão, sem confiar apenas no setor escolhido na URL.
