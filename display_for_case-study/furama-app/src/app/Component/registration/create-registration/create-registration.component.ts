import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  imgLogo: string = 'https://sohanews.sohacdn.com/2017/2-1509544156756.jpg';

  public pakages = ['None', 'Monthly', 'Quaterly', 'Yearly'];
  public gender = ['Male', 'FeMale', 'Others'];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
