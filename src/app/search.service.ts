import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICar } from './shared/icar';

@Injectable()
export class SearchService {

  data: ICar[];

  DEFAULT_DATA: ICar[] = [];

  constructor(private http: Http) {
    http.get('/assets/cars.json').subscribe((value) => {
      this.DEFAULT_DATA = value.json();
    });
  }

  doSearch(keyword?) {
    if (keyword) {
      this.data = this.DEFAULT_DATA.filter((value: ICar) => {
        return value.make.toLowerCase().indexOf(keyword.toLowerCase()) != -1 ||
          value.model.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
      });
    } else {
      this.data = this.DEFAULT_DATA;
    }
  }
}
