import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ItemCep {
  cep: string;
  localidade: string;
  uf: string;
}

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  private platformId = inject(PLATFORM_ID);
  private readonly KEY = 'buscacep_favoritos';

  readonly items = signal<ItemCep[]>([]);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const salvo = localStorage.getItem(this.KEY);
      if (salvo) this.items.set(JSON.parse(salvo));
    }
  }

  private persist() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.KEY, JSON.stringify(this.items()));
    }
  }

  isFavorito(cep: string): boolean {
    return this.items().some((f) => f.cep === cep);
  }

  toggle(item: ItemCep) {
    if (this.isFavorito(item.cep)) {
      this.items.update((l) => l.filter((f) => f.cep !== item.cep));
    } else {
      this.items.update((l) => [item, ...l]);
    }
    this.persist();
  }

  limpar() {
    this.items.set([]);
    if (isPlatformBrowser(this.platformId)) localStorage.removeItem(this.KEY);
  }
}
