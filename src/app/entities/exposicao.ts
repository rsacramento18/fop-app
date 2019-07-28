import { ExposicaoTipo } from './exposicaoTipo';
import { ExposicaoDatas } from './exposicaoDatas';
import { ExposicaoPrecos } from './exposicaoPrecos';
import { ExposicaoPremios } from './exposicaoPremios';

export class Exposicao {
    id: number;
    titulo: string;
    logo: string;
    cartaz: string;
    morada: string;
    nib: string;
    descricao: string;
    tipo: ExposicaoTipo;
    datas: ExposicaoDatas;
    precos: ExposicaoPrecos;
    premios: ExposicaoPremios;
    oneDayShow: boolean;
    ativo: boolean;

    constructor() {
        this.tipo = new ExposicaoTipo;
        this.datas = new ExposicaoDatas;
        this.precos = new ExposicaoPrecos;
        this.premios = new ExposicaoPremios;
    }
}