import { Routes } from '@angular/router';
import { Buscador } from './buscador/buscador.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: Buscador },
  { path: 'buscador', component: Buscador },
  { path: 'sobre', component: SobreComponent }
];