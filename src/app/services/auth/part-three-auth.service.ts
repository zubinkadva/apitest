import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class PartThreeAuthService extends DataService {

  constructor(http: Http) {
    super('http://localhost:8001/api/login', http);
  }

}
