import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICar } from './shared/icar';

@Injectable()
export class SearchService {

  keyword = '';

  datas: ICar[];
  DEFAULT_DATAS: ICar[] = [];

  constructor(private http: Http) {
    http.get('/api/cars.json').subscribe((value) => {
      this.datas = this.DEFAULT_DATAS = value.json();
    });
  }

  doSearch(keyword: string) {
    if (keyword) {
      this.datas = this.DEFAULT_DATAS.filter((value: ICar) => {
        return value.make.toLowerCase().indexOf(keyword.toLowerCase()) != -1 ||
          value.model.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
      });
    } else {
      this.datas = this.DEFAULT_DATAS;
    }
  }
}
