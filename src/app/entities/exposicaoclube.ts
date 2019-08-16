import { Exposicao } from './exposicao';
import { Club } from './club';

export class ExposicaoClube {
    id: number;
    exposicao : Exposicao;
    clube: Club;
    ativo: boolean;

    constructor() {
        this.exposicao = new Exposicao;
        this.clube = new Club;
    }

    
}