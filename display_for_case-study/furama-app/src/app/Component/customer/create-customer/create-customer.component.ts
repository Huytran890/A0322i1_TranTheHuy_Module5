import { Router } from '@angular/router';
import { CustomerTypeService } from './../../../services/customer/customer-type.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { customerType } from 'src/app/models/customer/customerType';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customerTypes: customerType[] = [];


  constructor(private customerService: CustomerService, 
    private toastr: ToastrService, private CustomerTypeService: CustomerTypeService, private router: Router) { 
    this.customerTypes = this.CustomerTypeService.getAll();

    this.customerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^(KH)\\-\\d{4}$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
      gender: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [
        Validators.required, 
        this.pastDateValidator,
      ]),
      identityCard: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d{9}|\\d{12}$')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{9}$')
      ]),
      email: new FormControl('', [Validators.required,
        Validators.email
      ]),
      address: new FormControl('', [Validators.required]),

      customerType: new FormControl('', [Validators.required]),
    });
  }
  
  
  ngOnInit(): void {
  }

  pastDateValidator(control: FormControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate > currentDate) {
      return { pastDate: true };
    }
    return null;
  }

  addNewCustomer(): void {
    console.log(this.customerForm);
    if(this.customerForm.valid) {
      this.customerService.addStudent(this.customerForm.value);
      this.customerForm.reset();
      this.toastr.success('Thêm mới thành công!','Thông báo', { timeOut: 2000 });
      this.router.navigateByUrl('customer/list');
    }
  }

  // submit() {
  //   // if (this.customerForm.valid) {
  //   //   this.customerService.saveCustomer(this.customerForm.value).subscribe(() => {
  //   //     this.customerForm.reset();
  //       this.toastr.success('Thêm mới thành công!');
  //   //   }, e => {
  //   //     console.log(e);
  //   //   }, () => {
  //   //     this.router.navigate(['/list']);
  //   //   });
  //   // }
  // }
}
