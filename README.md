
# Conversor de Moeda 💱

Este é um projeto completo de conversor de moedas com **backend em Java Spring Boot** e **frontend em Ionic Angular**, que permite converter valores entre diferentes moedas em tempo real.

---

## 📸 Imagens do Projeto

### 💻 Frontend - Home Page (Ionic)
![Projeto em execução](https://github.com/user-attachments/assets/d83ee8ea-44d0-45bf-baef-67e108aaac26)


### 🔙 Backend - Estrutura e o Postman
![Estrutura](https://github.com/user-attachments/assets/4690c2e2-20e0-4454-b27f-1058fffa03fd)
![getpost](https://github.com/user-attachments/assets/ac662a8b-32f9-476a-a733-d1ec9623d7c5)

---

## 📥 Como baixar o repositório

2. 📱 Frontend (Angular + Ionic)
Pré-requisitos:
Node.js (v18+)

Ionic CLI (npm install -g @ionic/cli)
```bash
# Clone o repositório do front-end
git clone https://github.com/thainaae2/conversor-moedas-api.git
cd conversor-moedas-api/conversor-moedas

# Instale as dependências
npm install

# Rode a aplicação
ionic serve
```
---
1. 🚀 Backend (Java - Spring Boot)
Pré-requisitos:
JDK 17 ou superior

Maven

Banco de dados MySQL (ou outro compatível)

````bash
# Clone o repositório do back-end
git clone https://github.com/CauaFM/Convers-o-moeda.git
cd Convers-o-moeda

# (Opcional) Crie o banco de dados com o arquivo .sql
mysql -u root -p < backend.sql

# Rode o back-end
./mvnw spring-boot:run
````
### ⚠️ Importante: Configure o application.properties (ou application.yml) para apontar para o seu banco de dados local com as credenciais corretas.
---

# 🔧 Pré-requisitos

- Java 17+

-Maven 3.3.9

- Node.js v22.15.0

- Ionic CLI 4.12.0+

- MySQL ou H2 Database

---

# 🤝 Contribuindo
Siga as diretrizes de contribuição descritas em CONTRIBUTING.md.

- Fluxo de trabalho:

- Crie um branch com o nome da feature.

- Faça o commit das alterações.

- Crie um Pull Request para o branch main.

- Veja também o tutorial de Git com todos os comandos e exemplos.

---

# 👥 Autores:

- Cesario Lins de Albuquerque Neto - 01724401 (Scrum Master)

- Jamesson Lucas de Araújo Marinho - 01699289 (Gerente de Configuração)

- Luccas Matheus Ferreira da Silva - 01699281 (Documentador)

- Maria Eduarda de Brito- 01715663 (Documentador)

- Diego Henrique Sobral da Silva - 01705192 (Documentador)

- Thainá Ellen Mendes Leite - 01704647 (Desenvolvedor)

- Cauã Fernandes De Moura - 01688545 (Desenvolvedor)

---

# 📄 Licença
Distribuído sob a licença Creative Commons Attribution 4.0 International.

---

# 📌 Estrutura do Projeto

## 🌐 Frontend - Ionic + Angular

```plaintext

src
├── app
│   ├── home
│   │   ├── home.page.html
│   │   ├── home.page.scss
│   │   ├── home.page.spec.ts
│   │   ├── home.page.ts
│   │   └── currency.service.ts
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets
├── environments
│   ├── environment.ts
│   └── environment.prod.ts
├── theme
│   └── (estilos globais)
├── global.scss
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
├── zone-flags.ts

.browserslistrc
.editorconfig
.eslintrc.json
angular.json
capacitor.config.ts
ionic.config.json
karma.conf.js
package.json
package-lock.json
tsconfig.app.json
tsconfig.json
tsconfig.spec.json

````
---

## 📦 Backend - Spring Boot (Java)

```` plaintext

conversao-de-moeda/
│
├── .idea/                          # Configuração do IntelliJ
├── .mvn/                           # Configuração do Maven Wrapper
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/backend/conversao/
│   │   │       ├── controller/     # Camada de entrada (endpoints)
│   │   │       │   ├── ConversaoController.java
│   │   │       │   ├── MoedaController.java
│   │   │       │   └── TaxaController.java
│   │   │       ├── dto/           # Objetos de transferência de dados
│   │   │       │   ├── ConversaoDTO.java
│   │   │       │   ├── MoedaDTO.java
│   │   │       │   └── TaxaDTO.java
│   │   │       ├── exception/     # Tratamento de exceções personalizadas
│   │   │       │   ├── ApiError.java
│   │   │       │   ├── GlobalExceptionHandler.java
│   │   │       │   └── MoedaNotFoundException.java
│   │   │       ├── model/         # Entidades do domínio (não expandido na imagem)
│   │   │       ├── repository/    # Interfaces de acesso ao banco de dados
│   │   │       │   ├── ConversaoRepository.java
│   │   │       │   ├── MoedaRepository.java
│   │   │       │   └── TaxaRepository.java
│   │   │       ├── service/       # Regras de negócio (não expandido)
│   │   │       └── ConversaoApplication.java  # Classe principal do Spring Boot
│   │   └── resources/             # Arquivos de configuração (não expandido)
│
│   └── test/
│       └── java/com/backend/conversao/
│           └── service/
│               └── ConversaoApplicationTests.java
│
├── backend.sql                    # Script de banco de dados
├── pom.xml                        # Configuração do Maven
├── mvnw, mvnw.cmd                 # Maven Wrapper
└── README.md                      # Instruções do projeto

````
---

## Um branch por semana ou por desenvolvedor.

Sempre fazer merge no main via Pull Request.
