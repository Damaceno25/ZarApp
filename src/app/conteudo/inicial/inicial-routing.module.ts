import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPage } from './inicial.page';

const routes: Routes = [
  {
    path: '',
    component: InicialPage,
  },
  {
    path: 'praias',
    loadChildren: () => import('./praias/praias.module').then(m => m.PraiasPageModule),
  },
  {
    path: 'cachoeiras',
    loadChildren: () => import('./cachoeiras/cachoeiras.module').then(m => m.CachoeirasPageModule),
  },
  {
    path: 'trilhas',
    loadChildren: () => import('./trilhas/trilhas.module').then(m => m.TrilhasPageModule),
  },
  {
    path: 'turisticos',
    loadChildren: () => import('./turisticos/turisticos.module').then(m => m.TuristicosPageModule),
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialPageRoutingModule {}
