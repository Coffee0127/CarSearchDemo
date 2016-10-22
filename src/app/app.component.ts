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

  plus() {
    this.title = this._title + (++this.counter);
  }
}
