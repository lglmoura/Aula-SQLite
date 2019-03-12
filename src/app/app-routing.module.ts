import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'raca', loadChildren: './raca/raca.module#RacaPageModule' },
  { path: 'raca', loadChildren: './raca/raca.module#RacaPageModule' },
  { path: 'detalhe-raca', loadChildren: './raca/detalhe-raca/detalhe-raca.module#DetalheRacaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
