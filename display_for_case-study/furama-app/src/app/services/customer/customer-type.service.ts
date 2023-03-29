import { customerType } from "./../../models/customer/customerType";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CustomerTypeService {
  customerType: customerType[] = [];
  constructor() {
    this.customerType.push(
      {
        id: 1,
        name: "Member",
      },
      {
        id: 2,
        name: "Silver",
      },
      {
        id: 3,
        name: "Gold",
      },
      {
        id: 4,
        name: "Platinum",
      },
      {
        id: 5,
        name: "Diamond",
      }
    );
  }

  getAll(): customerType[] {
    return this.customerType;
  }
}
