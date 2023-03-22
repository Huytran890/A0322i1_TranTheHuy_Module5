import { customerType } from "./customerType";
import { person } from "../person";

export class customer extends person {
  private address: string;
  private customerType: customerType;
  constructor(
    id: number,
    name: string,
    gender: number,
    dateOfBirth: Date,
    identityCard: string,
    phoneNumber: string,
    email: string,
    address: string,
    customerType: customerType
  ) {
    super(id, name, gender, dateOfBirth, identityCard, phoneNumber, email);
    this.address = address;
    this.customerType = customerType;
  }
}
