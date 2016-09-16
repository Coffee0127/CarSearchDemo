import { Component, OnInit, Input } from '@angular/core';
import { ICar } from '../shared/icar';

@Component({
  selector: 'app-car-detail',
  templateUrl: 'car-detail.component.html',
  styleUrls: ['car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input()
  selectedCar: ICar;

  constructor() { }

  ngOnInit() {
  }

}
