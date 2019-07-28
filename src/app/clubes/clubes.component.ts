import { Component, OnInit } from '@angular/core';

import { Club } from '../entities/club';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.scss']
})
export class ClubesComponent implements OnInit {
  allClubs: Club[] = [];
  currentClub: Club;
  isClubHover = false;

  constructor(private clubService: ClubService) {
    this.clubService.getListClube().subscribe((res: Club[]) => {
      this.allClubs = res;
      this.currentClub = this.allClubs[0];
    })
   }

  ngOnInit() {
  }

  showClub(club: Club) {
    this.currentClub = club;
  }
  

}
