import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-login',
  templateUrl: './angular-login.component.html',
  styleUrls: ['./angular-login.component.scss']
})
export class AngularLoginComponent implements OnInit {
  logins: Login[] = [];
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
