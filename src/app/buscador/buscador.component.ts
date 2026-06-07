import { Component, OnInit, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemeService } from '../services/theme.service';
import { FavoritosService } from '../services/favoritos.service';

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  ibge: string;
  erro?: boolean;
}

interface HistoricoItem {
  cep: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class Buscador implements OnInit {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);
  theme = inject(ThemeService);
  fav = inject(FavoritosService);
  private cache = new Map<string, ViaCepResponse>();

  cepInput = '';
  // Estado reativo (signals) — necessário no modo zoneless para
  // atualizar a tela após respostas assíncronas (HTTP / setTimeout).
  resultado = signal<ViaCepResponse | null>(null);
  erro = signal('');
  carregando = signal(false);
  dataConsulta = signal('');
  copiado = signal(false);
  historico = signal<HistoricoItem[]>([]);

  private readonly HISTORICO_KEY = 'buscacep_historico';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const histSalvo = localStorage.getItem(this.HISTORICO_KEY);
      if (histSalvo) this.historico.set(JSON.parse(histSalvo));
    }

    // Busca automática vinda dos favoritos (?cep=...)
    this.route.queryParams.subscribe((params) => {
      const cep = params['cep'];
      if (cep) {
        this.cepInput = cep;
        this.buscarCep();
      }
    });
  }

  buscarCep() {
    const cepLimpo = this.cepInput.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      this.erro.set('CEP inválido. Informe 8 dígitos.');
      this.resultado.set(null);
      return;
    }

    if (this.cache.has(cepLimpo)) {
      const cached = this.cache.get(cepLimpo)!;
      this.resultado.set(cached);
      this.dataConsulta.set(new Date().toLocaleString('pt-BR'));
      this.erro.set('');
      this.salvarHistorico({ cep: cached.cep, localidade: cached.localidade, uf: cached.uf });
      return;
    }

    this.carregando.set(true);
    this.erro.set('');
    this.resultado.set(null);

    this.http
      .get<ViaCepResponse>(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .pipe(timeout(8000))
      .subscribe({
        next: (data) => {
          if (data.erro) {
            this.erro.set('CEP não encontrado.');
          } else {
            this.cache.set(cepLimpo, data);
            this.resultado.set(data);
            this.dataConsulta.set(new Date().toLocaleString('pt-BR'));
            this.salvarHistorico({ cep: data.cep, localidade: data.localidade, uf: data.uf });
          }
          this.carregando.set(false);
        },
        error: () => {
          this.erro.set('Erro ao consultar o CEP. Verifique sua conexão.');
          this.carregando.set(false);
        },
      });
  }

  buscarItem(item: HistoricoItem) {
    this.cepInput = item.cep;
    this.buscarCep();
  }

  copiarCep() {
    const r = this.resultado();
    if (!r) return;
    navigator.clipboard.writeText(r.cep).then(() => {
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    });
  }

  abrirNoMapa() {
    const r = this.resultado();
    if (!r) return;
    const endereco = `${r.logradouro}, ${r.bairro}, ${r.localidade} - ${r.uf}`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`, '_blank');
  }

  limparHistorico() {
    this.historico.set([]);
    if (isPlatformBrowser(this.platformId)) localStorage.removeItem(this.HISTORICO_KEY);
  }

  isFavorito(): boolean {
    const r = this.resultado();
    return r ? this.fav.isFavorito(r.cep) : false;
  }

  toggleFavorito() {
    const r = this.resultado();
    if (!r) return;
    this.fav.toggle({ cep: r.cep, localidade: r.localidade, uf: r.uf });
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.buscarCep();
  }

  private salvarHistorico(item: HistoricoItem) {
    const atual = this.historico().filter((h) => h.cep !== item.cep);
    const novo = [item, ...atual].slice(0, 5);
    this.historico.set(novo);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.HISTORICO_KEY, JSON.stringify(novo));
    }
  }
}
