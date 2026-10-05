# Fluxos conceituais

Os fluxos abaixo são modelos de produto, não protocolos clínicos.

## Private

Entrada na carteira → consulta → solicitações/pendências → resultados → revisão → retorno → acompanhamento longitudinal.

O sistema deve evidenciar pacientes que perderam continuidade, sem gerar diagnóstico autônomo.

## Clinic

Agendamento → confirmação → check-in → atendimento → procedimentos/encaminhamentos → documentos → retorno.

A clínica adiciona coordenação entre pessoas, salas, agendas e especialidades.

## Hospital

Entrada → triagem/classificação conforme processo institucional → avaliação → exames/procedimentos → decisão → permanência/transferência → alta.

O MedJourney Hospital deve representar mudança de responsabilidade e localização ao longo da jornada.

## Patient Flow Engine

O mecanismo de fluxo será operacional. Exemplos de estados conceituais:

- aguardando etapa;
- etapa em andamento;
- pendência detectada;
- etapa concluída;
- transferência em processo.

Ele não deve produzir diagnóstico ou substituir decisão clínica. Alertas operacionais devem ser configuráveis e sempre interpretados por profissionais habilitados.
