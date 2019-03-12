import { Cachorro } from './cachorro';

export class Raca{
    
    id: number;
    nome :string;
    cachorros : Array<Cachorro>;

    constructor( nome? : string ){
        
        this.nome = nome;
        
    }

    public addCachorro(cachorro : Cachorro): void{
        if(this.cachorros == null){
            this.cachorros = new Array<Cachorro>();
        }
        this.cachorros.push(cachorro);
    }
}