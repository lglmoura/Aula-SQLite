import { RacaService } from './../services/raca.service';
import { Component, OnInit } from '@angular/core';
import { Raca } from '../models/raca';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-raca',
  templateUrl: './raca.page.html',
  styleUrls: ['./raca.page.scss'],
})
export class RacaPage implements OnInit {

  public raca  : Raca;
  public racas : Array<Raca>; 

  constructor(public racaService : RacaService) {

   }

   
  ngOnInit() {
    this.initializePage(); 
    
  }
  ngAfterViewInit(){
    
    this.initializePage();
  }

  private async initializePage(){
    
    for(let cont of Array.from(Array(10).keys()).map(i => i)){
       let raca = new Raca("nome "+cont);
       //this.racaService.insert(raca);
    }

    this.racaService.getAll().then((racass : Array<Raca>) =>{
        this.racas = racass; 
        console.log(this.racas);
    }).catch(e=> console.error(e));
    
      
  }
 

}


