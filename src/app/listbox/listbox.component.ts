import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from '../shared/icar';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-listbox',
  providers: [SearchService],
  templateUrl: 'listbox.component.html',
  styleUrls: ['listbox.component.css']
})
export class ListboxComponent implements OnInit {

  content = '';

  @Output()
  private selectedCar = new EventEmitter();

  @Input()
  inputPageTitle = '';

  constructor(private searchService: SearchService) {
  }

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

  showDetail(event: MouseEvent, car: ICar) {
    this.selectedCar.emit(car);
  }
}
