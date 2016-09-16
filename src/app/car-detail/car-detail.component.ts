import { Component, OnInit, Input } from '@angular/core';
import { ICar } from '../shared/icar';

@Component({
  selector: 'app-car-detail',
  templateUrl: 'car-detail.component.html',
  styleUrls: ['car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  private _selectedCar: ICar = {};

  get selectedCar() {
    return this._selectedCar;
  }

  @Input()
  set selectedCar(value) {
    if (value) {
      this._selectedCar = <ICar> JSON.parse(<string> value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
