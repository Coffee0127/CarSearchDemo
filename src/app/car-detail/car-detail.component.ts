import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-detail',
  templateUrl: 'car-detail.component.html',
  styleUrls: ['car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  private _selectedCar: Car = new Car();

  get selectedCar() {
    return this._selectedCar;
  }

  @Input()
  set selectedCar(value) {
    if (value) {
      if (value instanceof Car) {
        this._selectedCar = value;
      } else if (typeof value === 'string') {
        this._selectedCar = <Car> JSON.parse(<string> value);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
