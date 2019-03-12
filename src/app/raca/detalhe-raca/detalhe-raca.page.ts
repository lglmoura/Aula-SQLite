import { Component, OnInit } from '@angular/core';
import { Raca } from 'src/app/models/raca';
import { RacaService } from 'src/app/services/raca.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-raca',
  templateUrl: './detalhe-raca.page.html',
  styleUrls: ['./detalhe-raca.page.scss'],
})
export class DetalheRacaPage implements OnInit {
  public raca: Raca = new Raca();

  constructor(public racaService : RacaService,
              private navCTRL: NavController,
              private router : Router) { }

  ngOnInit() {
  }
  public salvar():void{
    this.racaService.insert(this.raca);
    this.navCTRL.pop();
  }

}
