import { Component, OnInit } from '@angular/core';

import { Orgao } from '../entities/orgao';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  orgaoActive = 1;

  orgaos1: Orgao[] = [];
  orgaos2: Orgao[] = [];
  orgaos3: Orgao[] = [];
  orgaos4: Orgao[] = [];
  orgaos5: Orgao[] = [];
  orgaos6: Orgao[] = [];
  orgaos7: Orgao[] = [];
  private orgao1 = new Orgao();
  private orgao2 = new Orgao();
  private orgao3 = new Orgao();
  private orgao4 = new Orgao();
  private orgao5 = new Orgao();
  private orgao8 = new Orgao();
  private orgao9 = new Orgao();
  private orgao10 = new Orgao();
  private orgao11 = new Orgao();
  private orgao12 = new Orgao();
  private orgao13 = new Orgao();
  private orgao14 = new Orgao();
  private orgao15 = new Orgao();
  private orgao16 = new Orgao();
  private orgao17 = new Orgao();
  private orgao18 = new Orgao();
  private orgao19 = new Orgao();
  private orgao20 = new Orgao();
  private orgao21 = new Orgao();
  private orgao22 = new Orgao();
  private orgao23 = new Orgao();

  constructor() { }

  ngOnInit(
  ) {

    this.orgao1.section=1;
    this.orgao1.role="Presidente";
    this.orgao1.name="Eutiquio Silva";
    this.orgao1.photo="../../assets/img/photos/Eutiquio_Silva.jpg";
    this.orgao1.email="eutiquio.silva@fop.com.pt";

    this.orgaos1.push(this.orgao1);

    this.orgao2.section=1;
    this.orgao2.role="Vice-Presidente Técnico";
    this.orgao2.name="Adelino Charana Vieira";
    this.orgao2.photo="../../assets/img/photos/Adelino_Vieira.jpg";
    this.orgao2.club="GOC";
    this.orgao2.email="adelino.vieira@fop.com.pt";

    this.orgaos1.push(this.orgao2);

    this.orgao3.section=1;
    this.orgao3.role="Secretário";
    this.orgao3.name="Luís Bandeira";
    this.orgao3.photo="../../assets/img/photos/Luis_Bandeira.jpg";
    this.orgao3.email="luis.bandeira@fop.com.pt";

    this.orgaos1.push(this.orgao3);

    this.orgao4.section=1;
    this.orgao4.role="Tesoureiro";
    this.orgao4.name="António Júlio";
    this.orgao4.photo="../../assets/img/photos/Antonio_Julio.jpg";
    this.orgao4.club="COCR";
    this.orgao4.email="antonio.julio@fop.com.pt";

    this.orgaos1.push(this.orgao4);

    this.orgao5.section=1;
    this.orgao5.role="Vogal";
    this.orgao5.name="Marco Domingos";
    this.orgao5.photo="../../assets/img/photos/Marco_Domingos.jpg";
    this.orgao5.club="COCR";
    this.orgao5.email="marco.domingos@fop.com.pt";

    this.orgaos1.push(this.orgao5);


    this.orgao8.section=2;
    this.orgao8.role="Presidente";
    this.orgao8.name="João Paulo Araújo";
    this.orgao8.club="COBI";

    this.orgaos2.push(this.orgao8);

    this.orgao9.section=2;
    this.orgao9.role="Vice-Presidente";
    this.orgao9.name="Luis Grencho";
    this.orgao9.club="COSM";

    this.orgaos2.push(this.orgao9);

    this.orgao10.section=2;
    this.orgao10.role="Secretário";
    this.orgao10.name="Carlos Pereira";
    this.orgao10.club="COAC";

    this.orgaos2.push(this.orgao10);

    this.orgao11.section=3;
    this.orgao11.role="Presidente";
    this.orgao11.name="Manuel Sacramento";
    this.orgao11.club="COS";

    this.orgaos2.push(this.orgao11);

    this.orgao12.section=3;
    this.orgao12.role="Vogal";
    this.orgao12.name="Hêlder Serôdio";
    this.orgao12.club="COV";

    this.orgaos2.push(this.orgao12);

    this.orgao13.section=3;
    this.orgao13.role="Vogal";
    this.orgao13.name="José Carlos Gonçalves";
    this.orgao13.club="CPCC";

    this.orgaos2.push(this.orgao13);

    this.orgao14.section=4;
    this.orgao14.role="Presidente";
    this.orgao14.name="Dra. Joana Coelho Grácio Roque Lino";
    this.orgao14.club="Independente";

    this.orgaos2.push(this.orgao14);

    this.orgao15.section=4;
    this.orgao15.role="Vogal";
    this.orgao15.name="Pedro Rodrigues";
    this.orgao15.club="AAT";

    this.orgaos2.push(this.orgao15);

    this.orgao16.section=4;
    this.orgao16.role="Vogal";
    this.orgao16.name="Sérgio Rodrigues";
    this.orgao16.club="COP";

    this.orgaos2.push(this.orgao16);


    this.orgao17.section=5;
    this.orgao17.role="Presidente";
    this.orgao17.name="Dr. Carlos José Oliveira Ramos";
    this.orgao17.club="Independente";

    this.orgaos2.push(this.orgao17);

    this.orgao18.section=5;
    this.orgao18.role="Vogal";
    this.orgao18.name="Dr. Vítor Severino";
    this.orgao18.club="COP";

    this.orgaos2.push(this.orgao18);

    this.orgao19.section=5;
    this.orgao19.role="Vogal";
    this.orgao19.name="Eurico Fonseca";
    this.orgao19.club="GOC";

    this.orgaos2.push(this.orgao19);


    this.orgao20.section=6;
    this.orgao20.role="Presidente";
    this.orgao20.name="Paulo Fernandes";
    this.orgao20.club="Canários de Porte";

    this.orgaos2.push(this.orgao20);

    this.orgao21.section=6;
    this.orgao21.role="Vice-Presidente";
    this.orgao21.name="Paulo Germano";
    this.orgao21.club="Psitacideos";

    this.orgaos2.push(this.orgao21);

    this.orgao22.section=6;
    this.orgao22.role="Secretário";
    this.orgao22.name="Manuel Fonseca";
    this.orgao22.club="Canários de Côr";

    this.orgaos2.push(this.orgao22);

    this.orgao23.section=6;
    this.orgao23.role="Suplente";
    this.orgao23.name="Fernando Batista";
    this.orgao23.club="Exóticos";

    this.orgaos2.push(this.orgao23);
    console.log(this.orgaos2);
  }


  showOrgao(num : number) {
    this.orgaoActive = num;
  }

}
