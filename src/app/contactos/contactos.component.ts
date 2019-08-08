import { Component, OnInit } from '@angular/core';
import { Contactos } from '../entities/contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  contactos: Contactos[] = [];

  private contacto1 = new Contactos();
  private contacto2 = new Contactos();
  private contacto3 = new Contactos();
  private contacto4 = new Contactos();
  private contacto5 = new Contactos();

  constructor() { }

  ngOnInit() {
    this.contacto1.id = 1;
    this.contacto1.titulo = "Presidente";
    this.contacto1.nome = "Eutiquio Silva";
    this.contacto1.email = "eutiquio.silva@fop.pt";
    this.contacto1.contacto = "961888363";

    this.contacto2.id = 1;
    this.contacto2.titulo = "Vice-Presidente";
    this.contacto2.nome = "Adelino Vireira";
    this.contacto2.email = "adelino.vieira@fop.pt";
    this.contacto2.contacto = "910382646";

    this.contacto3.id = 1;
    this.contacto3.titulo = "Secretário";
    this.contacto3.nome = "Luís Bandeira";
    this.contacto3.email = "luis.bandeira@fop.pt";
    this.contacto3.contacto = "917635400";

    this.contacto4.id = 1;
    this.contacto4.titulo = "Tesoureiro";
    this.contacto4.nome = "António Júlio Amadeu";
    this.contacto4.email = "antonio.julio@fop.pt";
    this.contacto4.contacto = "966162729";

    this.contacto5.id = 1;
    this.contacto5.titulo = "Vogal";
    this.contacto5.nome = "Marco Domingos";
    this.contacto5.email = "marco.domingos@fop.pt";
    this.contacto5.contacto = "968156998";

    this.contactos.push(this.contacto1);
    this.contactos.push(this.contacto2);
    this.contactos.push(this.contacto3);
    this.contactos.push(this.contacto4);
    this.contactos.push(this.contacto5);
  }

}
