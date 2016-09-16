import { Component } from '@angular/core';
import { ICar } from './shared/icar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private _pageTitle = '<i>Car Search Engine</i> ';
  private _counter = 0;
  pageTitle = this._pageTitle + this._counter;

  selectedCar: ICar;

  plus() {
    this.pageTitle = this._pageTitle + (++this._counter);
  }
}
