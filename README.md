# 🚀 Projeto Angular SPA — Buscador de CEP & Equipe

Bem-vindo ao repositório do nosso projeto de Front-End desenvolvido em Angular! Este é um ecossistema projetado sob o conceito de SPA (Single Page Application), focado em alta performance, navegação fluida sem recarregamento de página e arquitetura de componentes modulares modernos (Standalone Components).

Este projeto foi construído colaborativamente e serve como uma base robusta para consumo de APIs externas e apresentação institucional de equipes de engenharia de software.

---

## 🎯 O que é este projeto?

A aplicação está dividida em dois grandes módulos integrados por um sistema inteligente de rotas internas:

1. **Buscador de CEP (Módulo Core - Em Desenvolvimento pela Dupla 2):** Uma ferramenta dinâmica que consome a API pública do ViaCEP para buscar, validar e preencher dados de endereço em tempo real baseado no input do usuário.
2. **Sobre a Equipe (Módulo Institucional - Desenvolvido pela Dupla 1):** Uma página elegante e responsiva com cards dinâmicos apresentando os 6 integrantes do grupo através do ciclo estrutural do *ngFor / CommonModule, além de uma seção dedicada a Referências Bibliográficas padronizadas.

---

## ✨ Recursos de Destaque (Tech Highlights)

* **Navegação Instantânea (SPA):** Troca de contextos em milissegundos utilizando as diretivas <router-outlet> e routerLink do Angular Router. Esqueça telas piscando ou recarregamentos pesados!
* **Arquitetura Standalone:** Componentes independentes de módulos globais monolíticos, facilitando a manutenção e testes automatizados.
* **Estilização Isolada:** Cada componente possui seu próprio escopo CSS, garantindo que o design de uma página nunca quebre o visual de outra.
* **Gerenciamento de Cache Otimizado:** Desenvolvido em conjunto com o compilador Vite, proporcionando builds de desenvolvimento extremamente velozes.

---

## 📂 Estrutura do Projeto (Visão do Desenvolvedor)

O código fonte está organizado de forma totalmente semântica dentro de src/app/:

src/app/
├── app.html                  # Estrutura principal do site e menu de navegação SPA
├── app.css                   # Estilos globais e layout base da aplicação
├── app.ts                    # Componente raiz (App) gerenciador do RouterOutlet
├── app.routes.ts             # O "mapa" que dita as rotas internas do ecossistema
├── buscador/                 # Componente do Buscador de CEP (Terreno preparado!)
│   ├── buscador.component.ts
│   ├── buscador.component.html
│   └── buscador.component.css
└── sobre/                    # Componente "Sobre a Equipe" (Pronto e estilizado)
    ├── sobre.component.ts    # Controla os dados dos integrantes e imports necessários
    ├── sobre.component.html  # Cards estilizados com renderização iterativa
    └── sobre.component.css   # Regras visuais, efeitos de hover e responsividade dos cards

---

## 🚀 Como Executar Este Projeto na Sua Máquina Local

Gostou do projeto e quer ver a mágica do SPA acontecendo de perto? Siga o passo a passo abaixo para rodar a aplicação em menos de 3 minutos!

### 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em seu computador:
* Node.js (Versão LTS recomendada)
* Git

---

### 🛠️ Passo a Passo para Instalação e Execução

#### 1. Clonar o Repositório
Abra o terminal do seu sistema operacional (ou Git Bash) e execute o comando abaixo para clonar o projeto:
git clone <URL_DO_SEU_REPOSITORIO_AQUI>

#### 2. Entrar na Pasta do Projeto
Navegue para o diretório criado pelo clone:
cd projeto-integrantes-ts

#### 3. Instalar as Dependências do Ecossistema
Este comando lerá o arquivo package.json e baixará todas as dependências oficiais do Angular e do compilador automaticamente para a sua máquina:
npm install

#### 4. Iniciar o Servidor de Desenvolvimento
Agora, vamos ligar o motor do projeto! Execute o comando para subir o servidor local limpando eventuais caches antigos:
npm start

#### 5. Explorar a Aplicação 🌐
Assim que o terminal indicar que o bundle foi gerado com sucesso, abra o seu navegador de preferência e digite o endereço:

👉 http://localhost:4200

* Prontinho! Navegue entre as abas Buscador de CEP e Sobre a Equipe no menu superior e repare na velocidade de transição sem recarregamento da página (efeito SPA)!

---

## 🤝 Contribuição e Autores

Este projeto é um esforço conjunto focado em boas práticas de engenharia de software e divisão de responsabilidades ágeis.

* **Dupla 1 (Infraestrutura de Rotas & Tela Sobre a Equipe):** Responsável por criar a espinha dorsal do roteamento SPA, arquitetura de arquivos e a interface de apresentação institucional.
* **Dupla 2 (Lógica do Buscador ViaCEP):** Responsável por implementar os fluxos assíncronos e o consumo de dados da API de endereços dentro do componente buscador.

---

⭐ Se você achou a arquitetura limpa ou o passo a passo útil, não se esqueça de deixar uma estrela neste repositório!
