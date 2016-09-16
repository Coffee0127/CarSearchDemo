import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../shared/car';

@Component({
  selector: 'app-listbox',
  templateUrl: 'listbox.component.html',
  styleUrls: ['listbox.component.css']
})
export class ListboxComponent implements OnInit {

  content = '';

  @Output()
  private selectedCar = new EventEmitter();

  @Input()
  inputPageTitle = '';

  constructor() { }

  ngOnInit() {
  }

  showText(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.content = (<HTMLInputElement> event.target).value;
    }
  }

  showText2(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.keyCode == 13) {
      this.content = input.value;
    }
  }

  showDetail(event: MouseEvent, car: Car) {
    this.selectedCar.emit(JSON.stringify(car));
  }
}
