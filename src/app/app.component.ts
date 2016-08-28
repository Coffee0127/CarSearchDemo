import { Component } from '@angular/core';
import { NavComponent } from './nav';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavComponent]
})
export class AppComponent {
}
