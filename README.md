<div align="center">
  <h1 align="center">📦 Jestoque</h1>

  <p align="center">
    Sistema de Gestão de Estoque Fullstack robusto, moderno e escalável.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Java-17%2B-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
    <img src="https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>
</div>

---

O **Jestoque** é uma plataforma robusta para controle de inventário, desenvolvida para oferecer uma experiência fluida de gerenciamento de produtos, análise de métricas e balanço físico. O projeto foi construído com foco em **Clean Code**, **UI/UX moderna** e uma arquitetura escalável.

<!-- Adicione um screenshot do seu projeto aqui -->
<!-- ![Dashboard Jestoque](link-da-imagem.png) -->

## 🚀 Funcionalidades Principais

- **Dashboard Inteligente:** Visualização rápida de métricas (Total de itens, valor em estoque e alertas) com gráficos de distribuição via Chart.js.
- **CRUD Completo de Produtos:** Cadastro, edição, listagem e exclusão de itens com suporte a SKU e preços dinâmicos.
- **Busca em Tempo Real:** Filtro instantâneo na listagem de produtos por nome ou código SKU.
- **Módulo de Inventário:** Ferramenta de reconciliação para comparação entre estoque sistêmico e contagem física, calculando divergências automaticamente.
- **Interface Responsiva:** Design "Mobile-First" desenvolvido com Tailwind CSS.

---

## 🛠️ Tecnologias Utilizadas

### **Back-end**
- **Java 17+** & **Spring Boot 3**
- **Spring Data JPA** para persistência de dados.
- **H2 Database** (Banco de dados em memória para ambiente de desenvolvimento).
- **Maven** para gerenciamento de dependências.

### **Front-end**
- **Angular 19 (Standalone Components)**
- **Tailwind CSS** para estilização personalizada.
- **Chart.js** & **ng2-charts** para inteligência visual.
- **Phosphor Icons** para iconografia moderna.

### **Scripts & Integração**
- **Python** para scripts de automação e carga de dados em lote via API REST.

---

## 🏛️ Arquitetura do Projeto

O projeto segue o padrão de **Arquitetura em Camadas (Layered Architecture)**, garantindo uma separação clara de responsabilidades:

1.  **Controller Layer:** Endpoints REST que gerenciam as requisições HTTP e comunicação com o front-end.
2.  **Service Layer:** Onde reside a lógica de negócio, isolada das regras de entrada/saída.
3.  **Repository Layer:** Interface de comunicação direta com o banco de dados via JPA.

> [!TIP]
> **Conhecimento Avançado:** O sistema foi projetado com o princípio de baixo acoplamento. Atualmente em camadas, a lógica de negócio está preparada para uma migração para **Arquitetura Hexagonal (Portas e Adaptadores)** ou **Clean Architecture**, visando isolar o domínio de dependências tecnológicas externas.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- JDK 17 ou superior
- Node.js (versão 18+)
- Angular CLI

### Instalação e Execução

#### 1. Back-end (Spring Boot)

```bash
# Entre na pasta do projeto java
cd jestoque-api

# Execute o projeto
./mvnw spring-boot:run
```
O servidor iniciará em: `http://localhost:8080`

#### 2. Front-end (Angular)

```bash
# Entre na pasta do projeto angular
cd jestoque-front

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```
Acesse no navegador: `http://localhost:4200`

---

## 📈 Roadmap & Evoluções Futuras

- [ ] Implementação de Spring Security com JWT para autenticação de usuários.
- [ ] Substituição do banco H2 por PostgreSQL para persistência em produção.
- [ ] Containerização da aplicação com Docker.
- [ ] Exportação de relatórios de estoque para PDF e Excel.

---

## 👤 Autor

**José Alcides**

---

## 📝 Licença

Este projeto está sob a licença MIT.
