import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-car-record]',
  templateUrl: 'car-record.component.html',
  styleUrls: ['car-record.component.css']
})
export class CarRecordComponent implements OnInit {

  @Input()
  i: number;
  @Input()
  car: any;

  constructor() { }

  ngOnInit() {
  }

}
