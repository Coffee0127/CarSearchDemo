import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  projectName = 'Angular2 Car Search';

  aboutObj = {
    hyperLink: 'https://angular.io/',
    'dash-title': 'About Angular'
  };

  constructor() { }

  ngOnInit() {
  }

}
