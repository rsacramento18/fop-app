import { Component, OnInit } from '@angular/core';
import { Exposicao } from '../entities/exposicao';
import { ExposicaoService } from '../services/exposicao.service';

@Component({
  selector: 'app-exposicoes',
  templateUrl: './exposicoes.component.html',
  styleUrls: ['./exposicoes.component.scss']
})
export class ExposicoesComponent implements OnInit {
  allExposicoes : Exposicao[] = [];

  constructor(private exposicaoService: ExposicaoService) {
    this.exposicaoService.getListExposicao().subscribe((res : Exposicao[]) => {
      this.allExposicoes = res;
    })
   }

  ngOnInit() {
  }

}
