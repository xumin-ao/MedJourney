# Modelo conceitual de domínio

Este documento descreve conceitos do produto. Ele **não define nomes de tabelas ou colunas**.

## Organização

Representa a fronteira institucional de dados e operação. Pode corresponder a um consultório individual, clínica ou hospital.

Uma pessoa poderá se relacionar com mais de uma organização no futuro, mas os acessos devem ser avaliados separadamente em cada contexto.

## Usuário

Identidade autenticada no sistema.

A identidade de login não determina, sozinha, profissão, função ou permissão.

## Vínculo profissional

Representa a relação entre usuário e organização. É nesse contexto que devem existir função, status do vínculo e escopo de atuação.

## Paciente

Identidade longitudinal da pessoa assistida. A modelagem futura deve evitar duplicação desnecessária e considerar regras de compartilhamento e isolamento institucional.

## Jornada

Sequência de eventos e etapas relevantes ao acompanhamento do paciente. A jornada muda conforme o produto:

- Private: acompanhamento longitudinal;
- Clinic: atendimento multiprofissional;
- Hospital: movimentação e responsabilidade ao longo da permanência.

## Atendimento

Contexto delimitado em que ocorre interação assistencial ou profissional com o paciente.

## Pendência / tarefa

Item operacional que requer ação de uma pessoa, equipe ou etapa do fluxo. Uma tarefa não deve ser tratada como decisão clínica automática.

## Evento

Registro temporal relevante para reconstruir o que ocorreu na jornada.

## Auditoria

Registro técnico de ações sensíveis: quem executou, em qual contexto, quando e sobre qual recurso. Auditoria não deve depender do histórico visual da interface.

## Unidade e setor

Conceitos hospitalares que representam a localização/estrutura operacional. O modelo definitivo dependerá do levantamento hospitalar.

## Turno / equipe

Contextos temporais e organizacionais que podem limitar responsabilidade e visibilidade em ambiente hospitalar.

## Regra

Antes de converter qualquer conceito deste documento em banco de dados, o modelo deve ser revisado e aprovado.
