import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-listbox',
  providers: [SearchService],
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {

  @Input()
  inputTitle = '';

  content = '';

  @Output()
  private selectedCar = new EventEmitter();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  showText(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.keyCode == 13) {
      this.content = input.value;
    }
  }

  showDetail(car) {
    this.selectedCar.emit(car);
  }

  doSearch(keyword) {
    this.searchService.doSearch(keyword);
    this.selectedCar.emit(null);
  }
}
