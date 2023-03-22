import { position } from "./position";
import { level } from "./level";
import { person } from "../person";
export class employee extends person {
  private level: level;
  private position: position;
  private salary: number;
  constructor(
    id: number,
    name: string,
    gender: number,
    dateOfBirth: Date,
    identityCard: string,
    phoneNumber: string,
    email: string,
    level: level,
    position: position,
    salary: number
  ) {
    super(id, name, gender, dateOfBirth, identityCard, phoneNumber, email);
    this.level = level;
    this.position = position;
    this.salary = salary;
  }
}
