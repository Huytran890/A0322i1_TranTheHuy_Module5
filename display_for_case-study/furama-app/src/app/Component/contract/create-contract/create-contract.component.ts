import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {
  imgSrc: string;
  public contractForm: FormGroup;
  constructor() {
    this.imgSrc = './assets/videos/flight1.jpg';
   }

  ngOnInit(): void {
  }

}
