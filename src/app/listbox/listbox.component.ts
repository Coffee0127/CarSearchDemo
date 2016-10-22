import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {

  content = '';

  constructor() { }

  ngOnInit() {
  }

  showText(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.keyCode == 13) {
      this.content = input.value;
    }
  }

}
