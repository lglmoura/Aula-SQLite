import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheRacaPage } from './detalhe-raca.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheRacaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheRacaPage]
})
export class DetalheRacaPageModule {}
