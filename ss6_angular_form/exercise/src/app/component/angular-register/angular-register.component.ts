import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/register';

@Component({
  selector: 'app-register',
  templateUrl: './angular-register.component.html',
  styleUrls: ['./angular-register.component.scss']
})
export class AngularRegisterComponent implements OnInit {
  registers: Register[] = [];
  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('')
      }, comparePassword),
      country: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl(''),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  registersForm() {
    if (this.registerForm.valid) {
      this.registers.push(this.registerForm.value);
    }
  }

  get pwGroup() {
    return this.registerForm.get('pwGroup');
  }

  get password() {
    return this.pwGroup.get('password');
  }

  get confirmPassword() {
    return this.pwGroup.get('confirmPassword');
  }

}

function comparePassword(pw: AbstractControl) {
  const val = pw.value;
  return (val.password === val.confirmPassword) ? null : {
    passwordnotmatch: true
  };

}
