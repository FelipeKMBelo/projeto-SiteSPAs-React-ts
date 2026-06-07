// ===== SOBRE COMPONENT - TYPESCRIPT =====
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Integrante {
  nome: string;
  idade: number | string;
  curso: string;
  funcao: string;
}

export interface Referencia {
  titulo: string;
  descricao: string;
  url: string;
  categoria: string;
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  // ===== ANO ATUAL (FOOTER) =====
  anoAtual: number = new Date().getFullYear();

  // ===== DUPLA 1 — DOCUMENTAÇÃO =====
  dupla1: Integrante[] = [
    {
      nome: 'Eduardo Leonel',          
      idade: 21,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Documentação e Fundamentação Teórica'
    },
    {
      nome: 'Kelly',
      idade: 22,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Documentação e Fundamentação Teórica'
    }
  ];

  // ===== DUPLA 2 — 1ª PÁGINA (ViaCEP) =====
  dupla2: Integrante[] = [
    {
      nome: 'Diones',    
      idade: 23,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Desenvolvimento da Primeira Tela (Buscador ViaCEP)'
    },
    {
      nome: 'Ryan',     
      idade: 23,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Desenvolvimento da Primeira Tela (Buscador ViaCEP)'
    }
  ];

  // ===== DUPLA 3 — 2ª PÁGINA (Sobre e Referências) =====
  dupla3: Integrante[] = [
    {
      nome: 'Felipe',     
      idade: 19,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Desenvolvimento da Segunda Tela (Sobre e Referências)'
    },
    {
      nome: 'Rafael Pasqual',     
      idade: 22,                 
      curso: 'Análise e Desenvolvimento de Sistemas',
      funcao: 'Desenvolvimento da Segunda Tela (Sobre e Referências)'
    }
  ];

  // ===== REFERÊNCIAS BIBLIOGRÁFICAS =====
  referencias: Referencia[] = [
    {
      titulo: 'Angular — Documentação Oficial',
      descricao: 'Guia completo e oficial do framework Angular, incluindo conceitos de componentes, diretivas, serviços e roteamento.',
      url: 'https://angular.dev',
      categoria: 'Framework'
    },
    {
      titulo: 'ViaCEP — API de Consulta de CEP',
      descricao: 'Serviço gratuito de consulta de CEP utilizado neste projeto para busca de endereços a partir do CEP informado.',
      url: 'https://viacep.com.br',
      categoria: 'API REST'
    },
    {
      titulo: 'TypeScript — Documentação Oficial',
      descricao: 'Referência da linguagem TypeScript, superset tipado do JavaScript utilizado como base do Angular.',
      url: 'https://www.typescriptlang.org/docs/',
      categoria: 'Linguagem'
    },
    {
      titulo: 'MDN Web Docs — CSS Flexbox',
      descricao: 'Documentação completa sobre o modelo de layout Flexbox, utilizado para organizar os cards de integrantes.',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout',
      categoria: 'CSS'
    },
    {
      titulo: 'MDN Web Docs — CSS Grid Layout',
      descricao: 'Referência sobre CSS Grid, sistema de layout bidimensional utilizado na estruturação das seções da página.',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout',
      categoria: 'CSS'
    },
    {
      titulo: 'Angular — HttpClient',
      descricao: 'Documentação do módulo HttpClient do Angular, usado para realizar requisições HTTP à API ViaCEP.',
      url: 'https://angular.dev/guide/http',
      categoria: 'Angular'
    },
    {
      titulo: 'Google Fonts',
      descricao: 'Repositório de fontes tipográficas web utilizadas para melhorar a identidade visual do projeto.',
      url: 'https://fonts.google.com',
      categoria: 'Design'
    },
    {
      titulo: 'RxJS — Reactive Extensions para JavaScript',
      descricao: 'Biblioteca de programação reativa utilizada pelo Angular para gerenciar fluxos de dados assíncronos.',
      url: 'https://rxjs.dev/guide/overview',
      categoria: 'Biblioteca'
    }
  ];
}