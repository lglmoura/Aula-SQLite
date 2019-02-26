import { Cachorro } from './cachorro';

export class Raca{
    id: number;
    nome :string;
    cachorros : Array<Cachorro>;

    constructor(id?: number, nome? : string ){
        this.id = id;
        this.nome = nome;
        
    }

    public addCachorro(cachorro : Cachorro): void{
        if(this.cachorros == null){
            this.cachorros = new Array<Cachorro>();
        }
        this.cachorros.push(cachorro);
    }
}