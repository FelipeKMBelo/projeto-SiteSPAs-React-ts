import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly KEY = 'buscacep_tema';

  /** true = tema claro, false = tema escuro (padrão) */
  readonly claro = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.claro.set(localStorage.getItem(this.KEY) === 'claro');
    }
  }

  toggle() {
    this.claro.update((v) => !v);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.KEY, this.claro() ? 'claro' : 'escuro');
    }
  }
}
