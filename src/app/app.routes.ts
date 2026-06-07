import { Routes } from '@angular/router';
import {BuscadorComponent} from './buscador/buscador.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  // Quando o site abrir direto no http://localhost:4200/, ele vai carregar a sua página
  { path: '', component: SobreComponent }, 
  
  // Se alguém digitar http://localhost:4200/sobre, também vai para ela
  { path: 'sobre', component: SobreComponent } 
];