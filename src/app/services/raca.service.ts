import { Raca } from './../models/raca';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(public dbService : DatabaseService) { }

  public insert(raca : Raca): void{
    let sql= "insert into raca( nome) values (?);";
    let data = [raca.nome];
    this.executeSQL(sql,data,"Raca Inserida");
  }

  public update(raca : Raca): void{
    let sql= "update raca set  nome = ? values where id = ?;";
    let data = [raca.id, raca.nome];
    this.executeSQL(sql,data,"Raca Alterada");
  }

  public remove(raca : Raca): void{
    let sql= "delete from raca where id = ?;";
    let data = [raca.id];
    this.executeSQL(sql,data,"Raca Deletada");
  }

  public getAll(){
    
    return this.dbService.getDataBase().
    then((db : SQLiteObject) =>{
        let sql= "select * from raca";
        let data : any[];
       return db.executeSql(sql,data).then( (retorno : any)=>{
        //
        if(retorno.rows.length > 0){
          let racas = new Array<Raca>();
          for( var i =0; i < retorno.rows.length;i++){
            let raca = retorno.rows.item(i);
            
            racas.push(new Raca( raca.nome));
          }
          console.log(racas.length);
          return racas; 
        } else{
          return new Array<Raca>();
        }
      }).catch(e=> { 
        console.error(e)
        
      });
    })
    .catch(e => {
      console.error(e);
      
    });
     
      
  }

  private  executeSQL(sql:string, data : any[], msg? : string){

    this.dbService.getDataBase().
    then(async (db : SQLiteObject) =>{
      await db.executeSql(sql,data).then( (ret : any)=>{
        
        console.log(ret.rows.length);
         return ret.rows; 

      })
      .catch(e=> { 
        console.error(e)
        return null;
      });
    })
    .catch(e => {
      console.error(e);
      return null;  
    });
      return null;
  }
}
