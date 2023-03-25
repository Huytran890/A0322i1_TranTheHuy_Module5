import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  public customerForm: FormGroup;


  constructor(private customerService: CustomerService, private toastr: ToastrService) { 
    this.customerForm = new FormGroup({
      id: new FormControl('',),
      name: new FormControl('',),
      // gender: new FormControl('',),
      dateOfBirth: new FormControl('',),
      identityCard: new FormControl('',),
      phoneNumber: new FormControl('',),
      email: new FormControl('',),
      address: new FormControl('',),
    });
  }
  
  // customerType: new FormControl('',),
  ngOnInit(): void {
  }

  addNewCustomer() {
    console.log(this.customerForm);
    
  }

}
