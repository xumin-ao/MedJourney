# Modelo conceitual de acesso

Este documento ainda não representa policies SQL. Ele define princípios para a futura matriz de autorização.

## Dimensões de autorização

A autorização não será baseada apenas na profissão. Uma decisão de acesso deverá considerar, no mínimo:

1. organização;
2. vínculo ativo do usuário;
3. perfil profissional;
4. função exercida naquele contexto;
5. unidade/setor quando aplicável;
6. relação com o paciente ou tarefa;
7. permissão explícita para a ação;
8. contexto temporal quando necessário.

## Perfis iniciais

### Physician
Foco em avaliação, evolução, decisões clínicas e acompanhamento dos pacientes sob sua responsabilidade.

### Nurse
Foco em coordenação de enfermagem, acompanhamento assistencial, registros próprios da profissão e supervisão conforme regras da instituição.

### Nursing technician
Foco em tarefas atribuídas, registros autorizados e atividades do turno. A interface deve reduzir exposição a funções não necessárias.

### Receptionist
Foco administrativo: cadastro, agenda, check-in e documentação administrativa. Não implica acesso irrestrito ao conteúdo clínico.

### Physiotherapist / Nutritionist / Pharmacist
Acesso orientado ao escopo profissional e à participação efetiva no cuidado.

### Administrator
Administração da organização e de configurações operacionais. "Administrador" não deve significar acesso clínico irrestrito por padrão.

## Regras obrigatórias futuras

- menor privilégio;
- negação por padrão;
- RLS no banco;
- validação server-side;
- registro de eventos sensíveis;
- nenhuma autorização baseada somente em dados enviados pelo navegador;
- testes automatizados das policies antes de produção.
