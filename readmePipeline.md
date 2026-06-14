# PGATS CI Final

Projeto desenvolvido para demonstrar a implementação de pipelines de Integração Contínua (CI) utilizando GitHub Actions.

## Objetivo

O objetivo deste projeto é automatizar a execução dos testes da aplicação através de diferentes estratégias de disparo de pipeline, garantindo validação contínua do código e geração de evidências dos resultados.

---

## Tecnologias Utilizadas

* Node.js 22
* Mocha
* GitHub Actions
* Mochawesome

---

## Estrutura do Projeto

```text
.github/
└── workflows/
    ├── 01-manual-exec.yaml
    ├── 02-agendado-exec.yaml
    └── 03-push-exec.yaml

src/
test/
```

---

## Pipelines Implementadas

### 1. Execução Manual

Arquivo:

```text
.github/workflows/01-manual-exec.yaml
```

Gatilho utilizado:

```yaml
on:
  workflow_dispatch:
```

Esta pipeline é executada manualmente através da interface do GitHub Actions.

Fluxo de execução:

1. Checkout do código
2. Instalação do Node.js
3. Instalação das dependências
4. Execução dos testes Mocha
5. Publicação dos relatórios

---

### 2. Execução Agendada

Arquivo:

```text
.github/workflows/02-agendado-exec.yaml
```

Gatilhos utilizados:

```yaml
on:
  workflow_dispatch:
  schedule:
    - cron: '*/10 * * * *'
```

Conceitos aplicados:

* Schedule Trigger
* Cron Expressions
* Automação de execução periódica

A pipeline é executada automaticamente em intervalos definidos por uma expressão cron.

Também foi mantido o gatilho manual para permitir execuções sob demanda.

---

### 3. Execução por Push

Arquivo:

```text
.github/workflows/03-push-exec.yaml
```

Gatilho utilizado:

```yaml
on:
  push:
```

Conceitos aplicados:

* Continuous Integration
* Validação automática após alterações no código

A cada push realizado no repositório, os testes são executados automaticamente.

---

## Conceitos de CI/CD Aplicados

### Workflow

Workflow é o conjunto de tarefas automatizadas definidas em um arquivo YAML dentro da pasta:

```text
.github/workflows
```

### Job

Um Job representa um conjunto de etapas executadas em uma máquina virtual.

Exemplo:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
```

### Steps

Os Steps representam as ações executadas durante o Job.

Exemplos:

* Checkout do código
* Instalação do Node.js
* Instalação de dependências
* Execução dos testes

### Runner

Runner é o ambiente responsável pela execução da pipeline.

Neste projeto foi utilizado:

```yaml
runs-on: ubuntu-latest
```

---

## Relatórios de Teste

Os testes são executados utilizando Mocha com geração de relatório através do Mochawesome.

Após cada execução, os relatórios são publicados como Artifacts do GitHub Actions.

Benefícios:

* Evidência dos testes executados
* Histórico das execuções
* Facilidade de análise dos resultados

---

## Como Executar Localmente

Instalar dependências:

```bash
npm install
```

Executar testes:

```bash
npm test
```

---

## Evidências

As evidências das execuções podem ser consultadas na aba Actions do GitHub, incluindo:

* Logs de execução
* Status dos testes
* Relatórios publicados como Artifacts
