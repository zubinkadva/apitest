import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartTwoService extends DataService {

  constructor(http: Http) {
    super('http://localhost:8000/api/product', http);
  }
}
