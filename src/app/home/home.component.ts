import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _title = '<i>Car Search Engine</i> ';
  counter = 0;
  title = this._title + this.counter;

  selectedCar;

  constructor() { }

  ngOnInit() {
  }

  plus() {
    this.title = this._title + (++this.counter);
  }

  setClasses() {
    let classes = {
      blue: this.counter % 2 == 0,
      big: this.counter % 2 == 0,
      red: this.counter % 2 != 0,
      small: this.counter % 2 != 0
    };
    return classes;
  }

  setStyles() {
    let styles = {
      'text-decoration': this.counter % 2 == 0 ? 'underline' : 'none',
      'font-weight': this.counter % 2 == 0 ? '500' : '200'
    };
    return styles;
  }

}
