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
        
    this.racaService.getAll().then((racass : Array<Raca>) =>{
        this.racas = racass; 
       
    }).catch(e=> console.error(e));
    
      
  }
 

}


