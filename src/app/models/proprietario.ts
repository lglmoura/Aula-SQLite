import { Cachorro } from './cachorro';

export class Proprietario{
    id : number;
    nome: string;
    rua : string;
    complemento : string;
    bairro : string;
    cidade : string;
    estado : string;
    cep : string;
    cachorros : Array<Cachorro>;

    constructor(id?: number, nome? : string, rua? : string, complemento? : string,
                bairro? : string, cidade? : string, estado? : string, cep? : string){
        this.id = id;
        this.nome = nome;
        this.rua = rua;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    public addCachorro(cachorro : Cachorro): void{
        if(this.cachorros == null){
            this.cachorros = new Array<Cachorro>();
        }
        this.cachorros.push(cachorro);
    }
}