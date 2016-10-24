import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title = '<i>Car Search Engine</i> ';
  counter = 0;
  title = this._title + this.counter;

  selectedCar;

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
