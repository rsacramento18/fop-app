import { Component, OnInit } from '@angular/core';

import { Club } from '../entities/club';
import { ClubService } from '../services/club.service';
import { ClubeAdministracaoService } from '../services/clube.administracao.service';
import { ClubeAdministracao } from '../entities/clubeAdministracao';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit {
  allClubs: Club[] = [];
  currentClub: Club;
  isClubHover = false;

  values: string[] = [];
  fields: string[] = [];
  operators: string[] = [];
  administracaoClube: ClubeAdministracao[] = [];

  constructor(private clubService: ClubService, 
    private clubeAdministracaoService: ClubeAdministracaoService
    ) {
   }

  ngOnInit() {
    this.clubService.getListClube().subscribe((res: Club[]) => {
      this.allClubs = res;
      this.currentClub = this.allClubs[0];

      this.values = [];
      this.fields = [];
      this.operators = [];

      this.values.push(String(this.currentClub.id));
      this.fields.push("clube");
      this.operators.push("EQUAL");

      this.clubeAdministracaoService.getListClubeAdministracaoCriteria(
        this.values, this.fields, this.operators
      ).subscribe((res: ClubeAdministracao[]) => {
        this.administracaoClube = res;
      })

    })
  }

  showClub(club: Club) {
    if(club) {

      this.values = [];
      this.fields = [];
      this.operators = [];

      this.values.push(String(club.id));
      this.fields.push("clube");
      this.operators.push("EQUAL");

      this.clubeAdministracaoService.getListClubeAdministracaoCriteria(
        this.values, this.fields, this.operators
      ).subscribe((res: ClubeAdministracao[]) => {
        this.administracaoClube = res;
      })
      this.currentClub = club;
    }
  }
  

}
