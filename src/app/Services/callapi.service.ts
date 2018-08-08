import { Injectable } from '@angular/core';
import  { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';




@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  baseUrl: string = 'https://swapi.co/api/people/';
  queryUrl: string = '?search=';


  constructor(private http:Http) { }
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
  }


  //callapi
//   getworkers(){
  
    


//   return this.http.get('https://swapi.co/api/people/').map(result => result.json());



 

//   }
// }
}
