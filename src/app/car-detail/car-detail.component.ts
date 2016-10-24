import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input()
  selectedCar;

  constructor() { }

  ngOnInit() {
  }

}
