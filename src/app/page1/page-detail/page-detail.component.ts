import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  id: string;

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.id = value['id'];
    });
  }

}
