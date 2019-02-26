import { RacaService } from './../services/raca.service';
import { Component, OnInit } from '@angular/core';
import { Raca } from '../models/raca';


@Component({
  selector: 'app-raca',
  templateUrl: './raca.page.html',
  styleUrls: ['./raca.page.scss'],
})
export class RacaPage implements OnInit {

  raca  : Raca;
  racas : Array<Raca>; 

  constructor(public racaService : RacaService) {

   }

  ngOnInit() {
    /*for(let cont = 300; cont < 302;cont++){
      let raca = new Raca(cont,"nome "+cont);
      this.racaService.insert(raca);
    }
    */

    //this.racas = this.racaService.getAll();
    //console.log(this.racas);
  }

}

/*
<ion-footer>
  <ion-toolbar>
    <ion-fab right bottom>
      <button ion-fab color="primary" (click)="addLocal()">
        <ion-icon name="add"></ion-icon>
      </button>
    </ion-fab>
  </ion-toolbar>
</ion-footer>

*/
