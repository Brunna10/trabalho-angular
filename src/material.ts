export class Material{

    id : number;

    nome : string;

    qtd : number;

    constructor(id?: number, nome?: string, qtd ?: number){
        this.id = id;
        this.nome = nome;
        this.qtd = qtd;
    }

}