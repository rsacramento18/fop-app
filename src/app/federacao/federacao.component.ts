import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-federacao',
  templateUrl: './federacao.component.html',
  styleUrls: ['./federacao.component.scss']
})
export class FederacaoComponent implements OnInit {

  component = 1;

  constructor() { }

  ngOnInit() {
  }

  showComponent(num : number) {
    this.component = num;
  }

}
