# 🚀 Projeto Angular SPA — Buscador de CEP & Institucional

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Finalizado_e_No_Ar-brightgreen?style=for-the-badge)

Bem-vindo ao repositório do nosso projeto Front-End! Este é um ecossistema projetado sob o conceito de **SPA (Single Page Application)**, focado em alta performance, navegação fluida sem recarregamento de página e arquitetura moderna de componentes (Standalone Components).

> 🌍 **Acesse o site online:** [Clique aqui para testar o projeto no ar]( https://felipekmbelo.github.io/projeto-SiteSPAs-React-ts/)

---

## 🎯 O que é este projeto?

A aplicação foi desenvolvida de forma colaborativa e está dividida em dois grandes módulos interligados por um sistema inteligente de rotas:

1. **Buscador de CEP:** Uma ferramenta dinâmica e assíncrona que consome a API pública do **ViaCEP** para buscar, validar e exibir dados de endereço em tempo real.
2. **Sobre a Equipe:** Uma página institucional elegante e responsiva com cards dinâmicos que apresentam os desenvolvedores do projeto e a fundamentação teórica utilizada.

---

## 🛠️ Tecnologias e Recursos Utilizados

* **[Angular 17/18+]** — Framework estrutural baseado em Standalone Components.
* **[TypeScript]** — Tipagem estática para maior segurança e prevenção de bugs.
* **[Angular Router]** — Gerenciamento de rotas SPA (`<router-outlet>` e `routerLink`).
* **[ViaCEP API]** — Integração com serviço externo via protocolo HTTP.
* **[GitHub Pages]** — Plataforma de Deploy e hospedagem em nuvem.

---

## 👥 Autores e Divisão de Times

Este projeto simula um ambiente real de desenvolvimento de software, com divisão clara de responsabilidades ágeis. O desenvolvimento foi executado por 6 integrantes, divididos em 3 frentes de trabalho:

### 📖 Time 1: Documentação e Pesquisa
* **Integrantes:** Eduardo Leonel e Kelly
* **Responsabilidade:** Desenvolvimento de toda a base teórica, formatação técnica do projeto e elaboração do documento oficial de entrega. *(Nota: O arquivo PDF/Word contendo a documentação completa pode ser encontrado na raiz ou anexos deste projeto).*

### 🔍 Time 2: Desenvolvimento do Core (Buscador)
* **Integrantes:** Ryan e Diones
* **Responsabilidade:** Criação da primeira página do SPA. Implementação da lógica de busca de CEP, tratativas de erro, layout do buscador e integração com a API externa.

### 🏢 Time 3: Desenvolvimento Institucional (Sobre Nós)
* **Integrantes:** Felipe e Rafael Pasqual
* **Responsabilidade:** Criação da segunda página do SPA. Desenvolvimento da interface de cards da equipe, estilização avançada (CSS), estruturação das referências e garantia da responsividade da tela.

---

## 🚀 Como Executar Este Projeto na Sua Máquina Local

Gostou do código fonte e quer rodar o projeto no seu próprio computador para testar ou modificar? Siga o passo a passo abaixo:

### 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* [Git](https://git-scm.com/)

### 💻 Passo a Passo para Instalação

**1. Clone o repositório**
Abra o seu terminal e rode o comando:
```bash
git clone COLOQUE_O_LINK_DO_REPOSITORIO_AQUI
2. Acesse a pasta do projeto

Bash
cd projeto-integrantes-ts
3. Instale as dependências
O Node vai ler o arquivo package.json e baixar tudo o que o Angular precisa para funcionar:

Bash
npm install
4. Inicie o servidor local
Ligue o motor do Angular com o comando:

Bash
ng serve
5. Teste no navegador
Assim que o terminal carregar e mostrar que compilou com sucesso, abra seu navegador e acesse:
👉 http://localhost:4200

⭐ Se você achou esta arquitetura limpa ou a documentação útil, considere deixar uma estrela neste repositório!