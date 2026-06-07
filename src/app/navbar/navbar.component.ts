import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { FavoritosService, ItemCep } from '../services/favoritos.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  theme = inject(ThemeService);
  favoritosSrv = inject(FavoritosService);
  private router = inject(Router);

  painelAberto = false;

  togglePainel() {
    this.painelAberto = !this.painelAberto;
  }

  abrirFavorito(item: ItemCep) {
    this.painelAberto = false;
    this.router.navigate(['/'], { queryParams: { cep: item.cep } });
  }

  limpar() {
    this.favoritosSrv.limpar();
  }
}
