# Design System inicial

## Objetivo

Criar uma identidade visual clínica, moderna e calma, sem parecer um dashboard financeiro genérico e sem usar cores para sugerir diagnóstico.

## Paleta inicial

- Background: cinza-esverdeado muito claro.
- Foreground: grafite com leve tom verde.
- Accent: verde-petróleo.
- Surface: verde acinzentado suave.
- Warning: âmbar claro para atenção operacional.
- Critical: vermelho muito suave para prioridade operacional.

As cores de atenção indicam **estado de trabalho**, não gravidade clínica por padrão.

## Forma

- cards com bordas suaves;
- raio alto para superfícies principais;
- sombras discretas;
- bastante espaço em branco;
- densidade maior apenas em interfaces hospitalares.

## Tipografia

Fonte de sistema inicialmente, priorizando legibilidade e desempenho. Uma família tipográfica própria poderá ser adicionada depois sem mudar a hierarquia do produto.

## Componentes já criados

- `ProductShell`
- `MetricCard`
- `Panel`

## Regras

1. Nunca depender apenas de cor para comunicar estado.
2. Textos críticos devem permanecer legíveis em telas pequenas.
3. Interfaces de tarefas devem reduzir distração.
4. Médicos, enfermagem e técnicos podem compartilhar componentes, mas não precisam compartilhar a mesma composição de tela.
5. A responsividade deve ser parte do componente, não um ajuste posterior.
