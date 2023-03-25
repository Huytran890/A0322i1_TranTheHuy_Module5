import { customerType } from './../../models/customer/customerType';
import { customer } from '../../models/customer/customer';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: customer[] = [];
  gender: string[]

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
        customerType: {id: 1, name: 'Vip'},
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
    )
  }

  getAll(): customer[] {
    return this.customers;
  }

  addStudent(event: any): void {
    this.customers.push(event);
  }
}


