import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}

    getList() {
      return this.http.get(`${this.BASE_URL}/api/journal-entries`)
        .map((res) => res.json());
    }

    getEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
    }

    addEntry(data){
      return this.http.post(`${this.BASE_URL}/api/journal-entries`,data)
        .map((res)=>res.json())
    }
}
