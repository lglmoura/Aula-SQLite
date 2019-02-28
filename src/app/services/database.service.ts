import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { 

  }
  public getDataBase(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      
  }
  public createDataBase(){
    return this.getDataBase()
    .then((db : SQLiteObject) =>{
     this.deleteTables(db);
     this.createTables(db);
    })
    .catch (e => console.error(e));
    
  }
  
  private createTables(db : SQLiteObject){
    return db.sqlBatch([
        ['CREATE TABLE IF NOT EXISTS raca ( id integer primary key AUTOINCREMENT NOT NULL, nome VARCHAR(100) NULL);'],
        ['CREATE TABLE IF NOT EXISTS proprietario ( id integer primary key AUTOINCREMENT NOT NULL, '+ 
              'nome VARCHAR(100) NULL, rua VARCHAR(100) NULL, complemento VARCHAR(45) '+
              'NULL, bairro VARCHAR(45) NULL, cidade VARCHAR(100) NULL, estado VARCHAR(2) '+
              'NULL, cep VARCHAR(8) NULL);'],
        ['CREATE TABLE IF NOT EXISTS cachorro (id integer primary key AUTOINCREMENT NOT NULL,nome VARCHAR(100) NULL, '+ 
                                               'idade integer NULL, Proprietario_id integer NOT NULL, '+
                                               'raca_id integer NOT NULL, '+
                                               'FOREIGN KEY (Proprietario_id) REFERENCES Proprietario (id), '+
                                               'FOREIGN KEY (raca_id) REFERENCES raca (id));']
      ]).then(() => {
        console.log("tabelas criadas");
      }).catch (e => console.error(e));
    }

  private deleteTables(db : SQLiteObject, oldVersion? :number, newVersion? : number) {
      return db.sqlBatch([['DROP TABLE IF EXISTS raca;'],
                        ['DROP TABLE IF EXISTS proprietario;'],
                        ['DROP TABLE IF EXISTS cachorro;']
                      ]).then(() =>{
                        console.log("Tabelas deletas");
                      }).catch( e => console.error(e));
  }
}
