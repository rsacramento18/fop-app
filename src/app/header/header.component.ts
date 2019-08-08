import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("home") home: ElementRef;
  @ViewChild("federacao") federacao: ElementRef;
  @ViewChild("clubes") clubes: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scroll(component : number) {
    console.log(this.home);
    if(component == 1){
      this.home.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      console.log("home");
    } 
    else if(component == 2){
      this.federacao.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      console.log("federacao");
    } 
    else if(component == 3){
      this.clubes.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      console.log("clubes");
    } 
  }

}
