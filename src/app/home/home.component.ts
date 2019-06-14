import { Router } from '@angular/router';
import { PartThreeService } from './../services/part-three.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PartTwoService } from '../services/part-two.service';
import { PartFourService } from '../services/part-four.service';
import { RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  details_p2;
  details_p3;
  details_p4;
  products = [];
  partNo: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    private p2: PartTwoService,
    private p3: PartThreeService,
    private p4: PartFourService) {
    this.details_p2 = JSON.parse(localStorage.getItem('p2'));
    this.details_p3 = JSON.parse(localStorage.getItem('p3'));
    this.details_p4 = JSON.parse(localStorage.getItem('p4'));
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      part_no: ['', Validators.required]
    });
  }

  logout() {
    localStorage.removeItem('p2');
    localStorage.removeItem('p3');
    localStorage.removeItem('p4');
    this.router.navigate(['/login']);
  }

  get partNum() {
    return this.searchForm.get('part_no');
  }

  search() {
    this.products = [];
    this.partNo = this.partNum.value;

    this.details_p2 = JSON.parse(localStorage.getItem('p2'));
    this.details_p3 = JSON.parse(localStorage.getItem('p3'));
    this.details_p4 = JSON.parse(localStorage.getItem('p4'));

    this.doPost(this.p2, this.details_p2.access_token);
    this.doPost(this.p3, this.details_p3.access_token);
    this.doPost(this.p4, this.details_p4.access_token);

  }

  sort(array) {
    array.sort(function (obj1, obj2) {
      if (obj1.price < obj2.price) {
        return -1;
      } else if (obj1.price > obj2.price) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  doPost(server, token) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    let opts = new RequestOptions();
    opts.headers = headers;
    server.postAll({ part: this.partNo }, opts).subscribe(response => {
      if (response.message) this.logout();
      this.products.push(response);
      this.sort(this.products);
    });
  }

}
