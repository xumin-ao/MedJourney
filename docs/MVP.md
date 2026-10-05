# Escopo proposto para o primeiro MVP

O MVP inicial deve provar a arquitetura sem tentar construir um hospital inteiro.

## Objetivo

Validar identidade, organização, autorização, paciente e jornada básica em um produto real.

## Sequência recomendada

### 1. Fundação
- autenticação;
- organização;
- vínculos profissionais;
- permissões;
- auditoria.

### 2. MedJourney Private
- cadastro de paciente;
- lista/carteira;
- agenda;
- consulta;
- pendências;
- timeline longitudinal.

### 3. Expansão para Clinic
Após estabilizar o core, adicionar múltiplos profissionais, recepção e agenda compartilhada.

### 4. Hospital
Somente após validar multi-tenancy, autorização e auditoria. O hospital exige modelagem adicional de unidade, setor, localização, equipe, turno e jornada.

## Fora do MVP inicial

- diagnóstico autônomo por IA;
- prescrição automática;
- protocolos clínicos automáticos;
- faturamento hospitalar completo;
- integrações com equipamentos;
- interoperabilidade ampla;
- Patient Flow Engine definitivo.

Esses recursos podem vir depois de a base estar madura.
