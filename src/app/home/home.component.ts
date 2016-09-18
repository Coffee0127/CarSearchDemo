import { Component, OnInit } from '@angular/core';
import { ICar } from '../shared/icar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  private _pageTitle = '<i>Car Search Engine</i> ';
  private _counter = 0;
  pageTitle = this._pageTitle + this._counter;

  selectedCar: ICar;

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.pageTitle = this._pageTitle + (++this._counter);
  }
}
