import { PartFourAuthService } from './../services/auth/part-four-auth.service';
import { PartThreeAuthService } from './../services/auth/part-three-auth.service';
import { PartTwoAuthService } from './../services/auth/part-two-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string = '';
  end: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private p2: PartTwoAuthService,
    private p3: PartThreeAuthService,
    private p4: PartFourAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    let login = {
      email: this.email.value,
      password: this.password.value,
      remember_me: this.remember.value
    }

    this.loginToServer('p2', this.p2, login);
    this.loginToServer('p3', this.p3, login);
    this.loginToServer('p4', this.p4, login)
      .then(() => this.router.navigate(['']));

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get remember() {
    return this.loginForm.get('remember');
  }

  loginToServer(name, service, data) {
    return new Promise((resolve, reject) => {
      service.postAll(data, [])
        .subscribe(response => {
          if (response && response.access_token) {
            localStorage.setItem(name, JSON.stringify({
              email: data.email,
              access_token: response.access_token,
              expires_at: response.expires_at
            }));
          }
          resolve(data);
        }, error => this.error = 'Bad email/password');
    });
  }

}
