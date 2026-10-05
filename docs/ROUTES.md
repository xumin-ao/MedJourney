# Mapa inicial de rotas

As rotas atuais são protótipos e não exigem autenticação ainda.

## Entrada

- `/` — seleção/visão dos produtos.
- `/login` — protótipo visual da autenticação.

## Private

- `/private` — dashboard do médico particular.

## Clinic

- `/clinic` — dashboard da clínica.

## Hospital

- `/hospital` — visão operacional geral.
- `/hospital/physician` — experiência médica.
- `/hospital/nursing` — experiência de enfermagem.
- `/hospital/technician` — experiência do técnico de enfermagem.

## Próxima evolução

Quando a autenticação estiver conectada, a rota inicial após login deverá ser resolvida por contexto autorizado do usuário, e não por um parâmetro escolhido livremente no navegador.
