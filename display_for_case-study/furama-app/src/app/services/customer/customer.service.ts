import { customerType } from './../../models/customer/customerType';
import { customer } from '../../models/customer/customer';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {
  customers: customer[] = [];
  customerTypes: customerType[] = [];

  constructor() {
    this.customers.push(
      {
        id: 1,
        name: 'Trần Thế Huy',
        gender: 0,
        dateOfBirth: new Date('2002-11-16'),
        identityCard: '044200001835',
        phoneNumber: '0905783653',
        email: 'huytran@gmail.com',
        address: 'k94/32 Lê Hữu Trác, Đà nẵng',
        customerType: {id: 1, name: 'Diamond'},
      },
      {
        id: 2,
        name: 'Phạm Lê Khánh Phương',
        gender: 1,
        dateOfBirth: new Date('2002-01-01'),
        identityCard: '044200456123',
        phoneNumber: '0916499908',
        email: 'khanhphuong@gmail.com',
        address: '31 nguyễn duy hiệu, Phú Yên',
        customerType: {id: 2, name: 'Medium'},
      },
      {
        id: 3,
        name: 'Phạm Thị Mỹ Duyên',
        gender: 1,
        dateOfBirth: new Date('2002-08-31'),
        identityCard: '078911301835',
        phoneNumber: '0905766396',
        email: 'myduyen@gmail.com',
        address: '27 An Thượng 2, Quảng Bình',
        customerType: {id: 3, name: 'Member'},
      },
      {
        id: 4,
        name: 'Võ Đình Tuấn',
        gender: 2,
        dateOfBirth: new Date('2022-01-01'),
        identityCard: '078911301973',
        phoneNumber: '0511797979',
        email: 'tuanvo@gmail.com',
        address: '12 Nguyễn Văn Thoại, Đà Lạt',
        customerType: {id: 3, name: 'Gold'},
      },
    );
  }

  ngOnInit(): void {
      
  }

  getAll(): customer[] {
    return this.customers;
  }

  addStudent(event: any): void {
    this.customers.push(event);
  }

  findById(value: number): customer {
    return this.customers.filter(customer => 
      customer.id === value)[0];
  }

  updateCustomer(id: number, customer: customer) {
    for(let i = 0; i < this.customers.length; i++) {
      if(this.customers[i]['id'] === id) {
        this.customers[i] = customer;
        break;
      }
    }
    console.log(this.customers);
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}


