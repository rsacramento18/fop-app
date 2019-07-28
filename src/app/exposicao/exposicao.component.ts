import { Component, OnInit, Input } from '@angular/core';
import { Exposicao } from '../entities/exposicao';

@Component({
  selector: 'app-exposicao',
  templateUrl: './exposicao.component.html',
  styleUrls: ['./exposicao.component.scss']
})
export class ExposicaoComponent implements OnInit {
  @Input() exposicao: Exposicao;

  constructor() { }

  ngOnInit() {
  }

}
