import { customer } from 'src/app/models/customer/customer';
import { customerType } from 'src/app/models/customer/customerType';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerTypeService } from './../../../services/customer/customer-type.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  public updateForm: FormGroup; 
  public customertypes: Array<customerType> = [];
  public id: number;

  constructor(private CustomerService: CustomerService,
              private toastr: ToastrService,
              private CustomerTypeService: CustomerTypeService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.customertypes = this.CustomerTypeService.getAll();
    
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomerById(this.id);

      this.updateForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required, Validators.pattern('^(KH)\\-\\d{4}$')]),
        name: new FormControl(customer.name, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
        gender: new FormControl(customer.gender, [Validators.required]),
        dateOfBirth: new FormControl(customer.dateOfBirth, [
          Validators.required, 
          this.pastDateValidator,
        ]),
        identityCard: new FormControl(customer.identityCard, [
          Validators.required,
          Validators.pattern('^\\d{9}|\\d{12}$')
        ]),
        phoneNumber: new FormControl(customer.phoneNumber, [
          Validators.required,
          Validators.pattern('^[0-9]{9}$')
        ]),
        email: new FormControl(customer.email, [Validators.required,
          Validators.email
        ]),
        address: new FormControl(customer.address, [Validators.required]),
  
        customerType: new FormControl(customer.customerType, [Validators.required]),
      });
    },
    error => {
      console.log(error);
    },
    () => {

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

  updateCustomer(id: number): void {
    const customer = this.updateForm.value;
    this.CustomerService.updateCustomer(id, customer);
    this.updateForm.reset();
    this.toastr.success('Chỉnh sửa thành công!','Thông báo', { timeOut: 2000 });
    this.router.navigateByUrl('customer/list');
  }

  getCustomerById(id: number): customer {
    return this.CustomerService.findById(id);
  }

}
