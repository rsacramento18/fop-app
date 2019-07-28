import { Federacao } from './federacao';

export class Club {
    id: number;
    federacao: Federacao;
    sigla: string;
    nome: string;
    morada: string;
    logo: string;
    website: string;
    email: string;
    quota: string;
    portes: string;
    ativo: boolean;

    constructor() {
        this.federacao = new Federacao;
    }
}