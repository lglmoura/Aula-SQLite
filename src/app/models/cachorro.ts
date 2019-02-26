export class Cachorro{
    id : number;
    nome : string;
    idade : number;
    proprietario_id : number;
    raca_id : number;


    constructor(id?: number, nome? : string, idade? : string, proprietario_id? : number, raca_id? : number){
        this.id = id;
        this.nome = nome;
        this.proprietario_id = proprietario_id;
        this.raca_id = raca_id;
        
    }

}