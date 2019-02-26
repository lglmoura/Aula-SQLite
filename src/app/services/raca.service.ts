import { Raca } from './../models/raca';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';
import { Raca } from '../models/raca';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(public dbService : DatabaseService) { }

  public insert(raca : Raca): void{
    let sql= "insert into raca( id , nome) values (?,?)";
    let data = [raca.id, raca.nome];
    this.executeSQL(sql,data,"Raca inseida");
  }

  public update(raca : Raca): void{
    let sql= "update raca set  nome = ? values where id = ?";
    let data = [raca.id, raca.nome];
    this.executeSQL(sql,data,"Raca inseida");
  }

  public remove(raca : Raca): void{
    let sql= "delte from raca where id = ?";
    let data = [raca.id];
    this.executeSQL(sql,data,"Raca Deletada");
  }

  public getAll():Array<Raca>{
    let sql= "select * from raca";
    let data : any[];
    let retorno = this.executeSQL(sql,data,"Raca Deletada");
    let racas = new Array<Raca>();
    if(retorno.rows.length > 0){
      
      for( var i =0; i < retorno.rows.length;i++){
        let raca = retorno.rows.item(i);
        racas.push(new Raca(raca.id, raca.nome));
      }
      
    }
    return racas; 
    
  }


  private executeSQL(sql:string, data : any[],msg? : string): any {

    this.dbService.getDataBase()
    .then((db : SQLiteObject) =>{
      db.executeSql(sql,data).then((data : any)=>{
        console.log(msg);
        return data; 

      })
      .catch(e=> console.error(e));
    })
    .catch(e => console.error(e));
  }
}
