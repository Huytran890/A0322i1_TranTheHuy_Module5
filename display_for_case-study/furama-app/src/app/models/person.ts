export class person {
  private id: number;
  private name: string;
  private gender: number;
  private dateOfBirth: Date;
  private identityCard: string;
  private phoneNumber: string;
  private email: string;

  constructor(
    id: number,
    name: string,
    gender: number,
    dateOfBirth: Date,
    identityCard: string,
    phoneNumber: string,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.identityCard = identityCard;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
