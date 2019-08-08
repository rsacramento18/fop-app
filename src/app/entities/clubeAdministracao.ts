import { Club } from './club';

export class ClubeAdministracao {
    id: number;
    clube: Club;
    titulo: string;
    nome: string;
    email: string;
    contacto: string;
    morada: string;
    ativo: boolean;

    constructor() {
        this.clube = new Club;
    }
}