# Guia para Contribuição ao Projeto Conversor-Moeda

Obrigado por querer contribuir com o projeto! Sua colaboração é muito importante.

## Descrição do projeto

Este projeto é um conversor de moedas que possui backend em Java Spring Boot e frontend em Ionic. 

## Como baixar o repositório

Para clonar o repositório localmente, use os comandos:

```bash
git clone https://github.com/James-Script/conversor-moeda.git
cd conversor-moeda
```

# Pré-requisitos
Antes de começar, certifique-se de ter instalado:

- Java 17 ou superior (para backend)

- Maven ou Gradle (para build do backend)

- Node.js e npm (para frontend Ionic)

- Ionic CLI (instalado via npm)

- MySQL (se usar banco local) ou outro banco conforme configuração ou o H2 pois ele vai está alocado no backend

# Como contribuir

Fluxo de trabalho recomendado
1. Crie um branch para sua tarefa ou bugfix:

```bash
git checkout -b nome-do-branch
```
2. Faça suas alterações e commit com mensagens claras:

```bash
git add .
git commit -m "Descrição clara do que foi feito"
```
3. Atualize seu branch com o main (se necessário):

```bash
git fetch origin
git rebase origin/main
```

4. Envie o branch para o repositório remoto:

```bash
git push origin nome-do-branch
````
5. Abra um Pull Request (PR) no GitHub para revisão.

# Padrões de código
- Siga as convenções de código do Java e Angular/Ionic.

- Escreva commits descritivos.

- Teste suas alterações antes de enviar.

# Revisão e Merge
- Aguarde revisão de pelo menos um mantenedor.

- Após aprovação, o PR será integrado ao branch principal.

              - Obrigado por colaborar! -
