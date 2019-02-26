import { Proprietario } from './proprietario';
import { Raca } from './raca';
export class Cachorro{
    id : number;
    nome : string;
    idade : number;
    proprietario : Proprietario;
    raca : Raca;


    constructor(id?: number, nome? : string, idade? : string, proprietario? : Proprietario, raca? : Raca){
        this.id = id;
        this.nome = nome;
        this.proprietario = proprietario;
        this.raca = raca;
        
    }

}