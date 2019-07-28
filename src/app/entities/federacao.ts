import { Pais } from './pais';

export class Federacao {
    id: number;
    sigla: string;
    nome: string;
    pais: Pais;
    ativo: boolean;

    constructor(){
        this.pais = new Pais();
    }

}