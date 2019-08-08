import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../entities/club';
import { ClubeAdministracao } from '../entities/clubeAdministracao';
import { ClubeAdministracaoService } from '../services/clube.administracao.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  @Input() clube: Club;
  @Input() administracaoClube: ClubeAdministracao;
  
  constructor(private clubeAdministracaoService: ClubeAdministracaoService) { }

  ngOnInit() {
  }

}
